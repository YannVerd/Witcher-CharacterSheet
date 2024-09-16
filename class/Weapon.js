class Weapon extends Equipment{
    constructor(name = "", weigth, type = "", prec= "", dmg = 0, fia = 0, hands = 1, scope = 1, effect = "", diss = "", am = "", isEquippable = false, equiped = "false"){
        super(name, weigth);
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