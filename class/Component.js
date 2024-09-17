class Component extends Equipment{
    constructor(name, weight, quantity, substances, cost){
        super(name, weight);
        this.weightTt = quantity * weight;
        this.quantity = quantity;
        this.substances = substances;
        this.cost = cost;
    }
}