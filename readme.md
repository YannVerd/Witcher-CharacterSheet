Feuille personnage pour jdr Witcher (utilisation particulier)
reste à faire : 
    - automatisation des bonus des compétences et/ou caractéristique liés à la race - fait
    - automatisation du total des cractéristiques et sous caractéristiques - fait
    - afficher descriptif du métier (compétence eclusive) - fait
    - mettre à jour le system de skills pour avoir le même que pour les attributs -fait
    - afficher particularité de la race (key : "details" dans rules.races) - fait
    - possibilité d'ajouter des sorts - fait
    - possibilité d'ajouter des rituels - fait
    - possiblité d'ajouter les signs de sorceleur - fait
    - ajouter dans le grimoire les sorts d'archipretre - fait
    - ajouter dans le grimoire les sorts de druides - fait
    - passer le menu en barre de navigation  - fait
    - ajout armes et armures ( magasin) - trop d'élément (plus de 300) opté pour un system qui entre à la main 
    - ajouter objet du magasin à son inventaire - sera fait à la main
    - gestion du poids - bouton qui appelle dans les tables une fonction pour créer une ligne avec les cellule correspondante. Les cellules de poids auront la même classe : "weigthCell" et seront additionner dans une cellule de la page principale qui sera comparé à la valeur total encombrement
    - Système de sauvegarde et de cache - nécessité d'un serveur et bdd - fait
    - Ajouter la page Notes - fait
    - Ajouter avec la page Note/background -fait
    - Faire un beau style css - fait
    - ajouter un conteneur avec l'évolution des métiers et leurs valeurs - fait
    - ajouter les event listener pour les valeurs des évoltions de métier et l'ajout au cache - fait
    - préparer le serveur priver pour le futur docker compose - fait
    - compléter la page "aide et rappels" - fait
    - ajouter gestion automatique arme principale, secondaire et armure
    - repasser "grimoire" en local/ supprimer la gestion par le serveur

Bugs: 
    - le ratio (Vol + Cor)/2 dans le addEvent de "cor" est multiplié par 5 sans raisons // corrigé
    - dans la fonction emptyElementsValues, le programme ne rentre pas dans la boucle forEach // corrigé c'était un objet pas un tableau
    - Au rafraichissement le total ne se fait pas (avec utilisation du localstore) => il faut adapt lafonciton calculSubAttributsTotal pour qu'elle englobe tous les cas (carac de base et skills en plus); en partie corrigé - fait
    - bug sur la mise a jour des totaux quand on raffraichit la page
    - cache bug en rafraichissant la page

    