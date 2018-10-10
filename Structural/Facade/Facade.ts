// Facade Pattern: 
// provides a unified interface to a set of interfaces in a subsytem. 
// Facade defines a higher-level interface that makes the subsystem easier to use.

class HomeTheaterFacade { 
    amp: Amplifier;
    tuner: Tuner;
    dvd: DvdPlayer;
    cd: CdPlayer;
    projector: Projector;
    lights: TheaterLights;
    screen: Screen;
    popper: PopcornPopper;

    constructor(
        amp: Amplifier, 
        tuner: Tuner,
        dvd: DvdPlayer, 
        cd: CdPlayer,
        projector: Projector,
        screen: Screen,
        lights: TheaterLights,
        popper: PopcornPopper
    ) {
        this.amp
        this.tuner = tuner;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.screen = screen;
        this.lights = lights;
        this.popper = popper;

    }
    
    public void watchMovie(movie: String) { 
        console.log("Get ready to watch a movie...");
        popper.on();
        popper.pop();
        lights.dim(10);
        screen.down();
        projector.on();
        projector.wideScreenMode();
        amp.on();
        amp.setDvd(dvd);
        amp.setSurroundSound();
        amp.setVolume(5);
        dvd.on();
        dvd.play(movie);
    }   

    public void endMovie() {
        console.log("Shutting movie theater down...");
        popper.off();
        lights.on();
        screen.up();
        projector.off();
        amp.off();
        dvd.stop();
        dvd.eject();
        dvd.off();
    }
}