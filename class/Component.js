class Component extends Equipment{
    constructor(name, substance, cost = 1, weight = 1, quantity = 1){
        super(name, weight);
        this.weightTt = quantity * weight;
        this.quantity = quantity;
        this.substance = substance;
        this.cost = cost;
    }
}