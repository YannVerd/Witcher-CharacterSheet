const attributes = ["cor", "int", "ref", "dex", "vit", "emp", "tech", "vol", "cha"];
const subAttributes = ["etou", "cour", "saut", "ps", "end", "enc", "rec", "poings", "pieds"];
const subAttributesTotal = ["etou", "cour", "saut", "ps", "end", "enc", "rec"];
const weaponAttributes = ["name", "pre", "dmg", "fia", "hands", "scope", "diss", "am", "weight"];
const armorsSlots = {
    head: "head",
    torso: "torse",
    leftArm: "leftArm",
    rightArm: "rightArm",
    leftLeg: "leftLeg",
    rightLeg: "rightLeg",
    shield: "shield"
}
const generalsInfos = {
    name: "name",
    race: "race",
    gender: "gender",
    age: "age",
    nativeLand: "nativeLand",
    job: "job",

};
const skills = {
    savoir: [
        {
            nom: "connaissance de la rue",
            abrv: "connRue"
        },
        {
            nom: "connaissance des monstres (2)",
            abrv: "connMonstre"
        },
        {
            nom: "déduction",
            abrv: "deduction"
        },
        {
            nom: "éducation",
            abrv: "education"
        },
        {
            nom: "enseignement",
            abrv: "enseignement"
        },
        {
            nom: "étiquette",
            abrv: "etiquette"
        },
        {
            nom: "langue ancienne (2)",
            abrv: "langueAncienne"
        },
        {
            nom: "langue commune (2)",
            abrv: "langueCommune"
        },
        {
            nom: "langue naine (2)",
            abrv: "langueNaine"
        },
        {
            nom: "négoce",
            abrv: "negoce"
        },
        {
            nom: "survie",
            abrv: "survie"
        },
        {
            nom: "tactique (2)",
            abrv: "tactique"
        },
        {
            nom: "vigilance",
            abrv: "vigilance"
        },
    ],

    reflexe: [
        {
            nom: "bagarre",
            abrv: "bagarre"
        },
        {
            nom: "bâton/lance",
            abrv: "batonLance"
        },
        {
            nom: "équitation",
            abrv: "equitation"
        },
        {
            nom: "escrime",
            abrv: "escrime"
        },
        {
            nom: "esquive/évasion",
            abrv: "esquiveEvasion"
        },
        {
            nom: "lames courtes",
            abrv: "lamesCourtes"
        },
        {
            nom: "mêlée",
            abrv: "melee"
        },
        {
            nom: "navigation",
            abrv: "navigation"
        },
    ],

    dexterite: [
        {
            nom: "adresse",
            abrv: "adresse"
        },
        {
            nom: "arbalète",
            abrv: "arbalete"
        },
        {
            nom: "archerie",
            abrv: "archerie"
        },
        {
            nom: "athlétisme",
            abrv: "athletisme"
        },
        {
            nom: "furtivité",
            abrv: "furtivite"
        },
    ],

    corps: [
        {
            nom: "physique",
            abrv: "physique"
        },
        {
            nom: "résilience",
            abrv: "resilience"
        },
    ],

    empathie: [
        {
            nom: "beaux arts",
            abrv: "beauxArts"
        },
        {
            nom: "charisme",
            abrv: "charisme"
        },
        {
            nom: "commandement",
            abrv: "commandement"
        },
        {
            nom: "duperie",
            abrv: "duperie"
        },
        {
            nom: "jeu",
            abrv: "jeu"
        },
        {
            nom: "persuasion",
            abrv: "persuasion"
        },
        {
            nom: "psychologie",
            abrv: "psychologie"
        },
        {
            nom: "représentation",
            abrv: "representation"
        },
        {
            nom: "séduction",
            abrv: "seduction"
        },
        {
            nom: "stylisme",
            abrv: "stylisme"
        },
    ],

    technique: [
        {
            nom: "alchimie (2)",
            abrv: "alchimie"
        },
        {
            nom: "artisanat (2)",
            abrv: "artisanat"
        },
        {
            nom: "contrefaçon",
            abrv: "contreFacon"
        },
        {
            nom: "crochetage",
            abrv: "crochetage"
        },
        {
            nom: "déguisement",
            abrv: "deguisement"
        },
        {
            nom: "fabrication de pièges (2)",
            abrv: "fabricationPieges"
        },
        {
            nom: "premiers soins",
            abrv: "premierSoins"
        },
    ],

    volonte: [
        {
            nom: "courage",
            abrv: "courage"
        },
        {
            nom: "envoûtement (2)",
            abrv: "envoutement"
        },
        {
            nom: "incantation (2)",
            abrv: "incantation"
        },
        {
            nom: "intimidation",
            abrv: "intimidation"
        },
        {
            nom: "résistance à la contrainte",
            abrv: "resContrainte"
        },
        {
            nom: "résistance à la magie",
            abrv: "resMagie"
        },
        {
            nom: "rituels",
            abrv: "rituels"
        },
    ]
};


const keys = {
    storage: "character",
    excluSkill: ['a', 'b', 'c'],
    inputType: {
        attrib: "attrib",
        subAttrib: "subAttrib",
        skill : "skill",
        excluSkill: "excluSkill"
    }
  
}

const domain = {
    prod :"192.168.1.62",
    dev: "localhost"
}


const saveContext = {
    LOCAL: "LOCAL",
    API: "API",
}

//#region Compendium filters
    // Do not change the conjugation or spelling. Irregularities are there to correct the Compendium

const keysCompendiumSearch = {
    type: "Type",
    categorie: "Catégorie"
}

const keysCompendium = {
    weapons: "weapons",
    armors: "armors",
    equipments: "equipments",
    potions: "potions"    
}

const rarityCompendium = {
    everyWhere: "P",
    common: "C",
    unsual: "I",
    rare: "R"

}

const sourcesCompendium = {
    base: "Base",
    Toc: "Toc",
    dlc: "DLC",
    fan: "Fan Made",
    rodolf: "Rodolf",
    paysan: "Paysan"
}

const weaponsCategoriesCompendium = {
    tools: "Outils",
    shortBlade: "Lame courte",
    sword: "Epées",
    blunt: "Armes contondantes",
    axe: "Hache",
    hast: "Armes d'hast",
    throwing: "Amres de jet",
    bow: "Arc",
    crossBow: "Arbalètes",
    projectile: "Projectiles",
    stick: "Bâtons",
    bomb: "Bombes",
    trap: "Pièges"
}

const armorsLocalisationCompendium = {
    head: "Tête",
    torso: "Torse",
    legs: "Jambes",
    shield: "Boucliers"
}

const equipmentsCategorieCompendium = {
    tool: "Outils",
    general: "Général",
    container: "Contenants",
    food: "Nourritures",
    clothing: "Vêtements",
    service: "Services",
    housing: "Logements",
    frame: "Montures",
    rune: "Runes",
    glyph: "Glyphes",
    magicObject: "Objets Magiques"
}

const potionsTypeCompendium = {
    potion: "Potions",
    decoction: "Decoctions",
    oil: "Huiles",
    article: "Articles",
    remedy: "Remède",
}
//#rendregion