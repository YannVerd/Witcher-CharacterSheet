/* functions */

const emptyElementsValues = (array) => {
    return new Promise((resolve, reject) => {
        try {
            array.forEach( element => {
                console.log("bou")
                element.innerHTML = "";
            });
            console.log("bih")
            resolve();
        }catch(e){
            console.error("failed to empty an array")
            reject();
        }
    })
}

const assignElementsToArray = (datas, array, suffix) => {
    return new Promise((resolve, reject) => {
        try {
            datas.forEach( str => {
                array[str] = document.getElementById(`${str}${suffix}`)
            });
            console.log("elements found")
            resolve();
        }catch(e){
            console.error("failed to fill an elements array")
            reject(e);
        }
    })
}