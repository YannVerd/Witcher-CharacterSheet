/* set variable for attributes */
let attribHTML =[];
let derivedAttribHTML = [];
let ratio = 0;
attributes.forEach(att => {
    
    attribHTML[att] = document.getElementById(`${att}Input`);
    
});

derivedAttributes.forEach(d => {
    derivedAttribHTML[d] = document.getElementById(`${d}Value`)
});


/* Calcul derived attributes */
attribHTML["cor"].addEventListener("input", e => {
    console.log(e.target.value);
    console.log(attribHTML["cor"].value);
    ratio = (e.target.value + attribHTML["vol"].value)/2; // (COR+VOL)/2
    console.log("ratio "+ratio);
    rules.physicTable.forEach( t => {
        if(t.ratio === ratio){
            derivedAttribHTML["end"].innerHTML = t.END; 
            derivedAttribHTML["etou"].innerHTML = t.ETOU;
            derivedAttribHTML["ps"].innerHTML = t.PS;
            derivedAttribHTML["rec"].innerHTML = t.REC;
        }
    })
})

attribHTML["vol"].addEventListener("input", e => {
    ratio = (attribHTML["cor"].value + e.target.value)/2; // (COR+VOL)/2
    console.log("ratio "+ratio);
    rules.physicTable.forEach( t => {
        if(t.ratio === ratio){
            derivedAttribHTML["end"].innerHTML = t.END;
            derivedAttribHTML["etou"].innerHTML = t.ETOU;
            derivedAttribHTML["ps"].innerHTML = t.PS;
            derivedAttribHTML["rec"].innerHTML = t.REC;
        }
    })
})








