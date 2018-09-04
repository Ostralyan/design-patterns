namespace Strategy {
    interface FlyBehavior {
        fly();
    }

    interface QuackBehavior {
        quack();
    }

    class FlyWithWings implements FlyBehavior {
        fly() {
            console.log("I’m flying!!");
        }
    }
    class FlyNoWay implements FlyBehavior {
        fly() {
            console.log("I can't fly");
        }
    }

    class FlyRocketPowered implements FlyBehavior {
        public fly(): void {
            console.log("I’m fl ying with a rocket!");
        }
    }

    class Quack implements QuackBehavior {
        quack() {
            console.log("Quack");
        }
    }

    class MuteQuack implements QuackBehavior {
        quack() {
            console.log("<< Silence >>");
        }
    }

    class Squeak implements QuackBehavior {
        quack() {
            console.log("Squeak");
        }
    }

    abstract class Duck {
        flyBehavior: FlyBehavior;
        quackBehavior: QuackBehavior;

        public performQuack(): void {
            this.quackBehavior.quack();
        }

        public performFly(): void {
            this.flyBehavior.fly();
        }

        public swim(): void {
            console.log("All ducks float, even decoys!");
        }

        public setFlyBehavior(flyBehavior: FlyBehavior): void {
            this.flyBehavior = flyBehavior;
        }

        public setQuackBehavior(quackBehavior: QuackBehavior): void {
            this.quackBehavior = quackBehavior;
        }

        public abstract display(): void;
    }

    class MallardDuck extends Duck {
        constructor() {
            super();
            this.quackBehavior = new Quack();
            this.flyBehavior = new FlyWithWings();
        }

        public display(): void {
            console.log("I’m a real Mallard duck");
        }
    }

    class ModelDuck extends Duck {
        constructor() {
            super();
            this.flyBehavior = new FlyNoWay();
            this.quackBehavior = new Quack();
        }

        public display(): void {
            console.log("I’m a model duck");
        }
    }

    let mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();

    console.log("=====")

    let model: Duck = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
}