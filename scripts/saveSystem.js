const cachingAttribCharacter = (key, isSub, isSkill, isBonus) => {
    let cache = loadCache();
    if(isSub){
        console.log(subAttribBonus[key].value)
        isBonus ? cache.character.subAttributes["bonus"][key] = subAttribBonus[key].value : cache.character.subAttributes["base"][key] = subAttribHTML[key].value;
        localStorage.setItem(keys.storage, JSON.stringify(cache));
    }else if(isSkill){
        isBonus ? cache.character.skills["bonus"][key] = skillsBonus[key].value : cache.character.skills["base"][key] = skillsHTML[key].value;
        console.log(cache)
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
