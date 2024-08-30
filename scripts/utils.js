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

const assignElementsToObject = (datas, obj, suffix, typeOfCache) => {
    return new Promise((resolve, reject) => {
        try {
            datas.forEach( str => {
                obj[str] = document.getElementById(`${str}${suffix}`);
            });
            console.log("elements found")
            resolve();
        }catch(e){
            console.error("failed to fill an elements array")
            reject(e);
        }
    })
}

const calculTotal = (object, isSub) => {
   return new Promise((resolve, reject) => {
        try{
            for (const key in object) {
                object[key].addEventListener("input", e => {

                    if(isSub){
                        subAttribTotal[key].value = parseFloat(subAttribHTML[key].innerHTML) + parseFloat(subAttribBonus[key].value);
                    }else{
                        attribTotal[key].value = parseFloat(attribHTML[key].value) + parseFloat(attribBonus[key].value);
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