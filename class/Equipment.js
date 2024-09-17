class Equipment {
    static count = 0;
    constructor(name = "", weight = 0){
        this.id = Equipment.count;
        this.name = name;
        this.weight = weight;
        Equipment.count++;
    }

    static isEqualEquipment(obj1, obj2){
        if(obj1.id !== obj2.id){
            return false
        }
        return true
    }

    static searchAndUpdateEquipment(cacheField, equipment, remove = false){
        for(const key in cacheField){ 
            console.log(Equipment.isEqualEquipment(cacheField[key], equipment))                  
            if(Equipment.isEqualEquipment(cacheField[key], equipment)){
                remove ? cacheField[key] = {}: cacheField[key] = equipment;       
                localStorage.setItem(keys.storage, JSON.stringify(cache))
                break;
            } 
        }
    }
}