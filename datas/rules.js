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
              
            }
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
                
                
            }
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
                
               
                
            }
        },
        {
            "Profession": "Docteur",
            "Nom compétence": "Mains thérapeutiques(Tech)",
            "Description": "Capable de soigner blessure critique: nombre de jets nécessaires dépend de la blessure critique.",
            "Vigueur": 0,
            "evos":{
                "Chirurgien": [
                    "Diagnostic (int) (a1)",
                    "Analyse (int) (a2)",
                    "chirurgie miraculeuse (tech) (a3)",
                ],
                "Herboriste":[
                    "Espace de soins (tech) (b1)",
                    "Improvisation (techt) (b2)",
                    "remède Naturel (tech) (b3)",
                ],
                "Anatomiste": [
                    "Plaie ouverte (int) (c1)",
                    "Carnage (int) (c2)",
                    "Blessure incapacitante (int) (c3)",
                ]
                
                
                
            }
        },
        {
            "Profession": "Homme d'armes",
            "Nom compétence": "Dur à cuir(Cor)",
            "Description": "Peut échapper à la mort imminente si réussit un jet Dur à Cuir de SD égal au double de santé négatif.",
            "Vigueur": 0,
            "evos":{
                "a1": "",
                "a2": "",
                "a3": "",
                "b1": "",
                "b2": "",
                "b3": "",
                "c1": "",
                "c2": "",
                "c3": "",
            }
        },
        {
            "Profession": "Mage",
            "Nom compétence": "Exercice de la Magie(Int)",
            "Description": "Si phénomène magique inconnu... Jet d'exercice Magique contre SD du MJ. Si réussit, identifie le phénomène. Peut détecter magie en cours ou/et spectres.",
            "Vigueur": 5,
            "evos":{
                "a1": "",
                "a2": "",
                "a3": "",
                "b1": "",
                "b2": "",
                "b3": "",
                "c1": "",
                "c2": "",
                "c3": "",
            }
        },
        {
            "Profession": "Marchand",
            "Nom compétence": "Grand Voyageur(Int)",
            "Description": "Jet de Grand Voyageur de SD fixé par MJ. Permet de pouvoir répondre à des questions sur des connaissances concernant un objet, une culture ou une région.",
            "Vigueur": 0,
            "evos":{
                "a1": "",
                "a2": "",
                "a3": "",
                "b1": "",
                "b2": "",
                "b3": "",
                "c1": "",
                "c2": "",
                "c3": "",
            }
        },
        {
            "Profession": "Prêtre",
            "Nom compétence": "Initié des Dieux(Emp)",
            "Description": "Jet d'initié des dieux permet d'obtenir, soin hébergement, nourriture, etc., auprès d'un bâtiment de sa religion (en fonction). SD fixé par MJ.",
            "Vigueur": 2,
            "evos":{
                "a1": "",
                "a2": "",
                "a3": "",
                "b1": "",
                "b2": "",
                "b3": "",
                "c1": "",
                "c2": "",
                "c3": "",
            }
        },
        {
            "Profession": "Sorceleur",
            "Nom compétence": "Formation de Sorceleur",
            "Description": "Formation sorceleur diminue pénalités zone hostile ( = score jet Formation de Sorceleur /2). Peut être utilisé pour connaissance des monstres.",
            "Vigueur": 2,
            "evos":{
                "a1": "",
                "a2": "",
                "a3": "",
                "b1": "",
                "b2": "",
                "b3": "",
                "c1": "",
                "c2": "",
                "c3": "",
            }
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
            "détails":[]
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