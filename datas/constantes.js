const attributes = ["cor", "int", "ref", "dex", "vit", "emp", "tech", "vol", "cha"];
const subAttributes = ["etou", "cour", "saut", "ps", "end", "enc", "rec", "poings", "pieds"];
const subAttributesTotal = ["etou", "cour", "saut", "ps", "end", "enc", "rec"];
const weaponAttributes = ["name", "pre", "dgts", "fia", "mains", "port", "diss", "am", "poids"];
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
            nom: "connaissance des monstres",
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
            nom: "langue ancienne",
            abrv: "langueAncienne"
        },
        {
            nom: "langue commune",
            abrv: "langueCommune"
        },
        {
            nom: "langue naine",
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
            nom: "tactique",
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
            nom: "alchimie",
            abrv: "alchimie"
        },
        {
            nom: "artisanat",
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
            nom: "fabrication de pièges",
            abrv: "fabricationPieges"
        },
        {
            nom: "premiers soins",
            abrv: "premierSoins"
        },
    ],

    volonte: [
        {
            nom: "concentration",
            abrv: "concentration"
        },
        {
            nom: "courage",
            abrv: "courage"
        },
        {
            nom: "intimidation",
            abrv: "intimidation"
        },
        {
            nom: "résistance à la douleur",
            abrv: "resDouleur"
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