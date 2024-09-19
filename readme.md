Feuille de personnage pour le jeu de role papier The witcher

Il s'agit d'une application simplifiée pour un usage privée entre amis. Elle foncitonne avec un server nodejs/express (API) et une bdd nosql mongodb sur serveur privé

L'absence de framework côté front s'explique par la nécessité d'être lancé sans ligne de commande ou une installation. Pour lancer "l'application", il suffit de double-cliquer sur le fichier Character.html, ce qui lance un navigateur.

Seul le système de sauvegarde des personnages est géré par l'API et la base de données. Tout le reste est en local

Création du personnage :
    - Choisir le race (les bonus / malus s'applique automatiquement)
    - choisir la profession (idem)
    - vous avez 40 points (ou 9d6 en relançant si un ou deux) à répartir dans vos caractéristique de base 
        * les valeur initiale  (colonne gauche)  de vos caractériques. 
            Elle ne peut pas être supérieur à 6 à la création (hors bonus)
    - Vous avez 44 points à répartir entre vos compétence exclusives (métier) et vos compétences connues (listées en dessous de votre 
    profession): 
        * Sachant que chacune doivent avoir au minimum 1 points (sauf les evolutions de la compétence exclusive)
        * les compétences avec un (2) coûtent 2 points pour monter d'un niveau
    - Pour finir vous pouvez répartir REF * INT points dans les compétences acquises: ce sont les compétences que vous choisissez en plus. Obligatoirement différentes des commpétences liées à votre profession (compétences connue)
    - Vous apprenez autant de sorts / rituels / invocations que votre profession le permet (c'est listé avec atout magique)
    - bien sur, il faut indiquer les autres informations dont je n'ai pas parlé