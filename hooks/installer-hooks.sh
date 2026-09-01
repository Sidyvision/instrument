#!/usr/bin/env bash
# Installe les hooks git de ce dépôt.
#
# `.git/hooks/` n'est pas versionné : un garde-fou qui ne survit pas à un clone
# n'est pas un garde-fou du dépôt, c'est une habitude locale. Les hooks vivent
# donc ici, suivis par git. Même méthode qu'au wiki (chantier PRO-01).
#
#   bash hooks/installer-hooks.sh
#
# Aucune sauvegarde n'est écrasée : un hook déjà en place et différent est mis
# de côté, horodaté (Cmd 10 — jamais de suppression sèche).
set -euo pipefail
RACINE="$(git rev-parse --show-toplevel)"
SOURCE="$RACINE/hooks"; CIBLE="$RACINE/.git/hooks"
HORODATAGE="$(date +%Y%m%d-%H%M%S)"
[ -d "$CIBLE" ] || { echo "Pas de $CIBLE." >&2; exit 1; }
for chemin in "$SOURCE"/*; do
    nom="$(basename "$chemin")"
    case "$nom" in installer-hooks.sh|README.md) continue ;; esac
    dest="$CIBLE/$nom"
    if [ -f "$dest" ] && ! cmp -s "$chemin" "$dest"; then
        mv "$dest" "$dest.sauvegarde-$HORODATAGE"
        echo "  ancien $nom mis de côté : $nom.sauvegarde-$HORODATAGE"
    fi
    install -m 755 "$chemin" "$dest"
    echo "  installé : $nom"
done
echo "Fait."
