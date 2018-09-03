// Factory Method Pattern: defines an interface
// for creating an object, but lets subclasses decide which
// class to instantiate. Factory Method lets a class defer
// instantiation to subclasses.

// abstract class PizzaStore {
//     public orderPizza(type: string): Pizza {
//         let pizza;

//         pizza = this.createPizza(type);
//         pizza.prepare();
//         pizza.bake();
//         pizza.cut();
//         pizza.box();
//         return pizza;
//     }

//     protected abstract createPizza(type: string): Pizza;
// }

// class NYPizzaStore extends PizzaStore {
//     public createPizza(item: string): Pizza {
//         if (item === "cheese") {
//             return new NYStyleCheesePizza();
//         } else if (item === "veggie") {
//             return new NYStyleVeggiePizza();
//         } else if (item === "clam") {
//             return new NYStyleClamPizza();
//         } else if (item === "pepperoni") {
//             return new NYStylePepperoniPizza();
//         } else 
//         return null;
//         }
// }

// class ChicagoPizzaStore extends PizzaStore {
//     public createPizza(item: string): Pizza {
//         if (item === "cheese") {
//             return new ChicagoStyleCheesePizza();
//         } else if (item === "veggie") {
//             return new ChicagoStyleVeggiePizza();
//         } else if (item === "clam") {
//             return new ChicagoStyleClamPizza();
//         } else if (item === "pepperoni") {
//             return new ChicagoStylePepperoniPizza();
//         } else 
//         return null;
//         }
// }

// class CaliforniaPizzaStore extends PizzaStore {
//     public createPizza(item: string): Pizza {
//         if (item === "cheese") {
//             return new CaliforniaStyleCheesePizza();
//         } else if (item === "veggie") {
//             return new CaliforniaStyleVeggiePizza();
//         } else if (item === "clam") {
//             return new CaliforniaStyleClamPizza();
//         } else if (item === "pepperoni") {
//             return new CaliforniaStylePepperoniPizza();
//         } else 
//         return null;
//         }
// }

// abstract class Pizza {
//     name: string
//     dough: string;
//     sauce: string;
//     toppings: string[] = [];

//     public prepare(): void {
//         console.log("Preparing " + this.name);
//         console.log("Tossing dough...");
//         console.log("Adding sauce...");
//         console.log("Adding toppings: ");
//         for (let i = 0; i < this.toppings.length; i++) {
//             console.log(" " + this.toppings[i]);
//         }
//     }

//     public bake(): void {
//         console.log("Bake for 25 minutes at 350");
//     }

//     public cut(): void {
//         console.log("Cutting the pizza into diagonal slices");
//     }

//     public box(): void {
//         console.log("Place pizza in official PizzaStore box");
//     }

//     public getName(): string {
//         return this.name;
//     }
// }

// class CheesePizza extends Pizza {
    
// }

// class PepperoniPizza extends Pizza {
    
// }

// class NYStyleCheesePizza extends Pizza {
//     constructor() {
//         super();
//         this.name = "NY Style Sauce and Cheese Pizza";
//         this.dough = "Thin Crust Dough";
//         this.sauce = "Marinara Sauce";
//         this.toppings.push("Grated Reggiano Cheese");
//     }
// }

// class NYStyleVeggiePizza extends Pizza {
    
// }

// class NYStyleClamPizza extends Pizza {
    
// }

// class NYStylePepperoniPizza extends Pizza {
    
// }

// class ChicagoStyleCheesePizza extends Pizza {
//     constructor() {
//         super();
//         this.name = "Chicago Style Deep Dish Cheese Pizza";
//         this.dough = "Extra Thick Crust Dough";
//         this.sauce = "Plum Tomato Sauce";
//         this.toppings.push("Shredded Mozzarella Cheese");
//     }

//     public cut(): void {
//         console.log("Cutting the pizza into square slices");
//     }
// }

// class ChicagoStyleVeggiePizza extends Pizza {
    
// }

// class ChicagoStyleClamPizza extends Pizza {
    
// }

// class ChicagoStylePepperoniPizza extends Pizza {
    
// }

// class CaliforniaStyleCheesePizza extends Pizza {

// }

// class CaliforniaStyleVeggiePizza extends Pizza {
    
// }

// class CaliforniaStyleClamPizza extends Pizza {
    
// }

// class CaliforniaStylePepperoniPizza extends Pizza {
    
// }

// let nyStore: PizzaStore = new NYPizzaStore();
// let chicagoStore: PizzaStore = new ChicagoPizzaStore();

// let pizza: Pizza = nyStore.orderPizza("cheese");
//  console.log("Ethan ordered a " + pizza.getName() + "\n");

//  pizza = chicagoStore.orderPizza("cheese");
//  console.log("Joel ordered a " + pizza.getName() + "\n");