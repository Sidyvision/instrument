# Instrument de la Tradition Primordiale — rendu

L'interface de l'Instrument. **Ce dépôt ne porte que le rendu.**

La doctrine, l'architecture, la donnée source et le générateur du manifeste vivent
dans le dépôt `wiki`, qui fait foi sur tout ce qui n'est pas de l'affichage.

## Le flux, à sens unique

```
   dépôt wiki                                        ce dépôt
   ──────────                                        ────────
   instrument-donnees.yaml
        │
        ├─ generer-manifeste.py  (déterministe, sans LLM)
        │        │
        └────────▼
          wiki-manifest.json  ──────poussé─────▶  src/wiki-manifest.json
                                                          │
                                                          ▼
                                                   src/index.html
```

Le manifeste est **poussé depuis le wiki**, jamais tiré d'ici. Rien ne remonte : ce
dépôt n'a aucun droit d'écriture sur le wiki, et n'en a pas besoin. Une suggestion née
de l'interface ne devient rien tant qu'un humain ne l'a pas versée au wiki.

## Structure

| Chemin | Rôle |
|---|---|
| `src/index.html` | le rendu |
| `src/wiki-manifest.json` | le manifeste **reçu** — jamais édité ici |
| `docs/` | ce qui renvoie au wiki |
| `CLAUDE.md` | le protocole local de ce dépôt |

`src/index.html` et `src/wiki-manifest.json` sont **frères de dossier** : le rendu
charge le manifeste par chemin relatif. Les séparer casserait le chargement.

## Dépendances

Three.js r128, via CDN. Rien d'autre.

## État

Le rendu est en phase 0-1. Plusieurs chantiers de l'Instrument sont **bloqués en
amont, sur des questions doctrinales non tranchées** — ce n'est pas un retard
d'ingénierie. L'état vivant se lit au wiki, dans `atelier/rd/registre-chantiers.md`.
