class Misc extends Equipment{
    constructor(name, weight= 1, quantity = 1, notes, cost = 1){
        super(name, weight);
        this.quantity = quantity;
        this.weightTt = quantity * weight;
        this.notes = notes;
        this.cost = cost;
    }
}