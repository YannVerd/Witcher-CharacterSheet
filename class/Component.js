class Armor extends Equipment{
    constructor(name, weigth, quantity, weightTt, substances, cost){
        super(name, weigth);
        this.weightTt = weightTt;
        this.quantity = quantity;
        this.substances = substances;
        this.cost = cost;
    }
}