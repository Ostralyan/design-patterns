interface Duck {
    fly(): void;
    swim(): void;
}

class MallardDuck implements Duck {
    fly(): void {
        console.log("fly")
    }

    swim(): void {
        console.log("swim")
    }
}

interface Turkey {
    fly(): void;
    gobble(): void;
}

class PekingTurkey implements Turkey {
    fly(): void {
        console.log("flap");
    }

    gobble(): void {
        console.log("gobble gobble gobble");
    }
}

class Turducken implements Duck {
    constructor(private turkey: Turkey) {} 

    fly(): void {
        for(let i = 0; i < 10; i++) {
            this.turkey.fly();
        }
    }

    swim(): void {
        throw new Error("turkey.exe has drowned");
    }
}

let mallard = new MallardDuck();
let peking = new PekingTurkey();

let ducks: Duck[] = [];

ducks.push(mallard);
ducks.push(new Turducken(peking));

for(let i = 0; i < ducks.length; i++) {
    ducks[i].fly();
    ducks[i].swim();
    console.log("====")
}