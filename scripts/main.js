/*--------------- set variables -------------*/
/* Generals Informations */ 
let jobSelect = document.getElementById("jobSelect");
let nameCompExclu = document.getElementById("nameCompExclu");
let descripCompExclu = document.getElementById("descripCompExclu");
let raceSelect = document.getElementById("raceSelect");
let vigorBase = document.getElementById("vigorBase");
let encBonus = document.getElementById("encBonus");
encBonus.innerHTML = "0";

/* attributes */
let attribHTML =[];
let derivedAttribHTML = [];
let attribBonus = [];
let subAttribBonus = [];
let ratio = 0; // (cor+vol)/2 match to the physique table
//base
assignElementsToArray(attributes, attribHTML, "Input", "attributes")
//derived
assignElementsToArray(derivedAttributes, derivedAttribHTML, "Value", "subAttributes")
//bonus
assignElementsToArray(attributes, attribBonus, "Bonus", "bonusAttributes");

/* Skills */
let skillsHTML = [];
assignElementsToArray(skills, skillsHTML, "Input");
/* Weapons / Armor */
let weaponAttribHTML = [];
assignElementsToArray(weaponAttributes, weaponAttribHTML, "Weapon", "weapon");

/* ------------------------- Generals Informations  ----------------------------*/
// add bonus by race
let isDwarf = false
raceSelect.addEventListener("change", e => {
    rules.races.forEach(async race => {
        await emptyElementsValues(attribBonus);
        if(e.target.value == race.nom){
            // empty bonus       
            if(e.target.value != "Nain" && isDwarf){
                isDwarf = false;
                encBonus.innerHTML = 0;
                (derivedAttribHTML["enc"].innerHTML - 25 >= 0) ? derivedAttribHTML["enc"].innerHTML -= 25: derivedAttribHTML["enc"].innerHTML -= 0;
            };
            race.modifs.forEach(modif => {
                if(Object.keys(modif)[0] === "carac"){
                    attribBonus[modif["carac"]].innerHTML += parseFloat(modif.bonus);
                }else if(Object.keys(modif)[0] === "caracDeriv" ){
                    switch(modif["caracDeriv"]){
                        // add case for other derived attributs
                        case "enc":
                            isDwarf = true;
                            encBonus.innerHTML = parseFloat(modif.bonus);
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

attribHTML["cor"].addEventListener("input", e => {
    ratio = (parseInt(attribHTML["vol"].value) + parseInt(e.target.value))/2; // (COR+VOL)/2
    console.log("(COR+VOL)/2 = "+ratio);
    rules.physicTable.forEach( t => {
        if(t.ratio === ratio){
            derivedAttribHTML["end"].innerHTML = t.END; 
            derivedAttribHTML["etou"].innerHTML = t.ETOU;
            derivedAttribHTML["ps"].innerHTML = t.PS;
            derivedAttribHTML["rec"].innerHTML = t.REC;
        }
    })

    // clutter
    derivedAttribHTML["enc"].innerHTML = e.target.value * 10 + parseInt(encBonus.innerHTML);
    encBonus.addEventListener("change", e => {
        derivedAttribHTML["enc"].innerHTML = e.target.value * 10 + parseInt(encBonus.innerHTML);
    })
    // hand and foot damage
    rules.handToHand.forEach(t => {
        if(e.target.value == t["Corps"]){
            derivedAttribHTML["poings"].innerHTML = t["Poings"];
            derivedAttribHTML["pieds"].innerHTML = t["Pieds"];
        }
    })
})

attribHTML["vol"].addEventListener("input", e => {
    
    ratio = (parseInt(attribHTML["cor"].value) + parseInt(e.target.value))/2; // (COR+VOL)/2
    console.log("(COR+VOL)/2 = "+ratio);
    rules.physicTable.forEach( t => {
        if(t.ratio === ratio){
            derivedAttribHTML["end"].innerHTML = t.END;
            derivedAttribHTML["etou"].innerHTML = t.ETOU;
            derivedAttribHTML["ps"].innerHTML = t.PS;
            derivedAttribHTML["rec"].innerHTML = t.REC;
        }
    })
})

attribHTML["vit"].addEventListener("input", e => {
    console.log(attribHTML["vit"].innerHTML)
    derivedAttribHTML["cour"].innerHTML = attribHTML["vit"].value*3;
    derivedAttribHTML["saut"].innerHTML = derivedAttribHTML["cour"].innerHTML/5;
})