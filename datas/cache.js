let cacheDTO = {
    "character":
        {
            "name": "",
            "race": "",
            "gender": "",
            "age": "",
            "nativeLand": "",
            "job": "",
            "currentWeight": "",
            "excluSkills": {
                "excluSkill": {
                    "base": "",
                    "bonus": "",
                },
                "a1": {
                    "base": "",
                    "bonus": "",
                },
                "a2": { 
                    "base": "",
                    "bonus": "",
                },
                "a3": {

                    "base": "",
                    "bonus": "",
                },
                "b1": {
                    
                    "base": "",
                    "bonus": "",
                },
                "b2": {
                   
                    "base": "",
                    "bonus": "",
                },
                "b3": {
                    "base": "",
                    "bonus": "",
                },
                "c1": {
                    "base": "",
                    "bonus": "",
                },
                "c2": {
                    "base": "",
                    "bonus": "",
                },
                "c3": {
                    "base": "",
                    "bonus": "",
                },

            },
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
            "weaponEquipped": {
                "main": {},
                "sec": {}
            },
            "armorsEquipped":{
                "head": {},
                "torso": {},
                "leftHand": {},
                "rightHand": {},
                "leftLeg": {},
                "rightLeg": {},
                "shield": {}
            },
            "background": "",
            "notes": "",
            "cash": "",
            "pp": "",
            "vigorBonus":"",
            
        }
}
// need to change below in class, one day may be if i have time
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
    "id",
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
    "weight": "",
    "weigthTt": "",
    "notes": "",
    "cost": "",
};

const keysMiscDTO = [
    "name",
    "quantity",
    "weight",
    "weigthTt",
    "notes",
    "cost",
];
let componentDTO = {
    "name": "",
    "quantity": "",
    "weightU": "",
    "weigthTt": "",
    "cost": "",
    "substance": "",
}
const keysComponentDTO = [
    "name",
    "quantity",
    "weight",
    "weigthTt",
    "cost",
    "substance",
]
