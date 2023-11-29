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



class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this.decoratedCoffee = coffee;
    }

    getCost() {
        return this.decoratedCoffee.getCost();
    }

    getDescription() {
        return this.decoratedCoffee.getDescription();
    }
}


class Sugar extends CoffeeDecorator{
    getCost() {
        return super.getCost();
    }

    getDescription() {
        return super.getDescription() + ', with sugar';
    }
};

class BananaMilk extends CoffeeDecorator {
    getCost() {
        return super.getCost() + 0.5;
    }

    getDescription() {
        return super.getDescription() + ', with banana milk';
    }
}

class VanilaSyrop extends CoffeeDecorator{
    getCost() {
        return super.getCost() + 0.3;
    }

    getDescription() {
        return super.getDescription() + ', with vanila syrop';
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
americano = main(americano, [BananaMilk, Sugar]);



