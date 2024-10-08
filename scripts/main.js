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
jobSelect.value = cache.character.job || "default";
let knowSkills = document.getElementById('knowSkills');
let knowMagics = document.getElementById('knowMagics');
let equipmentChoice = document.getElementById('equipmentChoice');
let excluSkillsHTML = {}
let excluSkillsBonus = {}
let excluSkillsTt = {}


let excluSkill = document.getElementById("excluSkill");
let descripExcluSkill = document.getElementById("descripExcluSkill");
let excluSkillsEvosTable = document.getElementById('excluSkillsEvos-table');
let raceSelect = document.getElementById("raceSelect");
raceSelect.value = cache.character.race || "default";
let vigorBase = document.getElementById("vigorBase");
let vigorBonus = document.getElementById("vigorBonus");
let vigorTt = document.getElementById("vigorTt");
vigorBonus.value = cache.character.vigorBonus || 0
let raceDetails = document.getElementById("raceDetails");
let weightTt = document.getElementById('weightTt');
let pp = document.getElementById('pp');
let cash = document.getElementById('cash');
weightTt.value = cache.character.currentWeight;
pp.value = cache.character.pp;
cash.value = cache.character.cash;
 

/* attributes */
let attribHTML ={};
let subAttribHTML = {};
let attribBonus = {};
let attribTotal = {};
let subAttribBonus = {};
let subAttribTotal = {};
let ratio = 0; // (cor+vol)/2 match to the physique table
//base
assignElementsToObject(attributes, attribHTML, "Input", keysOfCache.attrib)
//derived
assignElementsToObject(subAttributes, subAttribHTML, "Value", keysOfCache.subAttrib)
//bonus
assignElementsToObject(attributes, attribBonus, "Bonus",keysOfCache.attrib);
assignElementsToObject(subAttributes, subAttribBonus, "Bonus", keysOfCache.subAttrib)

//total
assignElementsToObject(attributes, attribTotal, "Tt", keysOfCache.attrib);
assignElementsToObject(subAttributesTotal, subAttribTotal, "Tt",keysOfCache.subAttrib);

/* Skills */
displaySkills()
let skillsHTML = {};
let skillsBonus = {};
let skillsTotal = {}
assignElementsToObject(skills, skillsHTML, "Input", keysOfCache.skills);
assignElementsToObject(skills, skillsBonus, "Bonus",keysOfCache.skills);
assignElementsToObject(skills, skillsTotal, "Tt", keysOfCache.skills);

let weaponAttribHTML = {};
let secWeaponAttribHTML = {};
let armorsAttribHTML = {};
assignElementsToObject(keysWeaponDTO, weaponAttribHTML, "Weapon", keysOfCache.weapons);
assignElementsToObject(keysWeaponDTO, secWeaponAttribHTML, "SecWeapon", keysOfCache.weapons);
assignElementsToObject(keysArmorDTO, armorsAttribHTML, "Armor", keysOfCache.armors);


/* Sorts and rituals */
let sortsTable = document.getElementById('sorts-table');
let ritualsTable = document.getElementById('rituals-table');
let enchantmentsTable = document.getElementById('enchantments-table');

/* ------------------------- Generals Informations  ----------------------------*/
// add bonus by race
raceSelect.addEventListener("change", e => {
    raceDetails.innerText = "";
    
    rules.races.forEach(async race => {
        await emptyElementsValues(attribBonus);
        await emptyElementsValues(subAttribBonus);
        await emptyElementsValues(skillsBonus);
        if(e.target.value == race.nom){
            race.modifs.forEach(modif => {
                if(Object.keys(modif)[0] === "carac"){
                    attribBonus[modif["carac"]].value = parseFloat(modif.bonus);
                    calculTotal(modif["carac"], keys.inputType.attrib); // recalcul total
                    cachingAttribCharacter(modif["carac"], false, false, true);
                }else if(Object.keys(modif)[0] === "caracDeriv" ){
                    switch(modif["caracDeriv"]){
                        // add case for other derived attributs
                        case "enc":
                            subAttribBonus["enc"].value = parseFloat(modif.bonus);
                            calculTotal("enc", keys.inputType.subAttrib);
                            cachingAttribCharacter(modif["enc"], true, false, true); //caching
                            break;
                    }      
                }else if(Object.keys(modif)[0] === "armure"){
                    // add PA bonus here
                }else{
                    skillsBonus[modif["compétence"]].value = parseFloat(modif.bonus);
                    calculTotal(modif["compétence"], keys.inputType.skill)
                    cachingAttribCharacter(modif["compétence"], false, true, true);
                }
            })
            if(race["détails"].length > 0){
                race["détails"].forEach(detail => {
                    raceDetails.innerText += `${detail}\n`
                })
            }else{
                raceDetails.innerText = "aucuns détails";
            }

        }
        cache.character.race = e.target.value;
        localStorage.setItem(keys.storage, JSON.stringify(cache));
    });
});

jobSelect.addEventListener("change", e=> {
    excluSkillsEvosTable.innerHTML = `<tr>
                                        <th>Attribut</th>
                                        <th>Valeur</th>
                                        <th>Bonus</th>
                                        <th>Total</th>
                                    </tr>`;
    knowSkills.innerText = "";
    knowMagics.innerText = "";
    equipmentChoice.innerText = "";
    rules.jobs.forEach(j => {
        if(j.Profession == e.target.value){
            descripExcluSkill.innerHTML = "";
            excluSkill.innerHTML = "";
            vigorBase.innerHTML = "";
            excluSkill.innerHTML = j["Nom compétence"];
            descripExcluSkill.innerHTML = j.Description;
            vigorBase.innerHTML = j.Vigueur;
            let tr = document.createElement('tr');
            let cellInitialJobName = document.createElement('td');
            tr.appendChild(cellInitialJobName);
            cellInitialJobName.innerText = e.target.value;
            cellInitialJobName.className = "textExcluSkills";
            let cellInitialJobValue = document.createElement('td');
            tr.appendChild(cellInitialJobValue);
            excluSkillsEvosTable.appendChild(tr);
            let inputInitialJobValue = document.createElement('input');
            inputInitialJobValue.type = "number";
            inputInitialJobValue.className = "inputExcluSkills";
            inputInitialJobValue.value = cache.character.excluSkills.excluSkill.base  === "" ? 0 : cache.character.excluSkills.excluSkill.base;
            excluSkillsHTML[keys.inputType.excluSkill] = inputInitialJobValue;
            cellInitialJobValue.appendChild(inputInitialJobValue)
            let cellInitialJobBonus = document.createElement('td');
            tr.appendChild(cellInitialJobBonus);
            let inputInitialJobBonus = document.createElement('input');
            inputInitialJobBonus.type = "number";
            inputInitialJobBonus.className = "inputExcluSkills";
            inputInitialJobBonus.value = cache.character.excluSkills.excluSkill.bonus === "" ? 0 : cache.character.excluSkills.excluSkill.bonus;
            excluSkillsBonus[keys.inputType.excluSkill] = inputInitialJobBonus
            cellInitialJobBonus.appendChild(inputInitialJobBonus);
            let cellInitialJobTt = document.createElement('td');
            let inputInitialJobTt = document.createElement('input');
            inputInitialJobTt.type = "number";
            inputInitialJobTt.className = "inputExcluSkills";
            inputInitialJobTt.readOnly = true;
            excluSkillsTt[keys.inputType.excluSkill] = inputInitialJobTt;
            cellInitialJobTt.appendChild(inputInitialJobTt);
            tr.appendChild(cellInitialJobTt);
            eventInputExcluSkill(excluSkillsHTML, keys.inputType.excluSkill, false)
            eventInputExcluSkill(excluSkillsBonus, keys.inputType.excluSkill, true)
            let index = 0 // index of key
            for(const key in j.evos){
                let titleExcluSkillRow = document.createElement('tr');
                excluSkillsEvosTable.appendChild(titleExcluSkillRow);
                let titleExcluSkillCell = document.createElement('td');
                titleExcluSkillRow.appendChild(titleExcluSkillCell)
                titleExcluSkillCell.innerText = key;
                titleExcluSkillCell.setAttribute('colspan', '4');
                titleExcluSkillCell.className = "titleExcluSkillCell";
                for(i = 0; i < j.evos[key].length; i++){
                    let indexKey = keys.excluSkill[index]+(i+1)
                    let rowEvo = document.createElement('tr');
                    let cellName = document.createElement('td');
                    cellName.innerText = j.evos[key][i]; 
                    let cellBase = document.createElement('td');
                    let inputBase = document.createElement('input');
                    inputBase.type = "number";
                    excluSkillsHTML[indexKey] = inputBase
                    cellBase.appendChild(inputBase)
                    let cellBonus = document.createElement('td');
                    let inputBonus = document.createElement('input');
                    inputBonus.type = "number";
                    excluSkillsBonus[indexKey] = inputBonus
                    cellBonus.appendChild(inputBonus)
                    let cellTt = document.createElement('td');
                    let inputTt = document.createElement('input');
                    inputTt.type = "number";
                    excluSkillsTt[indexKey] = inputTt
                    inputTt.readOnly = true;
                    cellTt.appendChild(inputTt)
                    rowEvo.append(cellName);
                    rowEvo.append(cellBase);
                    rowEvo.append(cellBonus);
                    rowEvo.append(cellTt);
                    inputBase.value = cache.character.excluSkills[indexKey].base === "" ? 0 : cache.character.excluSkills[indexKey].base;
                    inputBonus.value = cache.character.excluSkills[indexKey].bonus === "" ?  0 : cache.character.excluSkills[indexKey].bonus;
                    inputTt = parseFloat(inputBase.value) + parseFloat(inputBonus.value);
                    excluSkillsEvosTable.appendChild(rowEvo);
                    /*----- input event managment -----*/
                    eventInputExcluSkill(excluSkillsHTML, indexKey, false)
                    eventInputExcluSkill(excluSkillsBonus, indexKey, true)
                }
                
    
    
                index++;
            }
            if(j["knowSkills"].length > 0){
                j["knowSkills"].forEach(detail => {
                    knowSkills.innerText += `${detail}\n`
                })
            }else{
                knowSkills.innerText = "Aucunes informations";
            }
            if(j["knowMagics"].length > 0){
                j["knowMagics"].forEach(detail => {
                    knowMagics.innerText += `${detail}\n`
                })
            }else{
                knowMagics.innerText = "Aucunes informations";
            }
            if(j["equipmentChoice"].length > 0){
                j["equipmentChoice"].forEach(detail => {
                    equipmentChoice.innerText += `${detail}\n`
                })
            }else{
                equipmentChoice.innerText = "Aucunes informations";
            }
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
fillMagicTables(enchantmentsTable);


/*-------------------skills ----------------------------*/
manageSkills(skillsHTML, false);
manageSkills(skillsBonus, true);

/*--------------------equipment---------------------------*/

//weapons
for(const key in weaponAttribHTML) {
    weaponAttribHTML[key].addEventListener('input', e=>{
        let weaponMain = cache.character.weaponsEquipped.main 
        if(Object.keys(weaponMain).length > 0) { // test an object is equiped
            weaponMain[key] = e.target.value; // change value of equiped in cache
            cache.character.inventory.weapons.forEach( weapon =>{
            if(weapon.id === weaponMain.id){
                weapon[key] = weaponMain[key];
            }
        })
        localStorage.setItem(keys.storage, JSON.stringify(cache))
        }
        
    })
};
for(const key in secWeaponAttribHTML) {
    secWeaponAttribHTML[key].addEventListener('input', e=>{
        let weaponSec= cache.character.weaponsEquipped.sec
        if(Object.keys(weaponSec).length > 0) {
            weaponSec[key] = e.target.value; // change value of equiped in cache
            cache.character.inventory.weapons.forEach( weapon =>{ // search object in inventory for set property value
                if(weapon.id === weaponSec.id){ 
                    weapon[key] = weaponSec[key];
                }
            })
            localStorage.setItem(keys.storage, JSON.stringify(cache))
        }
        
    })
};
//armors
for(const slot in armorsAttribHTML){
    for(const key in armorsAttribHTML[slot]){
        armorsAttribHTML[slot][key].addEventListener('input', e => {
            let armorEquip = cache.character.armorsEquipped[slot]
            if(Object.keys(armorEquip).length > 0) {
                armorEquip[key] = e.target.value;
                cache.character.inventory.armors.forEach( armor =>{ // search object in inventory for set property value
                    if(armor.id === armorEquip.id){ 
                        armor[key] = armorEquip[key];
                    }
                })
                localStorage.setItem(keys.storage, JSON.stringify(cache))
            }
            
        })
    }
}

/*----------------encumbrement, cash, pp, vigor-------------------------*/
weightTt.style.backgroundColor = parseFloat(subAttribTotal["enc"].value) < parseFloat(weightTt.value) ? "red" : "lightgreen";
cash.addEventListener('input', e => {
    cache.character.cash = e.target.value;
    localStorage.setItem(keys.storage, JSON.stringify(cache));
})
pp.addEventListener('input', e => {
    cache.character.pp = e.target.value;
    localStorage.setItem(keys.storage, JSON.stringify(cache));
})

vigorBonus.addEventListener('input', e => {
    cache.character.vigorBonus = e.target.value;
    vigorTt.value = parseFloat(vigorBase.innerText) + parseFloat(vigorBonus.value)
    localStorage.setItem(keys.storage, JSON.stringify(cache));
})

/*-----dispatch event for load or load page--------*/
jobSelect.dispatchEvent(new InputEvent('change'));
raceSelect.dispatchEvent(new InputEvent('change'));



let inputs = document.querySelectorAll("input[type='number']") // need to retrieve all input (my existing collections are not iterable)
for (let element of inputs) {
    element.dispatchEvent( new InputEvent('input'));
}