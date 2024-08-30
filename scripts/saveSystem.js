const cachingAttribCharacter = (key, isSub, isBonus) => {
    let cache = JSON.parse(localStorage.getItem("character")) || cacheDTO.character;
    if(isSub){
           isBonus ? cache.subAttributes["bonus"][key] = subAttribBonus[key].value : null;
           localStorage.setItem("character", JSON.stringify(cache));
    }else{
        if(isBonus){
            cache.attributes["bonus"][key] = attribBonus[key].value;
            localStorage.setItem("character", JSON.stringify(cache));
        }else{
            console.log(cache)
            cache.attributes["base"][key] = attribHTML[key].value;
            localStorage.setItem("character", JSON.stringify(cache));
        }
    }
}
