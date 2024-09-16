class Equipment {
    static count= 0;
    constructor(name, weigth = 0){
        this.id = Equipment.count;
        this.name = name;
        this.weigth = weigth;
        Equipment.count++;
    }

    static isEqual(obj1, obj2){
        for(const key in obj1){
            if(!obj1[key] === obj2[key]){
                return false
            }
        }
        return true
    }


}