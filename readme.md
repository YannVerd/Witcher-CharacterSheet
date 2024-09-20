# Feuille de personnage pour le jeu de role papier The witcher
## Explications
Il s'agit d'une application simplifiée pour un usage privée entre amis. Elle foncitonne avec un server nodejs/express (API) et une bdd nosql mongodb sur serveur privé

L'absence de framework côté front s'explique par la nécessité d'être lancé sans ligne de commande ou une installation. Pour lancer "l'application", il suffit de double-cliquer sur le fichier Character.html, ce qui lance un navigateur.

Seul le système de sauvegarde des personnages est géré par l'API et la base de données. Tout le reste est en local

Pour tous renseignement sur les compétences, equipements et objets de l'inventaire vous pouvez vous rendre sur le site : https://www.the-witcher-jdr.fr/

## Fonctionnement de l'app
    1. Le choix de la race et de la profession est déterminant, les bonus et malus sont appliqués automatiquement
    2. Les Caractéristiques dérivées sont calculées automatiquement en fonctions des caractéristiques. Vous pouvez uniquement modifier les bonus.
    3. Tous les totaux sont calculer automatiquement et, normalement, vous ne pouvez pas intéragir avec eux.
    4. Pour apprendre un sort, rituels ou envoutements, il faut aller dans l'onglet grimoire. Indiquez pour les deux filtres ce que vous désirez.
       * La liste de ce que vous avez choisit apparait avec pour chacuns un bouton "apprendre"
       * Quand vous apprenez une magie, elle se retrouvera directemnt sur fiche (onglet fiche). recliquez sur ce bouton pour l'oublier
    5. Pour l'inventaire (onglet inventaire): 
        * Quand vous posséder/ramasser une arme, armure, objets divers ou un composant il faut le rajouter à votre inventaire dans la section correspondante 
        * Vous pouvez équiper une arme. qui apparaitre dans votre fiche (onglet fiche). Vous pouvez l'équiper en arme principale ou secondaire.
        * Les pièces d'armures sont équipables sur la tête, le torse, les bras et les jambes.
        * Les modifications que vous apporter sur les éléments équipés sont enregistrées également dans votre inventaire.
        * La poids total est calculé automatiquement, est vous dira quand vous dépasserai votre valeur d'encombrement (qui donnera des malus bien évidemment)

## Création du personnage
1. Choisir le race (les bonus / malus s'appliquent automatiquement)

2. choisir la profession (idem). Elle débloque une parite compétence exclusive qui permet d'indiquer le niveau de votre compétence exclusive ainsi que ses embranchements avec les évolutions

3. vous avez 40 points (ou 9d6 en relançant si un ou deux) à répartir dans vos caractéristiques de base 
    - les valeurs initiales  (colonne gauche) de vos caractériques. 
        Elles ne peuvent pas être supérieures à 6 à la création (hors bonus)

4. Vous avez 44 points à répartir entre vos compétence exclusives (métier) et vos compétences connues (listées en dessous de votre) 
    profession):
    - Sachant que chacunes doivent avoir au minimum 1 points (sauf les evolutions de la compétence exclusive)
    - les compétences avec un (2) coûtent 2 points

5. Vous pouvez répartir REF * INT points dans les compétences acquises: ce sont les compétences que vous choisissez en plus. Obligatoirement différentes des commpétences liées à votre profession (compétences connues listées dans votre fiche personnage)
    - les compétences avec un (2) coûtent 2 points

6. Vous apprenez autant de sorts / rituels / invocations que votre profession le permet (c'est listé avec atout magique)

7. bien sur, il faut indiquer les autres informations dont je n'ai pas parlé (Nom, genre, etc...)

Encore une fois, le site https://www.the-witcher-jdr.fr/ est tres complet. Vous pouvez tout regarder sauf les scénarios


##v1.0
