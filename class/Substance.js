class Substance extends Equipment {
    constructor(name, weight= 1, quantity = 1, cost = 1){
        super(name, weight);
        this.quantity = quantity;
        this.weightTt = quantity * weight;
        this.cost = cost;
    }
}