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
            const cache = loadCache();
            switch (keyOfCache) {
                case keysOfCache.attrib:
                case keysOfCache.subAttrib:
                    datas.forEach( str => {
                        obj[str] = document.getElementById(`${str}${suffix}`);
                        if(cache != undefined){
                            if(suffix === "Input" || suffix === "Value" && keyOfCache === "attributes"){
                                cache.character[keyOfCache]["base"][str] != undefined? obj[str].value = cache.character[keyOfCache]["base"][str] : null;
                            }else if(suffix === "Bonus"){
                                cache.character[keyOfCache]["bonus"][str] != undefined? obj[str].value = cache.character[keyOfCache]["bonus"][str] : null;
                            }
                        }        
                    });
                    break;
                case keysOfCache.weapons:
                    datas.forEach(str=> {
                        if( str !== "id" && str !== "equiped"){
                            console.log(str, suffix)
                            obj[str] = document.getElementById(`${str}${suffix}`);
                            if(cache != undefined){
                                if(suffix === "Weapon"){
                                    cache.character[keyOfCache].main != undefined? obj[str].value = cache.character[keyOfCache].main[str] : null;
                                }else{
                                    cache.character[keyOfCache].sec != undefined? obj[str].value = cache.character[keyOfCache].sec[str] : null;
                                }
                            
                            }  
                        }
                          
                    })                     
                    break;
                case keysOfCache.armors:
                    datas.forEach(str => {
                        if(str !== "id" && str !== "equiped"){
                            obj[str] = document.getElementById(`${str}${suffix}`);
                            let key =  obj[str].id.replaceArmor("Armor", "");
                            console.log(key)

                            if(cache != undefined){ 
                                cache.character[keyOfCache].main != undefined? obj[str].value = cache.character[keyOfCache].main[str] : null;
                            }  
                        }                     
                    })
                    break;   
                case keysOfCache.skills:
                    for (const key in datas) {
                        datas[key].forEach( skill => {
                            obj[skill.abrv] = document.getElementById(`${skill.abrv}${suffix}`)
                            if(cache != undefined){
                                if(suffix === "Input") {
                                    cache.character[keyOfCache]["base"][skill.abrv] != undefined? obj[skill.abrv].value = cache.character[keyOfCache]["base"][skill.abrv] : null;
                                }else if(suffix === "Bonus"){
                                    cache.character[keyOfCache]["bonus"][skill.abrv] != undefined? obj[skill.abrv].value = cache.character[keyOfCache]["bonus"][skill.abrv] : null;
                                }
                            }
                        })
                        
                    }
                    break;
           
            }
            // if(keyOfCache != "skills"){
            //     if(keyOfCache === "attributes" || keyOfCache === "subAttributes"){
            //         datas.forEach( str => {
            //             obj[str] = document.getElementById(`${str}${suffix}`);
            //             if(cache != undefined){
            //                 if(suffix === "Input" || suffix === "Value" && keyOfCache === "attributes"){
            //                     cache.character[keyOfCache]["base"][str] != undefined? obj[str].value = cache.character[keyOfCache]["base"][str] : null;
            //                 }else if(suffix === "Bonus"){
            //                     cache.character[keyOfCache]["bonus"][str] != undefined? obj[str].value = cache.character[keyOfCache]["bonus"][str] : null;
            //                 }
            //             }        
            //         });
            //     }else if(keyOfCache === "weapon"){}
                
            // }else { // if is skills 
            //     for (const key in datas) {
            //         datas[key].forEach( skill => {
            //             obj[skill.abrv] = document.getElementById(`${skill.abrv}${suffix}`)
            //             if(cache != undefined){
            //                 if(suffix === "Input") {
            //                     cache.character[keyOfCache]["base"][skill.abrv] != undefined? obj[skill.abrv].value = cache.character[keyOfCache]["base"][skill.abrv] : null;
            //                 }else if(suffix === "Bonus"){
            //                     cache.character[keyOfCache]["bonus"][skill.abrv] != undefined? obj[skill.abrv].value = cache.character[keyOfCache]["bonus"][skill.abrv] : null;
            //                 }
            //             }
            //         })
                    
            //     }
            // }
            
            console.log("elements found for "+keyOfCache+" "+suffix)
            resolve();
        }catch(e){
            console.error("failed to fill "+keyOfCache+" "+suffix)
            reject(e);
        }
    })
}

const manageAttributes = (object, isSub, isSkill, isBonus) => {
   return new Promise((resolve, reject) => {
        try{
            for (const key in object) {
                object[key].addEventListener("input", e => {
                    cachingAttribCharacter(key, isSub, isSkill, isBonus);
                    if(isSub){
                        if(key != "poings" && key != "pieds"){
                            calculTotal(key, keys.inputType.subAttrib);
                        }
                        
                    }else{
                        attribTotal[key].value = parseFloat(attribHTML[key].value) + parseFloat(attribBonus[key].value);
                        switch(key){
                            case "cor":
                                //clutter
                                subAttribHTML["enc"].value = attribTotal["cor"].value * 10;
                                calculTotal("enc", keys.inputType.subAttrib);
                            
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
                                        calculTotal("end", keys.inputType.subAttrib);
                                        calculTotal("etou", keys.inputType.subAttrib);
                                        calculTotal("ps", keys.inputType.subAttrib);
                                        calculTotal("rec", keys.inputType.subAttrib);
                                    }
                                })

                                
                                
                                break;
                            
                            case "vit":
                                subAttribHTML["cour"].value = attribHTML["vit"].value*3;
                                subAttribHTML["saut"].value = Math.floor(subAttribHTML["cour"].value/5);
                                calculTotal("cour", keys.inputType.subAttrib);
                                calculTotal("saut", keys.inputType.subAttrib);
                            
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

const manageSkills = (object, isBonus) => {
    for (const key in object) {
        object[key].addEventListener('input', e=>{
            calculTotal(key, keys.inputType.skill);
            cachingAttribCharacter(key, false, true, isBonus);
        })
    }
}

const calculTotal = (key, type)=> {
    switch (type) {
        case keys.inputType.skill:
            skillsTotal[key].value = parseFloat(skillsBonus[key].value) + parseFloat(skillsHTML[key].value);
            break;
    
        case keys.inputType.subAttrib:
            subAttribTotal[key].value = parseFloat(subAttribHTML[key].value) + parseFloat(subAttribBonus[key].value);
            break;
        
        case keys.inputType.attrib:
            attribTotal[key].value = parseFloat(attribBonus[key].value) + parseFloat(attribHTML[key].value);
            break;

        case keys.inputType.excluSkill:
            excluSkillsTt[key].value = parseFloat(excluSkillsBonus[key].value) + parseFloat(excluSkillsHTML[key].value)
            break;
    }
}



const displaySkills = () => {
    const mainSkillsSContainer = document.getElementById("mainSkillsContainer");
    for (const key in skills) {
        const div = document.createElement('div');
        div.className="skills-container";
        const h3 = document.createElement('h3');
        h3.innerText = key;
        div.appendChild(h3);
        const table = document.createElement("table");
        table.className = "skills-table";
        skills[key].forEach( skill => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <tr>
                    <td>${skill.nom}</td>
                    <td><input type="number" id="${skill.abrv}Input" value="0" step="1" min="-22" max="22"></td>
                    <td><input type="number" id="${skill.abrv}Bonus" value="0" step="1" min="-22" max="22"></td>
                    <td><input type="number" id="${skill.abrv}Tt" value="0" step="1" min="-22" max="22"></td>
                </tr>
            `;
        table.appendChild(tr);
        })
        
        div.appendChild(table)
        mainSkillsSContainer.appendChild(div);
    }    
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
                <th>Actions</th>
            </tr>`
    table.innerHTML = baseTableHTML;
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
            let delButton = document.createElement('button');
            let cellDell = document.createElement("td");
            row.appendChild(cellDell);
            delButton.innerText = "supprimer";
            delButton.className = "fantasy-btn-sm"
            delButton.addEventListener('click', e => {
                let index = path.findIndex( i => i.Nom === path.Nom) // find item in cache
                path.splice(index, 1); // delete match element
                localStorage.setItem(keys.storage, JSON.stringify(cache)); // save on cache
                fillMagicTables(table);
            })
            cellDell.appendChild(delButton);
            table.appendChild(row)
        });
    }
    
}

function eventInputExcluSkill(input, key, isBonus){
    input[key].addEventListener('input', e => {
        isBonus ? cache.character.excluSkills[key].bonus = e.target.value : cache.character.excluSkills[key].base = e.target.value;
        calculTotal(key, keys.inputType.excluSkill)
        localStorage.setItem(keys.storage, JSON.stringify(cache));
    })
}