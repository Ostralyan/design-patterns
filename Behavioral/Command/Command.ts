namespace Command {

    interface Command {
        execute();
    }

    class LightOnCommand implements Command {
        constructor(public light: Light) {

        }

        public execute(): void {
            light.on();
        }

        
    }

    class GarageDoorOpenCommand implements Command {
        constructor() {

        }

        public execute(): void {
            
        }
    }

    class SimpleRemoteControl { 
        slot: Command;

        public setCommand(command: Command): void {
            this.slot = command;
        }
        public buttonWasPressed(): void {
            this.slot.execute();
        } 
    }

    let remote = new SimpleRemoteControl();
    let light = new Light();
    LightOnCommand lightOn = new LightOnCommand(light);

    remote.setCommand(lightOn);
    remote.buttonWasPressed();
}

