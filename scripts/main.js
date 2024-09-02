/*--------------- set variables -------------*/
/* Generals Informations */ 
let jobSelect = document.getElementById("jobSelect");
let nameCompExclu = document.getElementById("nameCompExclu");
let descripCompExclu = document.getElementById("descripCompExclu");
let raceSelect = document.getElementById("raceSelect");
let vigorBase = document.getElementById("vigorBase");


/* attributes */
let attribHTML ={};
let subAttribHTML = {};
let attribBonus = {};
let attribTotal = {};
let subAttribBonus = {};
let subAttribTotal = {};
let ratio = 0; // (cor+vol)/2 match to the physique table
//base
assignElementsToObject(attributes, attribHTML, "Input", "attributes")
//derived
assignElementsToObject(subAttributes, subAttribHTML, "Value", "subAttributes")
//bonus
assignElementsToObject(attributes, attribBonus, "Bonus", "attributes");
assignElementsToObject(subAttributes, subAttribBonus, "Bonus", "subAttributes")

//total
assignElementsToObject(attributes, attribTotal, "Tt", "none");
assignElementsToObject(subAttributes, subAttribTotal, "Tt", "none");

/* Skills */
let skillsHTML = {};
assignElementsToObject(skills, skillsHTML, "Input", "skills");
/* Weapons / Armor */
let weaponAttribHTML = {};
assignElementsToObject(weaponAttributes, weaponAttribHTML, "Weapon", "weapon");

/* Sorts and rituals */
let sortsTable = document.getElementById('sorts-table');
let ritualsTable = document.getElementById('rituals-table');

/* ------------------------- Generals Informations  ----------------------------*/
// add bonus by race
// let isDwarf = false
raceSelect.addEventListener("change", e => {
    rules.races.forEach(async race => {
        await emptyElementsValues(attribBonus);
        await emptyElementsValues(subAttribBonus);
        await emptyElementsValues(skillsHTML);
        if(e.target.value == race.nom){
            race.modifs.forEach(modif => {
                if(Object.keys(modif)[0] === "carac"){
                    attribBonus[modif["carac"]].value = parseFloat(modif.bonus);
                }else if(Object.keys(modif)[0] === "caracDeriv" ){
                    switch(modif["caracDeriv"]){
                        // add case for other derived attributs
                        case "enc":
                            isDwarf = true;
                            subAttribBonus["enc"].value = parseFloat(modif.bonus);
                            break;
                    }      
                }else if(Object.keys(modif)[0] === "armure"){
                    // add PA bonus here
                }else{
                    skillsHTML[modif["compétence"]].value = parseFloat(modif.bonus);
                }
            })
        }
    });
});

jobSelect.addEventListener("change", e=> {
    rules.jobs.forEach(j => {
        if(j.Profession == e.target.value){
            descripCompExclu.innerHTML = "";
            nameCompExclu.innerHTML = "";
            vigorBase.innerHTML = "";
            nameCompExclu.innerHTML = j["Nom compétence"];
            descripCompExclu.innerHTML = j.Description;
            vigorBase.innerHTML = j.Vigueur;
        }
    } )
});

/* ----------------Derived attributes -----------------*/

manageAttributes(attribHTML, false, false);
manageAttributes(attribBonus, false, true);
manageAttributes(subAttribBonus, true, true);

/*-------------------Magic -----------------------------*/
fillMagicTables(sortsTable);
fillMagicTables(ritualsTable);
    