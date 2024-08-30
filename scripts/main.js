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
assignElementsToObject(attributes, attribBonus, "Bonus", "attribBonus");
assignElementsToObject(subAttributes, subAttribBonus, "Bonus", "subAttribBonus")

//total
assignElementsToObject(attributes, attribTotal, "Tt", "attribTotal");
assignElementsToObject(subAttributes, subAttribTotal, "Tt", "subAttribTotal");

/* Skills */
let skillsHTML = {};
assignElementsToObject(skills, skillsHTML, "Input", "skills");
/* Weapons / Armor */
let weaponAttribHTML = {};
assignElementsToObject(weaponAttributes, weaponAttribHTML, "Weapon", "weapon");

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

calculTotal(attribHTML, false);
calculTotal(attribBonus, false);
calculTotal(subAttribBonus, true);

attribTotal["cor"].addEventListener("change", e => {
    console.log(e);
    ratio = (parseInt(attribTotal["vol"].value) + parseInt(e.target.value))/2; // (COR+VOL)/2
    console.log("(COR+VOL)/2 = "+ratio);
    rules.physicTable.forEach( t => {
        if(t.ratio === ratio){
            subAttribHTML["end"].innerHTML = t.END; 
            subAttribHTML["etou"].innerHTML = t.ETOU;
            subAttribHTML["ps"].innerHTML = t.PS;
            subAttribHTML["rec"].innerHTML = t.REC;
        }
    })

    // clutter
    subAttribHTML["enc"].innerHTML = e.target.value * 10 + parseInt(subAttribBonus["enc"].value);
    subAttribBonus["enc"].addEventListener("change", e => {
        subAttribHTML["enc"].innerHTML = e.target.value * 10 + parseInt(subAttribBonus["enc"].value);
    })
    // hand and foot damage
    rules.handToHand.forEach(t => {
        if(e.target.value == t["Corps"]){
            subAttribHTML["poings"].innerHTML = t["Poings"];
            subAttribHTML["pieds"].innerHTML = t["Pieds"];
        }
    })
})

attribHTML["vol"].addEventListener("change", e => {
    
    ratio = (parseInt(attribHTML["cor"].value) + parseInt(e.target.value))/2; // (COR+VOL)/2
    console.log("(COR+VOL)/2 = "+ratio);
    rules.physicTable.forEach( t => {
        if(t.ratio === ratio){
            subAttribHTML["end"].innerHTML = t.END;
            subAttribHTML["etou"].innerHTML = t.ETOU;
            subAttribHTML["ps"].innerHTML = t.PS;
            subAttribHTML["rec"].innerHTML = t.REC;
        }
    })
})

attribHTML["vit"].addEventListener("input", e => {
    console.log(attribHTML["vit"].innerHTML)
    subAttribHTML["cour"].innerHTML = attribHTML["vit"].value*3;
    subAttribHTML["saut"].innerHTML = subAttribHTML["cour"].innerHTML/5;
})