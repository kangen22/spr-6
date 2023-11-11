class Coffee {
    constructor() {
        this.coffeeDrink = "";
        this.price = 1;
    }

   getCost() {
       return this.price;
   }

   getDescription() {
      return this.coffeeDrink;
   }
};

class Latte extends Coffee {
    constructor() {
        super();
        this.price = 4.5;
        this.coffeeDrink = "Latte";
    }
};

class Americano extends Coffee {
    constructor() {
        super();
        this.price = 3.5;
        this.coffeeDrink = "Americano";
    }
};

class Sugar {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription() + ', with sugar';
    }
};

class BananaMilk {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 0.5;
    }

    getDescription() {
        return this.coffee.getDescription() + ', with banana milk';
    }
}

class VanilaSyrop {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + 0.3;
    }

    getDescription() {
        return this.coffee.getDescription() + ', with vanila syrop';
    }
}


let main = (baseCoffee, decorators) => {
    let coffee = baseCoffee;
    console.log(`${coffee.getDescription()}: ${coffee.getCost()}$`);
 
    decorators.forEach(decorator => {
      coffee = new decorator(coffee);
      console.log(`${coffee.getDescription()}: ${coffee.getCost()}$`);
    });
    return coffee;
 }
 
let latte = new Latte(); 
latte = main(latte, [BananaMilk, Sugar, VanilaSyrop])

let americano = new Americano();
latte = main(americano, [BananaMilk, Sugar])


