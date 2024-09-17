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
                "leftArm": {},
                "rightArm": {},
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


const keysWeaponDTO = [
    "id",
    "name",
    "type",
    "prec",
    "weight",
    "dmg",
    "fia",
    "hands",
    "scope",
    "effect",
    "diss",
    "am",
    "equiped",
];


const keysArmorDTO = [
    "id",
    "name",
    "location",
    "PA",
    "weight",
    "dmg",
    "effect",
    "ve",
    "equiped",
];



const keysMiscDTO = [
    "id",
    "name",
    "quantity",
    "weight",
    "weightTt",
    "notes",
    "cost",
];

const keysComponentDTO = [
    "id",
    "name",
    "quantity",
    "weight",
    "weightTt",
    "cost",
    "substance",
]
