const rules = {
    "jobs":[
        {
            "Profession": "Artisan",
            "Nom compétence": "Rafistolage(Tech)",
            "Description": "Coût un tour. SD de fabrication objet. Si réussite: Objet réutilisable mais PA ou Fiabilité / 2. Dégats d'arme /2.",
            "Vigueur": 0,
            "evos":{
                "Maitre artisant": [
                    "Catalogue étendu (int)",
                    "Compagnon (tech)",
                    "Maître Compagnon (tech)",
                ],
                "Alchimiste" :[
                    "Pharmacie mentale (int)",
                    "Double dose (tech)",
                    "Adaptation (tech)",
                ],
                "Improvisateur": [
                    "Amélioration (tech)",
                    "Plaqué argent (tech)",
                    "Déceler (tech)"
                ]
              
            },
            "knowSkills": [
                "Connaissance de la rue (int)",
                "Education (int)",
                "Négoce (int)",
                "Athlétisme (dex)",
                "Physique (cor)",
                "Résilience (cor)",
                "Beaux-Arts (emp)",
                "Persuasion (emp)",
                "Alchimie (tech)",
                "Artisanat (tech)",
            ],
            "knowMagics": [],
            "equipmentChoice": [
                "- 50 couronnes",
                "- Ensemble d'alchimie",
                "- Epee longue de fer",
                "- Forge  Portable",
                "- Masse d'armes",
                "- Outils d'artisan",
                "- Outils de marchand",
                "- Petit coffre",
                "- Sablier",
                "- Serrure"
            ]
        },
        {
            "Profession": "Barde",
            "Nom compétence": "Prestation(Emp)",
            "Description": "Prestation dur 1h. Résultat du jet prestation = Couronnes amassées. Si échec critique peut perdre de l'argent et malus de -2 en charisme jusqu'à fin de journée.",
            "Vigueur": 0,
            "evos":{
                "Charmeur": [
                    "Notoriété (emp)",
                    "Captiver la foule (emp)",
                    "Bon ami (emp)",
                ],
                "Informateur": [
                    "Disparition (int)",
                    "Ragots (int)",
                    "Acclimatation (int)",
                ],
                "Manipulateur": [
                    "Empoisonner le puit (emp)",
                    "Pique (emp)",
                    "Suspicion (emp)",
                ]
                
                
            },
            "knowSkills": [
                "Connaissance de la rue (int)",
                "Etiquette (int)",
                "Langue: 1 au choix (int)",
                "Beaux arts (emp)",
                "Charisme (emp)",
                "Duperie (emp)",
                "Persuasion (emp)",
                "Psychologie (emp)",
                "Représentation (emp)",
                "Séduction (emp)"
            ],
            "knowMagics": [],
            "equipmentChoice": [
                "- Bourse",
                "- Dague",
                "- Flasque d'alcool",
                "- Fourreau de jarretière",
                "- Jeu de gwynt",
                "- Journal cadenassé",
                "- Miroir de poche",
                "- Parfum/eau de toilette",
                "- Piste de dé",
                "- un instrument"
            ]
        },
        {
            "Profession": "Criminel",
            "Nom compétence": "Paranoïa exercée(Int)",
            "Description": "Si piège a 10m: jet SD(piège, furtivité ou MJ).",
            "Vigueur": 0,
            "evos":{
                "Voleur": [
                    "Plan mental (int)",
                    "Clé mentale (int)",
                    "Planque (int)",
                ],
                "Chef de Bande": [
                    "Point faible(emp)",
                    "Marquage (vol)",
                    "Recrutement (vol)",
                ],
                "Assassin": [
                    "Visée précise (dex)",
                    "pique aux yeux (dex)",
                    "Frappe assassine (dex)",
                ]
                
               
                
            },
            "knowSkills": [
                "Connaissance de la Rue (int)",
                "Vigilance (int)",
                "Lame courtes (ref)",
                "Adresse (dex)",
                "Athlétisme (dex)",
                "Furtivité (dex)",
                "Duperie (emp)",
                "Contrefaçon (tech)",
                "Crochetage (tech)",
                "Intimidation (vol)",
            ],
            "knowMagics": [],
            "equipmentChoice": [
                "- Chloroforme",
                "- Coup-de-poing",
                "- Couteaux de lancé * 5",
                "- Dés pipés",
                "- fourreau de manche",
                "- Lanterne sourde",
                "- Outils de voleur",
                "- Poche secrète",
                "- Sacoche",
                "- Stylet"
            ]
        },
        {
            "Profession": "Docteur",
            "Nom compétence": "Mains thérapeutiques(Tech)",
            "Description": "Capable de soigner blessure critique: nombre de jets nécessaires dépend de la blessure critique.",
            "Vigueur": 0,
            "evos":{
                "Chirurgien": [
                    "Diagnostic (int)",
                    "Analyse (int)",
                    "chirurgie miraculeuse (tech)",
                ],
                "Herboriste":[
                    "Espace de soins (tech)",
                    "Improvisation (techt)",
                    "remède Naturel (tech)",
                ],
                "Anatomiste": [
                    "Plaie ouverte (int)",
                    "Carnage (int)",
                    "Blessure incapacitante (int)",
                ]
                
                
                
            },
            "knowSkills": [
                "Déduction (int)",
                "Etiquette (int)",
                "Négoce (int)",
                "Survie (int)",
                "Lames courtes (ref)",
                "Charisme (emp)",
                "Psychologie (emp)",
                "Alchimie (tech)",
                "Courage (vol)",
                "Résistance à la contrainte",
            ],
            "knowMagics": [],
            "equipmentChoice": [
                "- Bougies * 10",
                "- Couverture",
                "- Dague",
                "- Fluides stérilisants * 10",
                "- Grande tente",
                "- Herbes engourdissantes * 10",
                "- Instruments chirurgicaux",
                "- Nécessaire d'écriture",
                "- Poudre de coagulation * 10",
                "- Sablier"
            ]
        },
        {
            "Profession": "Homme d'armes",
            "Nom compétence": "Dur à cuir(Cor)",
            "Description": "Peut échapper à la mort imminente si réussit un jet Dur à Cuir de SD égal au double de santé négatif.",
            "Vigueur": 0,
            "evos":{
                "Tireur d'élite": [
                    "Portée extrême (dex)",
                    "Double tir (dex)",
                    "Traits précis (dex)"
                ],
                "Chasseur de prime": [
                    "Limier (int)",
                    "Chause-Trappe (tech)",
                    "Sens du combat (int)"
                ],
                "Ravageur": [
                    "Fureur (vol)",
                    "Zweihand (cor)",
                    "Même pas mal (cor)"
                ]
            },
            "knowSkills": [
                "Survie (int)",
                "Esquive/Evasion (ref)",
                "5 compétences de Combat",
                "Physique (cor)",
                "Courage (vol)",
                "Intimidation (vol)"
            ],
            "knowMagics": [],
            "equipmentChoice": [
                "- Arbalète et 20 careeaux",
                "- Bocle d'acier",
                "- Brigandine",
                "- Camail",
                "- Couteaux de lancer * 5",
                "- Hache de bataille",
                "- Kord",
                "- Lance",
                "- Pantalon renforcé",
                "- Sacoche",
            ]
        },
        {
            "Profession": "Mage",
            "Nom compétence": "Exercice de la Magie(Int)",
            "Description": "Si phénomène magique inconnu... Jet d'exercice Magique contre SD du MJ. Si réussit, identifie le phénomène. Peut détecter magie en cours ou/et spectres.",
            "Vigueur": 5,
            "evos":{
                "Politicien": [
                    "Intrigue (int)",
                    "commérage (int)",
                    "Atout (int)"
                ],
                "Scientifique": [
                    "Rétro-ingénierie (int)",
                    "Distillation (tech)",
                    "Mutation (int)"
                ],
                "Archimage": [
                    "Contact magique",
                    "Immuable (vol)",
                    "Magie étendue (vol)"
                ]
            },
            "knowSkills": [
                "Education (int)",
                "Etiquette (int)",
                "Baton/lance (ref)",
                "Psychologie (emp)",
                "Séduciton (emp)",
                "Envoutement (vol)",
                "Incantation (vol)",
                "Résistance à la magie (vol)",
                "Rituels"
            ],
            "knowMagics": [
                "5 sorts de novice",
                "1 rituel de novice",
                "1 envoutement peu dangereux",
            ],
            "equipmentChoice": [
                "- 100 couronnes de composants",
                "- Bâton",
                "- Bourse",
                "- Dague",
                "- Fourreau de jarretière",
                "- Journal",
                "- Miroir de poche",
                "- Nécessaire d'écriture",
                "- Sablier",
                "- Trousse de maquillage"
            ]
        },
        {
            "Profession": "Marchand",
            "Nom compétence": "Grand Voyageur(Int)",
            "Description": "Jet de Grand Voyageur de SD fixé par MJ. Permet de pouvoir répondre à des questions sur des connaissances concernant un objet, une culture ou une région.",
            "Vigueur": 0,
            "evos":{
                "Courtier": [
                    "Choix (int)",
                    "Dur en affaires (emp)",
                    "Promesse (emp)"
                ],
                "Contact": [
                    "Gueusaille (emp)",
                    "Espion (int)",
                    "Carte aux trésors (int)",
                ],
                "Havekar": [
                    "Bonne réputation (vol)",
                    "Receleur (int)",
                    "Débiteur martial (emp)"
                ]
                
            },
            "knowSkills": [
                "Connaissance de la rue (int)",
                "Education (int)",
                "Langues (2 au choix) (int)",
                "Négoce (int)",
                "Lames courtes (ref)",
                "Charisme (emp)",
                "Jeu (emp)",
                "Persuasion (emp)",
                "Psychologie (emp)",
                "Résistance à la contrainte (vol)"

            ],
            "knowMagics": [],
            "equipmentChoice": [
                "- Arbalète et carreaux * 20",
                "- Dague",
                "- Grande tente",
                "- Journal",
                "- Nécessaire d'écriture",
                "- Outils de marchand",
                "/!\\Obligatoire :/!\\",
                "- Charette (contient pour 1000 couronnes d'objets partout ou communs. Tirée par une mule"
            ]
        },
        {
            "Profession": "Prêtre",
            "Nom compétence": "Initié des Dieux(Emp)",
            "Description": "Jet d'initié des dieux permet d'obtenir, soin hébergement, nourriture, etc., auprès d'un bâtiment de sa religion (en fonction). SD fixé par MJ.",
            "Vigueur": 2,
            "evos":{
                "Prêcheur": [
                    "Puissance divine",
                    "Autorité divine (emp)",
                    "Précognition (vol)"
                ],
                "Druide": [
                    "Harmonisation naturelle",
                    "Déchiffrer la nature (int)",
                    "Pacte animal (vol)"
                ],
                "Fanatique": [
                    "Rituels sanglants (vol)",
                    "Ferveur (emp)",
                    "Emissaire des dieux (emp)",
                ]
            },
            "knowSkills": [
                "Enseignement (int)",
                "Survie (int)",
                "Charisme (emp)",
                "Commandement (emp)",
                "Psychologie (emp)",
                "Premiers soins (tech)",
                "Courage (vol)",
                "Envoutement (vol)",
                "Incantation (vol)",
                "Rituels (vol)"
            ],
            "knowMagics": [
                "2 invocations de novice (sorts)",
                "2 rituels de novice",
                "2 envoutements peu dangereux"
            ],
            "equipmentChoice": [
                "- 100 couronnes de composants",
                "- Bâton",
                "- Dague",
                "- Ensemble d'alchimie",
                "- Fluides stérilisants * 5",
                "- Herbes engourdissantes * 5",
                "- Instruments chirurgicaux",
                "- Poudre de coagulation * 5",
                "- Sablier",
                "- Symbole Sacré"

            ]
        },
        {
            "Profession": "Sorceleur",
            "Nom compétence": "Formation de Sorceleur",
            "Description": "Formation sorceleur diminue pénalités zone hostile ( = score jet Formation de Sorceleur /2). Peut être utilisé pour connaissance des monstres.",
            "Vigueur": 2,
            "evos":{
                "Sorcelame": [
                    "Méditation",
                    "Source magique",
                    "Héliotrope (vol)",
                ],
                "Mutant": [
                    "Estomac de fer",
                    "Frénésie",
                    "Transmutation (cor)"
                ],
                "Tueur": [
                    "Déviation de flèches (dex)",
                    "Frappe rapide (ref)",
                    "Tourbillon (ref)"
                ]
            },
            "knowSkills": [
                "Déduction (int)",
                "Survie (int)",
                "Vigilance (int)",
                "Equitation (ref)",
                "Escrime (ref)",
                "Esquive/Evasion",
                "Athlétisme (dex)",
                "Furtivité (dex)",
                "Alchimie (tech)",
                "Incantation (vol)"

            ],
            "knowMagics": [
                "Tous les Signes du bases"
            ],
            "equipmentChoice": [
                "- Arbalète de poing",
                "- Couteaux de lancé * 5",
                "- Ensemble d'alchimie",
                "- Gambison a tissage renforcé",
                "- Un Cheval",
                "/!\\ Obligatoire : /!\\",
                "- Epee de sorceleur en acier",
                "- Epee de sorceleur en argent",
                "- Formule de décoction",
                "- Formules d'huiles * 2",
                "- Formules de potions * 2",
                "- Médaillon du Sorceleur"

            ]
        }
    ],
    "physicTable": [
        {
            "ratio": 2, 
            "PS": 10,
            "END": 10,
            "REC": 2,
            "ETOU": 2
        },
        {
            "ratio": 3,
            "PS": 15,
            "END": 15,
            "REC": 3,
            "ETOU": 3
        },
        {
            "ratio": 4,
            "PS": 20,
            "END": 20,
            "REC": 4,
            "ETOU": 4
        },
        {
            "ratio": 5,
            "PS": 25,
            "END": 25,
            "REC": 5,
            "ETOU": 5
        },
        {
            "ratio": 6,
            "PS": 30,
            "END": 30,
            "REC": 6,
            "ETOU": 6
        },
        {
            "ratio": 7,
            "PS": 35,
            "END": 35,
            "REC": 7,
            "ETOU": 7
        },
        {
            "ratio": 8,
            "PS": 40,
            "END": 40,
            "REC": 8,
            "ETOU": 8
        },
        {
            "ratio": 9,
            "PS": 45,
            "END": 45,
            "REC": 9,
            "ETOU": 9
        },
        {
            "ratio": 10,
            "PS": 50,
            "END": 50,
            "REC": 10,
            "ETOU": 10
        },
        {
            "ratio": 11,
            "PS": 55,
            "END": 55,
            "REC": 11,
            "ETOU": 10
        },
        {
            "ratio": 12,
            "PS": 60,
            "END": 60,
            "REC": 12,
            "ETOU": 10
        },
        {
            "ratio": 13,
            "PS": 65,
            "END": 65,
            "REC": 13,
            "ETOU": 10
        }
    
    ],
    "handToHand" : [
        {
            "Corps": 1,
            "Poings": "1d6 - 4",
            "Pieds": "1d6"
        },
        {
            "Corps": 2,
            "Poings": "1d6 - 4",
            "Pieds": "1d6"
        },
        {
            "Corps": 3,
            "Poings": "1d6 - 2",
            "Pieds": "1d6 + 2"
        },
        {
            "Corps": 4,
            "Poings": "1d6 - 2",
            "Pieds": "1d6 + 2"
        },
        {
            "Corps": 5,
            "Poings": "1d6",
            "Pieds": "1d6 + 4"
        },
        {
            "Corps": 6,
            "Poings": "1d6",
            "Pieds": "1d6 + 4"
        },
        {
            "Corps": 7,
            "Poings": "1d6 + 2",
            "Pieds": "1d6 + 6"
        },
        {
            "Corps": 8,
            "Poings": "1d6 + 2",
            "Pieds": "1d6 + 6"
        },
        {
            "Corps": 9,
            "Poings": "1d6 + 4",
            "Pieds": "1d6 + 8"
        },
        {
            "Corps": 10,
            "Poings": "1d6 + 4",
            "Pieds": "1d6 + 8"
        },
        {
            "Corps": 11,
            "Poings": "1d6 + 6",
            "Pieds": "1d6 + 10"
        },
        {
            "Corps": 12,
            "Poings": "1d6 + 6",
            "Pieds": "1d6 + 10"
        },
        {
            "Corps": 13,
            "Poings": "1d6 + 8",
            "Pieds": "1d6 + 12"
        }
    ],
    "races": [
        {
            "nom": "Elfe",
            "modifs": [
                {
                    "compétence": "beauxArts",
                    "bonus": 1
                },
                {
                    "compétence": "archerie",
                    "bonus": 2
                }
            ],
            "détails": [
                "dégainer et bander l'arc = 1 seule action",
                "amis avec toutes les bêtes",
                "plantes communes trouvées automatiquement"
            ]
            
        },
        {
            "nom": "Nain",
            "modifs": [
                {
                    "armure": "PA",
                    "bonus": 2
                },
                {
                    "compétence": "physique",
                    "bonus": 1
                },
                {
                    "caracDeriv": "enc",
                    "bonus": 25
                },
                {
                    "compétence": "negoce",
                    "bonus": 1
                }
            ],
            "détails":["rien de spécial"]
        },
        {
            "nom": "Humain",
            "modifs": [
                {
                    "compétence": "deduction",
                    "bonus": 1
                }
            ],
            "détails": [
                "+1 pour toutes intéractions avec d'autres humains ",
                "peut relancer un jet de courage ou de résistance à la contrainte 3 fois par session"
            ]
        },
        {
            "nom": "Sorceleur",
            "modifs": [
                {
                    "compétence": "vigilance",
                    "bonus": 1
                },
                {
                    "carac": "ref",
                    "bonus": 1
                },
                {
                    "carac": "dex",
                    "bonus": 1
                },
                {
                    "carac": "emp",
                    "bonus": -4
                }
            ],
            "détails" : [
                "Peut Pister par son odorat",
                "immunité aux maladies",
                "peut utiliser les mutagènes",
                "peut améliorer les caractéristiques au delà de 10"
            ]
        }
    ]

}