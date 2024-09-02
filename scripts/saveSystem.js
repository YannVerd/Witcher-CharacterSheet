const cachingAttribCharacter = (key, isSub, isBonus) => {
    let cache = loadCache();
    if(isSub){
           isBonus ? cache.subAttributes["bonus"][key] = subAttribBonus[key].value : null;
           localStorage.setItem(keys.storage, JSON.stringify(cache));
    }else{
        if(isBonus){
            cache.attributes["bonus"][key] = attribBonus[key].value;
            localStorage.setItem(keys.storage, JSON.stringify(cache));
        }else{
            console.log(cache)
            cache.attributes["base"][key] = attribHTML[key].value;
            localStorage.setItem(keys.storage, JSON.stringify(cache));
        }
    }
}

const loadCache = () => {
    let cache = JSON.parse(localStorage.getItem(keys.storage)) || cacheDTO;
    return cache;
}
