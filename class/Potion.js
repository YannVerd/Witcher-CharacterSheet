class Potion extends Equipment{
    constructor(name, category, effects, duration, toxicity, weight= 1, quantity = 1, cost = 1){
        super(name, weight);
        this.quantity = quantity;
        this.weightTt = quantity * weight;
        this.effects = effects;
        this.duration = duration;
        this.toxicity = toxicity
        this.cost = cost;
        this.category = category;
    }
}