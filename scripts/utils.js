/* functions */

const emptyElementsValues = (object) => {
    return new Promise((resolve, reject) => {
        try {
            for (const key in object) {
                object[key].value = 0;
            }
            resolve();
        }catch(e){
            console.error("failed to empty an array")
            reject();
        }
    })
}

const assignElementsToObject = (datas, obj, suffix, keyOfCache) => {
    return new Promise((resolve, reject) => {
        try {
            datas.forEach( str => {
                obj[str] = document.getElementById(`${str}${suffix}`);
                const cache = loadCache();
                if(cache != undefined){
                    if(suffix === "Input" || suffix === "Value" && keyOfCache === "attributes"){
                        cache.character[keyOfCache]["base"][str] != undefined? obj[str].value = cache.character[keyOfCache]["base"][str] : null;
                    }else if(suffix === "Bonus"){
                        cache.character[keyOfCache]["bonus"][str] != undefined? obj[str].value = cache.character[keyOfCache]["bonus"][str] : null;
                    }
                }
                
            });
            console.log("elements found for "+keyOfCache+" "+suffix)
            resolve();
        }catch(e){
            console.error("failed to fill "+keyOfCache+" "+suffix)
            reject(e);
        }
    })
}

const manageAttributes = (object, isSub, isBonus) => {
   return new Promise((resolve, reject) => {
        try{
            for (const key in object) {
                object[key].addEventListener("input", e => {
                    cachingAttribCharacter(key, isSub, isBonus);
                    if(isSub){
                        calculSubAttributesTotal(key);
                    }else{
                        attribTotal[key].value = parseFloat(attribHTML[key].value) + parseFloat(attribBonus[key].value);
                        switch(key){
                            case "cor":
                                //clutter
                                subAttribHTML["enc"].value = attribTotal["cor"].value * 10;
                                calculSubAttributesTotal("enc");
                            
                                // hand and foot damage
                                rules.handToHand.forEach(t => {
                                    if(attribTotal["cor"].value == t["Corps"]){
                                        // need to manage bonus
                                        subAttribHTML["poings"].value = t["Poings"];
                                        subAttribHTML["pieds"].value = t["Pieds"];
                                    }
                                })
                            case "vol":
                                // physic table
                                ratio = Math.floor((parseFloat(attribTotal["vol"].value) + parseFloat(attribTotal["cor"].value))/2); // (COR+VOL)/2
                                console.log("(COR+VOL)/2 = "+ratio);
                                rules.physicTable.forEach( t => {
                                    if(t.ratio === ratio){
                                        subAttribHTML["end"].value = t.END; 
                                        subAttribHTML["etou"].value = t.ETOU;
                                        subAttribHTML["ps"].value = t.PS;
                                        subAttribHTML["rec"].value = t.REC;
                                        calculSubAttributesTotal("end");
                                        calculSubAttributesTotal("etou");
                                        calculSubAttributesTotal("ps");
                                        calculSubAttributesTotal("rec");
                                    }
                                })

                                
                                
                                break;
                            
                            case "vit":
                                subAttribHTML["cour"].value = attribHTML["vit"].value*3;
                                subAttribHTML["saut"].value = Math.floor(subAttribHTML["cour"].value/5);
                                calculSubAttributesTotal("cour");
                                calculSubAttributesTotal("saut");
                            
                            default:
                                break;
                        }
                    }
                })
            }             
            console.log(`total calculation enabled for ${isSub?"subAttributes" : "attributes"}`);
            resolve();
        } catch(e){
            reject(e);
        }
   })   
    
}

const calculSubAttributesTotal = (key)=> {
    subAttribTotal[key].value = parseFloat(subAttribHTML[key].value) + parseFloat(subAttribBonus[key].value);
}

function fillMagicTables(table) {
    let cache = loadCache();
    const baseTableHTML = `<tr>
                <th>Nom</th>
                <th>Temps_preparation</th>
                <th>Type</th>
                <th>Cout</th>
                <th>Duree</th>
                <th>Effet</th>
                <th>SD_Difficulte</th>
                <th>Defense</th>
                <th>Degats</th>
                <th>Classe</th>
                <th>Source</th>  
            </tr>`
    sortsTable.innerHTML = baseTableHTML;
    ritualsTable.innerHTML = baseTableHTML;
    let path = "";
    table.id === "sorts-table" ? path = cache.character.sorts : path = cache.character.rituels;
    if(path.length > 0){
        path.forEach(obj => {
            let row = document.createElement("tr");
            for (const key in obj) {
                let cell = document.createElement("td");
                cell.innerText = obj[key];
                row.appendChild(cell);
            }
            table.appendChild(row)
        });
    }
    
}