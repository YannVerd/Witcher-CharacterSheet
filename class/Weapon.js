class Weapon extends Equipment{
    constructor(name = "", weight = 1, type = "", prec= 0, dmg = "1d6", fia = 0, hands = 1, scope = 1, effect = "auncuns", diss = "Petite", am = 0, isEquippable = false, equiped = "false"){
        super(name, weight);
        this.type = type;
        this.prec = prec;
        this.dmg = dmg;
        this.fia = fia;
        this.hands = hands;
        this.scope = scope;
        this.effect = effect;
        this.diss = diss;
        this.am = am;
        this.isEquippable = isEquippable;
        this.equiped = equiped;
    }
}