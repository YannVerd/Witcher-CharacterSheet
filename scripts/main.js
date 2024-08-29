/*------------ set variables ------------*/
/* Generals Informations */ 
let jobSelect = document.getElementById("jobSelect");
let nameCompExclu = document.getElementById("nameCompExclu");
let descripCompExclu = document.getElementById("descripCompExclu");
let vigorBase = document.getElementById("vigorBase");

/* attributes */
let attribHTML =[];
let derivedAttribHTML = [];
let ratio = 0;
attributes.forEach(att => {
    
    attribHTML[att] = document.getElementById(`${att}Input`);
    
});

derivedAttributes.forEach(d => {
    derivedAttribHTML[d] = document.getElementById(`${d}Value`)
});

/* Skills */
let raceSelect = document.getElementById("raceSelect");

/* ------------ Generals Informations ---------*/

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
})

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
    derivedAttribHTML["enc"].innerHTML = e.target.value * 10;
    
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


/*------------------ Skills ----------------------------*/





