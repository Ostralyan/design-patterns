// Abstract Factory Pattern: provides an interface
// for creating families of related or dependent objects
// without specifying their concrete classes.
namespace AbstractFactory {
    class Dough {

    }

    class Sauce {

    }

    class Cheese {

    }

    class Veggies {

    }

    class Pepperoni {

    }

    class Clams {

    }

    class ThinCrustDough {
        
    }

    class MarinaraSauce {

    }

    class ReggianoCheese {

    }

    class SlicedPepperoni {

    }

    class FreshClams {

    }

    class Garlic {

    }

    class Onion {

    }

    class Mushroom {

    }

    class RedPepper {

    }




    abstract class PizzaStore {
        public orderPizza(type: string): Pizza {
            let pizza;

            pizza = this.createPizza(type);
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            return pizza;
        }

        protected abstract createPizza(type: string): Pizza;
    }

    abstract class Pizza {
        name: string;
        dough: Dough;
        sauce: Sauce;
        veggies: Veggies[];
        cheese: Cheese;
        pepperoni: Pepperoni;
        clam: Clams;

        abstract prepare(): void;

        public bake(): void {
            console.log("Bake for 25 minutes at 350");
        }

        public cut(): void {
            console.log("Cutting the pizza into diagonal slices");
        }

        public box(): void {
            console.log("Place pizza in official PizzaStore box");
        }

        public getName(): string {
            return this.name;
        }
    }

    interface PizzaIngredientFactory {
        createDough(): Dough;
        createSauce(): Sauce;
        createCheese(): Cheese;
        createVeggies(): Veggies[];
        createPepperoni(): Pepperoni;
        createClam(): Clams;
    }

    class NYPizzaStore extends PizzaStore {
        public createPizza(item: string): Pizza {
            let pizza: Pizza;
            let ingredientFactory: PizzaIngredientFactory  = new NYPizzaIngredientFactory();

            if (item === "cheese") {
                pizza = new CheesePizza(ingredientFactory);
                pizza.name = "New York Style Cheese Pizza";
            } else if (item === "veggie") {
                pizza = new VeggiePizza(ingredientFactory);
                pizza.name = "New York Style Cheese Pizza";
            } else if (item === "clam") {
                pizza = new ClamPizza(ingredientFactory);
                pizza.name = "New York Style Cheese Pizza";
            } else if (item === "pepperoni") {
                pizza = new PepperoniPizza(ingredientFactory);
                pizza.name = "New York Style Cheese Pizza";
            }

            return pizza;
        }
    }

    class ChicagoPizzaStore extends PizzaStore {
        public createPizza(item: string): Pizza {
            let pizza: Pizza;
            let ingredientFactory: PizzaIngredientFactory  = new ChicagoPizzaIngredientFactory();

            if (item === "cheese") {
                pizza = new CheesePizza(ingredientFactory);
                pizza.name = "Chicago Style Cheese Pizza";
            } else if (item === "veggie") {
                pizza = new VeggiePizza(ingredientFactory);
                pizza.name = "Chicago Style Veggie Pizza";
            } else if (item === "clam") {
                pizza = new ClamPizza(ingredientFactory);
                pizza.name = "Chicago Style Clam Pizza";
            } else if (item === "pepperoni") {
                pizza = new PepperoniPizza(ingredientFactory);
                pizza.name = "Chicago Style Pepperoni Pizza";
            }
            return pizza;
        }
    }

    class CheesePizza extends Pizza {
        constructor(private ingredientFactory: PizzaIngredientFactory) {
            super();
        }

        prepare(): void {
            console.log("Preparing " + this.name);
            this.dough = this.ingredientFactory.createDough();
            this.sauce = this.ingredientFactory.createSauce();
            this.cheese = this.ingredientFactory.createCheese();
        }
    }

    class ClamPizza extends Pizza {
        constructor(private ingredientFactory: PizzaIngredientFactory) {
            super();
        }

        prepare(): void {
            console.log("Preparing " + this.name);
            this.dough = this.ingredientFactory.createDough();
            this.sauce = this.ingredientFactory.createSauce();
            this.cheese = this.ingredientFactory.createCheese();
            this.clam = this.ingredientFactory.createClam();
        }
    }

    class VeggiePizza extends Pizza {
        constructor(private ingredientFactory: PizzaIngredientFactory) {
            super();
        }

        prepare(): void {
            console.log("Preparing " + this.name);
            this.dough = this.ingredientFactory.createDough();
            this.sauce = this.ingredientFactory.createSauce();
            this.cheese = this.ingredientFactory.createCheese();
            this.veggies = this.ingredientFactory.createVeggies();
        }
    }

    class PepperoniPizza extends Pizza {
        constructor(private ingredientFactory: PizzaIngredientFactory) {
            super();
        }

        prepare(): void {
            console.log("Preparing " + this.name);
            this.dough = this.ingredientFactory.createDough();
            this.sauce = this.ingredientFactory.createSauce();
            this.cheese = this.ingredientFactory.createCheese();
            this.pepperoni = this.ingredientFactory.createPepperoni();
        }
    }

    class NYPizzaIngredientFactory implements PizzaIngredientFactory {
        public createDough(): Dough {
            return new ThinCrustDough();
        }
        public createSauce(): Sauce {
            return new MarinaraSauce();
        }
        public createCheese(): Cheese {
            return new ReggianoCheese();
        }
        public createVeggies(): Veggies[] {
            let veggies: Veggies[] = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
            return veggies;
        }
        public createPepperoni(): Pepperoni {
            return new SlicedPepperoni();
        }
        public createClam(): Clams {
            return new FreshClams();
        }
    }

    class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
        public createDough(): Dough {
            return new ThinCrustDough();
        }
        public createSauce(): Sauce {
            return new MarinaraSauce();
        }
        public createCheese(): Cheese {
            return new ReggianoCheese();
        }
        public createVeggies(): Veggies[] {
            let veggies: Veggies[] = [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
            return veggies;
        }
        public createPepperoni(): Pepperoni {
            return new SlicedPepperoni();
        }
        public createClam(): Clams {
            return new FreshClams();
        }
    }

    let nyStore: PizzaStore = new NYPizzaStore();
    let chicagoStore: PizzaStore = new ChicagoPizzaStore();

    let pizza: Pizza = nyStore.orderPizza("cheese");
    console.log("Ethan ordered a " + pizza.getName() + "\n");

    pizza = chicagoStore.orderPizza("cheese");
    console.log("Joel ordered a " + pizza.getName() + "\n");
}