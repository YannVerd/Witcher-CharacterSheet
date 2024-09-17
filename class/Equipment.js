class Equipment {
    static count = loadCache().character.maxIdInventory || 0;
    constructor(name = "", weight = 0){
        this.id = Equipment.count;
        this.name = name;
        this.weight = weight;
        Equipment.count++;
        cache.character.maxIdInventory = Equipment.count;
        localStorage.setItem(keys.storage, JSON.stringify(cache))
    }

    /** 
     * function to test if is an object is equal to an other
     * @param {Object} first object to compare
     * @param {Object} second bject to compare
     * @return {boolean}
    */
    static isEqualEquipment(obj1, obj2){
        if(obj1.id !== obj2.id){
            return false
        }
        return true
    }
    
    /**
     * 
     * @param {*} cacheField 
     * @param {*} equipment 
     * @param {*} remove 
     */
    static searchAndUpdateEquipment(cacheField, equipment, remove = false, isArray = false){
        if(isArray){
            for(i++; i < cacheField.length; i++){
                if(Equipment.isEqualEquipment(cacheField[i], equipment)){
                    remove ? cacheField[i] = {}: cacheField[i] = equipment;       
                    localStorage.setItem(keys.storage, JSON.stringify(cache))
                    break;
                }
            }
        }else{
            for(const key in cacheField){     
                if(Equipment.isEqualEquipment(cacheField[key], equipment)){
                    remove ? cacheField[key] = {}: cacheField[key] = equipment;       
                    localStorage.setItem(keys.storage, JSON.stringify(cache))
                    break;
                } 
            }
        }
        
        
    }
    /**
     * Function that auto fill equiped select's option depending on location selection
     * @param {string} location the value of location (select element location)
     * @param {Armor} equipment the equipment object (Armor)
     * @param {HTMLElement} selectInput the select equipped input
     */
    
    static fillEquipedSelectOptions(location, equipment, selectInput){
        location === "arm" || location === "leg" ? equipment.equipmentLocationOptions = ["false", "right", "left"] : equipment.equipmentLocationOptions = ["false", "true"];
        equipment.location = location;
        selectInput.innerHTML = ""; // remove all options
        equipment.equipmentLocationOptions.forEach( (str, key)=> {
            if(str === "false"){
                selectInput[key] = new Option("non", str, true, false)
            }else if(str === "left"){
                selectInput[key] = new Option("gauche", str,false, false)
            }else if(str === "right"){
                selectInput[key] = new Option("droite", str,false, false)
            }else{
                selectInput[key] = new Option("oui", str,false, false)
            }     
        })
        // search element in cache
        cache.character.inventory.armors.forEach(eqpt => {
            eqpt.id === equipment.id ? eqpt = equipment : null
        })
        localStorage.setItem(keys.storage, JSON.stringify(cache))
    }
}