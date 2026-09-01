بسم الله الرحمن الرحيم

# CLAUDE.md — Protocole local : dépôt `instrument` (rendu)

> **Ce dépôt est subordonné.** Il porte l'interface de l'Instrument de la Tradition
> Primordiale, et rien d'autre. Le dépôt `wiki` (`/root/wiki`, `Sidyvision/wiki`)
> porte la doctrine, la donnée, le producteur du manifeste et l'ensemble des
> protocoles ; **il fait foi**. Scission du 2026-09-01, verdict Sidy, chantier INF-13
> (`atelier/rd/infrastructure/inf-13-scission-depot-instrument/` au wiki).
>
> Ce fichier ne se substitue à aucun protocole du wiki : il énonce ce qui vaut **ici**,
> qui n'en est que la conséquence. En cas de silence ou de doute, le `CLAUDE.md` racine
> du wiki fait foi.

## Pourquoi ce dépôt existe

Le §VII du protocole racine du wiki, *Règle commune des MANIFESTES*, impose le flux
`dépôt → manifeste → interface`, à sens unique, et pose que « l'interface ne réécrit
jamais le dépôt ». Tant que la source et l'interface partageaient un même arbre git,
cette règle ne tenait que par la vigilance. Séparées, elle tient par construction.

La **ligne de coupe est producteur/consommateur**, jamais Instrument/reste. Restent au
wiki, et y font foi : la donnée (`instrument-donnees.yaml`), le producteur
(`generer-manifeste.py`), les fiches d'architecture, les mises en regard doctrinales,
l'iconographie, et les chantiers `INS-`.

## Les cinq règles de ce dépôt

1. **Rien ne remonte.** Ce dépôt n'a aucun droit d'écriture sur le wiki et n'en a pas
   besoin. Aucun script d'ici ne lit le wiki. Le manifeste est **poussé depuis le
   wiki** par `publier-manifeste-instrument.sh`.

2. **Le manifeste est reçu, jamais édité.** `src/wiki-manifest.json` est un artefact
   déposé. Le modifier à la main est une faute — la correction se fait au wiki, dans
   `instrument-donnees.yaml`, puis se republie. Aucune valeur doctrinale n'est écrite
   en dur dans le code de rendu : tout vient du manifeste.

3. **Aucune correspondance ne naît ici** (Cmd 3, Cmd 12 du wiki). Rapprocher deux
   choses à l'écran n'établit rien. Ce qui s'affiche « établi » l'est parce qu'une
   fiche du wiki le dit ; à défaut, l'affichage est **suggéré** — pointillé et 🔍 —
   jamais fondu avec l'établi. Le verdict d'une spéculation appartient à Sidy ou à une
   autorité textuelle citée, jamais à la machine, quel que soit le moteur.

4. **Porte humaine sur ce qui engage** (Cmd 13). Publication en production, mise en
   public du dépôt, dépense, jeton d'accès : préparés par la machine, tranchés par
   Sidy. `main` est protégée, `enforce_admins` actif.

5. **Pas de suppression sèche** (Cmd 10) : `deprecated` et pointeur, jamais
   l'effacement.

## Disposition — une contrainte dure

`src/index.html` charge le manifeste par **chemin relatif frère**
(`fetch('wiki-manifest.json')`). Les deux fichiers restent donc **dans le même
dossier**. Tout déplacement de l'un impose de vérifier l'autre.

Dépendance externe unique : Three.js r128 via CDN.

## Où lire le reste

`docs/RENVOI-AU-WIKI.md` — la table de correspondance question → fiche du wiki.
