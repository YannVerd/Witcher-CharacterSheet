const cachingAttribCharacter = (key, isSub, isSkill, isBonus) => {
    let cache = loadCache();
    if(isSub){
        isBonus ? cache.character.subAttributes["bonus"][key] = subAttribBonus[key].value : cache.character.subAttributes["base"][key] = subAttribHTML[key].value;
        localStorage.setItem(keys.storage, JSON.stringify(cache));
    }else if(isSkill){
        isBonus ? cache.character.skills["bonus"][key] = skillsBonus[key].value : cache.character.skills["base"][key] = skillsHTML[key].value;
        localStorage.setItem(keys.storage, JSON.stringify(cache));
    }else{
        if(isBonus){
            cache.character.attributes["bonus"][key] = attribBonus[key].value;
            localStorage.setItem(keys.storage, JSON.stringify(cache));
        }else{
            cache.character.attributes["base"][key] = attribHTML[key].value;
            localStorage.setItem(keys.storage, JSON.stringify(cache));
        }
    }
}

const loadCache = () => {
    let cache = JSON.parse(localStorage.getItem(keys.storage)) || cacheDTO;
    return cache;
}

function saveCharacter(){
    fetch(`http://${domain.prod}:3000/character`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept':'application/json'
        },
        body: JSON.stringify(cache.character)
    })
    .then( res => res.json())
    .then(res => {
        console.log(res)
        if(res._id){
            cache.character["_id"] = res._id; // add id to indicate that is a saved character
            localStorage.setItem("character", JSON.stringify(cache))
        }
        alert(res.message)
    })
    .catch(()=>{
        showToast('Connexion au serveur impossible')
    })
}

const saveLocalyCharacter = () => {
    const datasJSon = JSON.stringify(cache)
    const blob = new Blob([datasJSon],{type: "application/json"})
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${cache.character.name}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

const loadLocalyCharacter = () => {
    const fileInput = document.getElementById("file").files[0];
    
    if(fileInput){
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log("onload event")
            const content = JSON.parse(e.target.result)
            displaySaves([content.character], savesTypes.local)
        }
        reader.readAsText(fileInput);
    } else {
        showToast("Veuillez Sélectionner un fichier")
    }
}

const displaySaves = (datas, saveType) => {
    const cellsOrder = ["name", "race", "gender", "job"];
    let charactersTable = document.getElementById('charactersTable');
    datas.forEach(element => {      
            let row = document.createElement('tr');
            for (let i = 0; i< cellsOrder.length; i++) {
                let cell = document.createElement('td');
                cell.innerText = element[cellsOrder[i]]
                row.appendChild(cell)
            }
            let cellAction = document.createElement('td');
            let buttonLoad = document.createElement('button')
            buttonLoad.innerText = "Charger";
            buttonLoad.classList.add(...["fantasy-btn-sm"]);
            cellAction.appendChild(buttonLoad);
            row.appendChild(cellAction)
            let cellSaveType = document.createElement('td')
            cellSaveType.innerText = saveType;
            row.appendChild(cellSaveType)
            buttonLoad.addEventListener('click', e => {               
                cache.character = {...element}
                localStorage.setItem(keys.storage, JSON.stringify(cache));
                window.location.href="../character.html"
            })

            charactersTable.appendChild(row)
        });
}

const savesTypes = {
    local: "locale",
    server: "serveur"
}