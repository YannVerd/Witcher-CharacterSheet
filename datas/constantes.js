const attributes = ["cor", "int", "ref", "dex", "vit", "emp", "tech", "vol", "cha"];
const subAttributes = ["etou", "cour", "saut", "ps", "end", "enc", "rec", "poings", "pieds"];
const weaponAttributes = ["name", "pre", "dgts", "fia", "mains", "port", "diss", "am", "poids"];
const generalsInfos = [
"name",
"race",
"gender",
"age",
"nativeLand",
"job",
"excluSkill",
"descripExcluSkill"
];
const skills = [
    // Compétences de Savoir
    "connRue",
    "connMonstre",
    "deduction",
    "education",
    "enseignement",
    "etiquette",
    "langueAncienne",
    "langueCommune",
    "langueNaine",
    "negoce",
    "survie",
    "tactique",
    "vigilance",

    // Compétences de Réflexe
    "bagarre",
    "batonLance",
    "equitation",
    "escrime",
    "esquiveEvasion",
    "lamesCourtes",
    "melee",
    "navigation",

    // Compétences de Dextérité
    "adresse",
    "arbalete",
    "archerie",
    "athletisme",
    "furtivite",

    // Compétences de Corps
    "physique",
    "resilience",

    // Compétences d’Empathie
    "beauxArts",
    "charisme",
    "commandement",
    "duperie",
    "jeu",
    "persuasion",
    "psychologie",
    "representation",
    "seduction",
    "stylisme",

    // Compétences de Technique
    "alchimie",
    "artisanat",
    "contreFacon",
    "crochetage",
    "deguisement",
    "fabricationPieges",
    "premierSoins",

    // Compétences de Volonté
    "concentration",
    "courage",
    "intimidation",
    "resDouleur",
    "resContrainte",
    "resMagie",
    "rituels"
];

const keys = {
    storage: "character"
}