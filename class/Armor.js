class Armor extends Equipment{
    constructor(name, weigth, location, pa, dmg, effect, equiped){
        super(name, weigth);
        this.location = location;
        this.pa = pa;
        this.dmg = dmg;
        this.effect = effect;
        this.equiped = equiped
    }
}