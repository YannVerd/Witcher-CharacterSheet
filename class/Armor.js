class Armor extends Equipment{
    constructor(name, weight = 0.5, location = "head", pa = 3, dmg = 0, effect = "aucuns", ve = 0, isEquippable = false, equiped = "false", equipmentLocationOptions = ["false", "yes"]){
        super(name, weight);
        this.location = location;
        this.pa = pa;
        this.dmg = dmg;
        this.effect = effect;
        this.ve = ve;
        this.isEquippable = isEquippable;
        this.equiped = equiped;
        this.equipmentLocationOptions = equipmentLocationOptions;
    }
}