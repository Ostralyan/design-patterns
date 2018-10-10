// Template Method Pattern: defines the skeleton of an algorithm in a method, 
// deferring some steps to subclasses. Template Method lets subclasses redefine 
// certain steps of an algorithm without changing the algorithm’s structure.

abstract class CaffeineBeverage {
    prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    abstract  brew(): void;

    abstract  addCondiments(): void;

    boilWater(): void {
        console.log("Boiling water");
    }

    pourInCup(): void {
        console.log("Pouring into cup");
    } 
}

class Tea extends CaffeineBeverage {
    public brew(): void { 
        console.log("Steeping the tea");
    }

    public addCondiments(): void {
        console.log("Adding Lemon"); 
    }
}

class Coffee extends CaffeineBeverage {
    public brew(): void {
        console.log("Dripping Coffee through filter");
    }

    public addCondiments(): void {
        console.log("Adding Sugar and Milk"); 
    }
}

let t = new Tea();
let c = new Coffee();

t.prepareRecipe();
c.prepareRecipe();