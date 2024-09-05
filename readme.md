Feuille personnage pour jdr Witcher (utilisation particulier)
reste à faire : 
    - automatisation des bonus des compétences et/ou caractéristique liés à la race - fait
    - automatisation du total des cractéristiques et sous caractéristiques - fait
    - afficher descriptif du métier (compétence eclusive) - fait
    - mettre à jour le system de skills pour avoir le même que pour les attributs -fait
    - afficher particularité de la race (key : "details" dans rules.races)
    - possibilité d'ajouter des sorts - fait
    - possibilité d'ajouter des rituels - fait
    - possiblité d'ajouter les signs de sorceleur
    - ajouter dans le grimoire les sorts d'archipretre - fait
    - ajouter dans le grimoire les sorts de druides - fait
    - ajout armes et armures ( magasin)
    - ajouter objet du magasin à son inventaire
    - gestion du poids
    - Système de sauvegarde et de cache - en cours nécessité d'un serveur et bdd - en cours

Bugs: 
    - le ratio (Vol + Cor)/2 dans le addEvent de "cor" est multiplié par 5 sans raisons // corrigé
    - dans la fonction emptyElementsValues, le programme ne rentre pas dans la boucle forEach // corrigé c'était un objet pas un tableau
    - Au rafraichissement le total ne se fait pas (avec utilisation du localstore) => il faut adapt lafonciton calculSubAttributsTotal pour qu'elle englobe tous les cas (carac de base et skills en plus); en partie corrigé
    