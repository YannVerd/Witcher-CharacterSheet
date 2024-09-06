let cacheDTO = {
    "character":
        {
            "name": "",
            "race": "",
            "gender": "",
            "age": "",
            "nativeLand": "",
            "job": "",
            "excluSkill": "",
            "descripExcluSkill": "",
            "currentWeight": "",
            "attributes": {
                "base": {

                },
                "bonus":{

                }
            },
            "subAttributes": {
                "bonus":{

                }
            },
            "skills":{
                "base":{

                },
                "bonus":{

                }
            },
            "sorts": [],
            "rituels": [],
            "inventory": {
                "weapons":[],
                "armors":[],
                "miscellaneous":[],
                "components":[]
            },
            "weaponEquipped": {},
            "armorsEquipped":{
                "head": {},
                "torso": {},
                "leftHand": {},
                "rightHand": {},
                "leftLeg": {},
                "rightLeg": {}
            }
            
        }
}

let weaponDTO = {
    "name": "",
    "type": "",
    "prec": "",
    "weigth": "",
    "damages": "",
    "fia": "",
    "hands" :"",
    "scope": "",
    "effect":"",
    "diss": "",
    "am": "",
    "equiped": "",
};

const keysWeaponDTO = [
    "name",
    "type",
    "prec",
    "weigth",
    "damages",
    "fia",
    "hands",
    "scope",
    "effect",
    "diss",
    "am",
    "equiped",
];

let armorDTO = {
    "name": "",
    "location": "",
    "PA": "",
    "weigth": "",
    "damages": "",
    "effect": "",
    "equiped":"",
};
const keysArmorDTO = [
    "name",
    "location",
    "PA",
    "weigth",
    "damages",
    "effect",
    "equiped",
];

let miscDTO = {
    "name": "",
    "quantity": "",
    "wieghtUn": "",
    "weigthTt": "",
    "notes": "",
    "cost": "",
};

const keysMiscDTO = [
    "name",
    "quantity",
    "wieghtUn",
    "weigthTt",
    "notes",
    "cost",
];
let componentDTO = {
    "name": "",
    "quantity": "",
    "wieghtUn": "",
    "weigthTt": "",
    "cost": "",
    "substance": "",
}
const keysComponentDTO = [
    "name",
    "quantity",
    "wieghtUn",
    "weigthTt",
    "cost",
    "substance",
]
