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
}
