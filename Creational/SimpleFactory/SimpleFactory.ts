namespace SimpleFactory {
    class PizzaStore {
        factory: SimplePizzaFactory;
    
        constructor(factory: SimplePizzaFactory) {
            this.factory = factory;
        }
    
        public orderPizza(type: string): Pizza {
            let pizza: Pizza;
    
            pizza = this.factory.createPizza(type);
    
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            return pizza;
        }
    }
    
    class SimplePizzaFactory {
        public createPizza(type: string): Pizza {
            let pizza: Pizza = null;
            if (type === "cheese") {
                pizza = new CheesePizza();
                } else if (type === "pepperoni") {
                pizza = new PepperoniPizza();
                }
                return pizza;
            return pizza;
        }
    }
    
    abstract class Pizza {
        public prepare(): void {
    
        }
    
        public bake(): void {
    
        }
    
        public cut(): void {
    
        }
    
        public box(): void {
    
        }
    }
    
    class CheesePizza extends Pizza {
        
    }
    
    class PepperoniPizza extends Pizza {
        
    }
}
