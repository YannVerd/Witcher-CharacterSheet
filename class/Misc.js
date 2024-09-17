class Misc extends Equipment{
    constructor(name, weight, quantity, notes, cost){
        super(name, weight);
        this.quantity = quantity;
        this.weightTt = quantity * weight;
        this.notes = notes;
        this.cost = cost;
    }
}