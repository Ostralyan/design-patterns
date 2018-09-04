// Decorator Pattern: attaches additional
// responsibilities to an object dynamically.
// Decorators provide a flexible alternative to
// subclassing for extending functionality.
namespace Decorator {
    abstract class Beverage {
        description: string = "Unknown Beverage";

        public getDescription(): string {
            return this.description;
        }

        public abstract cost(): number;
    };

    abstract class CondimentDecorator extends Beverage {
        public abstract getDescription(): string;
    }

    class Espresso extends Beverage {

        constructor() {
            super();
            this.description = "Espresso";
        }
       
        public cost(): number {
            return 1.99;
        }
    }

    class HouseBlend extends Beverage {
        constructor() {
            super();
            this.description = "House Blend Coffee";
        }

        public cost(): number {
            return .89;
        }
    }

    class DarkRoast extends Beverage {
        constructor() {
            super();
            this.description = "Dark Roast";
        }

        public cost(): number {
            return .99;
        }
    }

    class Mocha extends CondimentDecorator {
        constructor(public beverage: Beverage) {
            super();
        }

        public getDescription(): string {
            return this.beverage.getDescription() + ", Mocha";
        }

        public cost(): number {
            return .20 + this.beverage.cost();
        }
    }

    class Soy extends CondimentDecorator {
        constructor(public beverage: Beverage) {
            super();
        }

        public getDescription(): string {
            return this.beverage.getDescription() + ", Soy";
        }

        public cost(): number {
            return .15 + this.beverage.cost();
        }
    }

    class Whip extends CondimentDecorator {
        constructor(public beverage: Beverage) {
            super();
        }

        public getDescription(): string {
            return this.beverage.getDescription() + ", Whip";
        }

        public cost(): number {
            return .10 + this.beverage.cost();
        }
    }

    let beverage = new Espresso();
    console.log(beverage.getDescription()
    + " $" + beverage.cost());

    let beverage2 = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(beverage2.getDescription()
    + " $" + beverage2.cost());

    let beverage3 = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    console.log(beverage3.getDescription()
    + " $" + beverage3.cost());
}