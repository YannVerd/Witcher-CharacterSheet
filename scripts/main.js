/*--------------- set variables -------------*/
/* cache load */
let cache = loadCache();

/* Generals Informations */
const listMainInfos = [generalsInfos.name,generalsInfos.age,generalsInfos.gender, generalsInfos.nativeLand];
const mainInfosHTML = {}
for(i = 0; i < listMainInfos.length; i++){
    mainInfosHTML[listMainInfos[i]] = document.getElementById(listMainInfos[i]);
    mainInfosHTML[listMainInfos[i]].value = cache.character[listMainInfos[i]];
    mainInfosHTML[listMainInfos[i]].addEventListener('input', e => {
        cache.character[e.target.id] = e.target.value; // caching
        localStorage.setItem(keys.storage, JSON.stringify(cache)); // save cache in localstorage
    })
}

let jobSelect = document.getElementById("jobSelect");
jobSelect.value = cache.character.job;
jobSelect.dispatchEvent(new Event("hange", {'bubbles': true }));
let excluSkill = document.getElementById("excluSkill");
let descripExcluSkill = document.getElementById("descripExcluSkill");
let raceSelect = document.getElementById("raceSelect");
raceSelect.value = cache.character.race;
raceSelect.dispatchEvent(new Event("change", {'bubbles': true }));
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
displaySkills()
let skillsHTML = {};
let skillsBonus = {};
let skillsTotal = {}
assignElementsToObject(skills, skillsHTML, "Input", "skills");
assignElementsToObject(skills, skillsBonus, "Bonus", "skills");
assignElementsToObject(skills, skillsTotal, "Tt", "skills");

let weaponAttribHTML = {};
assignElementsToObject(weaponAttributes, weaponAttribHTML, "Weapon", "weapon");

/* Sorts and rituals */
let sortsTable = document.getElementById('sorts-table');
let ritualsTable = document.getElementById('rituals-table');

/* ------------------------- Generals Informations  ----------------------------*/
// add bonus by race
raceSelect.addEventListener("change", e => {
    rules.races.forEach(async race => {
        await emptyElementsValues(attribBonus, false);
        await emptyElementsValues(subAttribBonus, false);
        await emptyElementsValues(skillsBonus, true);
        if(e.target.value == race.nom){
            race.modifs.forEach(modif => {
                if(Object.keys(modif)[0] === "carac"){
                    attribBonus[modif["carac"]].value = parseFloat(modif.bonus);
                    calculSubAttributesTotal(modif["carac"], false); // recalcul total
                    cachingAttribCharacter(modif["carac"], false, false, true);
                }else if(Object.keys(modif)[0] === "caracDeriv" ){
                    switch(modif["caracDeriv"]){
                        // add case for other derived attributs
                        case "enc":
                            subAttribBonus["enc"].value = parseFloat(modif.bonus);
                            calculSubAttributesTotal("enc", false);
                            cachingAttribCharacter(modif["enc"], true, false, true); //caching
                            break;
                    }      
                }else if(Object.keys(modif)[0] === "armure"){
                    // add PA bonus here
                }else{
                    console.log(skillsBonus[modif["compétence"]])
                    skillsBonus[modif["compétence"]].value = parseFloat(modif.bonus);
                    calculSubAttributesTotal(modif["compétence"], true)
                    cachingAttribCharacter(modif["compétence"], false, true, true);
                }
            })
        }
        cache.character.race = e.target.value;
        localStorage.setItem(keys.storage, JSON.stringify(cache));
    });
});

jobSelect.addEventListener("change", e=> {
    rules.jobs.forEach(j => {
        if(j.Profession == e.target.value){
            descripExcluSkill.innerHTML = "";
            excluSkill.innerHTML = "";
            vigorBase.innerHTML = "";
            excluSkill.innerHTML = j["Nom compétence"];
            descripExcluSkill.innerHTML = j.Description;
            vigorBase.innerHTML = j.Vigueur;
        }
    } )
    cache.character.job = e.target.value;
    localStorage.setItem(keys.storage, JSON.stringify(cache));
});

/* ----------------Derived attributes -----------------*/

manageAttributes(attribHTML, false, false, false);
manageAttributes(attribBonus, false, false, true);
manageAttributes(subAttribBonus, true, false,true);

/*-------------------Magic -----------------------------*/
fillMagicTables(sortsTable);
fillMagicTables(ritualsTable);

/*-------------------skills ----------------------------*/
manageSkills(skillsHTML, false);
manageSkills(skillsBonus, true);