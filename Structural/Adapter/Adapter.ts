// Adapter Pattern: converts the interface of a class 
// into another interface the clients expect. 
// Adapter lets classes work together that couldn’t 
// otherwise because of incompatible interfaces.

interface Duck { 
    quack(): void; 
    fly(): void;
};

class MallardDuck implements Duck { 
    public quack(): void {
        console.log("Quack"); 
    }

    public fly(): void {
        console.log("I’m flying");
    } 
}

interface Turkey { 
    gobble(): void; 
    fly(): void;
}

class WildTurkey implements Turkey { 
    gobble(): void {
        console.log("Gobble gobble"); 
    }

    fly(): void {
        console.log("I’m flying a short distance");
    } 
}

class TurkeyAdapter implements Duck { 
    constructor(public turkey: Turkey) {}

    public quack(): void { 
        this.turkey.gobble();
    }

    public fly(): void {
        for(let i=0; i < 5; i++) {
            this.turkey.fly();
        } 
    }
}

class DuckTestDrive {
    public  main(): void {
        let duck = new MallardDuck(); 
        let turkey = new WildTurkey();
        let turkeyAdapter: Duck = new TurkeyAdapter(turkey);
        console.log("The Turkey says..."); 
        turkey.gobble();
        turkey.fly();
        console.log("\nThe Duck says..."); 
        this.testDuck(duck);
        console.log("\nThe TurkeyAdapter says...");
        this.testDuck(turkeyAdapter); 
    }

    testDuck(duck: Duck): void {
        duck.quack();
        duck.fly(); 
    }
}

let dtd = new DuckTestDrive()
dtd.main();