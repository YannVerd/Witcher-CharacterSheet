class Armor extends Equipment{
    constructor(name, weigth, quantity, weightTt, notes, cost){
        super(name, weigth);
        this.weightTt = weightTt;
        this.quantity = quantity;
        this.notes = notes;
        this.cost = cost;
    }
}