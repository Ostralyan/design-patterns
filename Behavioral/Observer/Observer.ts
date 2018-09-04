// Observer Pattern: defines a one-to-many
// dependency between objects so that when one
// object changes state, all of its dependents are
// notified and updated automatically.
namespace Observer {
    class WeatherData implements Subject {
        private observers: Observer[] = [];
        private temperature: number;
        private humidity: number;
        private pressure: number;

        public registerObserver(o: Observer): void {
            this.observers.push(o);
        }
        
        public removeObserver(o: Observer): void {
            let i = this.observers.indexOf(o);
            if (i >= 0) {
                this.observers.splice(i, 1);
            }
        }
        
        public notifyObservers(): void {
            for (let i = 0; i < this.observers.length; i++) {
                let observer = this.observers[i];
                observer.update(this.temperature, this.humidity, this.pressure);
            }
        }

        public measurementsChanged(): void {
            this.notifyObservers();
        };

        public setMeasurements(temperature: number, humidity: number, pressure: number): void {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.measurementsChanged();
        }
    }

    interface Subject {
        registerObserver(o: Observer): void;
        removeObserver(o: Observer): void;
        notifyObservers(): void;
    }

    interface Observer {
        update(temp: number, humidity: number, pressure: number): void;
    }

    interface DisplayElement {
        display(): void;
    }

    class CurrentConditionsDisplay implements Observer, DisplayElement {
        private temperature: number;
        private humidity: number;
        private weatherData: Subject;
       
        constructor(weatherData: Subject) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this);
        }
       
        public update(temperature: number, humidity: number, pressure: number): void {
            this.temperature = temperature;
            this.humidity = humidity;
            this.display();
        }
       
        public display(): void {
            console.log("Current conditions: " + this.temperature + "F degrees and " + this.humidity + "% humidity");
        }
    }

    class StatisticsDisplay implements Observer, DisplayElement {
        private maxTemp: number = 0;
        private minTemp: number = 200;
        private tempSum: number = 0;
        private numReadings: number = 0;
        private weatherData: Subject;
       
        constructor(weatherData: Subject) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this);
        }
       
        public update(temperature: number, humidity: number, pressure: number): void {
            this.tempSum += temperature;
            this.numReadings++;

            if (temperature > this.maxTemp) {
                this.maxTemp = temperature;
            }
    
            if (temperature < this.minTemp) {
                this.minTemp = temperature;
            }
            this.display();
        }
       
        public display(): void {
            console.log("Statistics: Avg/Max/Min temperature = " 
                + (this.tempSum / this.numReadings) + "/" + this.maxTemp + "/" + this.minTemp);
        }
    }

    class ForecastDisplay implements Observer, DisplayElement {
        private currentPressure: number = 29.92;  
	    private lastPressure: number;
        private weatherData: Subject;
       
        constructor(weatherData: Subject) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this);
        }
       
        public update(temperature: number, humidity: number, pressure: number): void {
            this.lastPressure = this.currentPressure;
            this.currentPressure = pressure;

            this.display();
        }
       
        public display(): void {
            if (this.currentPressure > this.lastPressure) {
                console.log("Forecast: Improving weather on the way!");
            } else if (this.currentPressure == this.lastPressure) {
                console.log("Forecast: More of the same");
            } else if (this.currentPressure < this.lastPressure) {
                console.log("Forecast: Watch out for cooler, rainy weather");
            }
        }
    }

    class HeatIndexDisplay implements Observer, DisplayElement {
        private heatIndex: number;
        private weatherData: Subject;
       
        constructor(weatherData: Subject) {
            this.weatherData = weatherData;
            weatherData.registerObserver(this);
        }
       
        public update(temperature: number, humidity: number, pressure: number): void {
            this.heatIndex = this.computeHeatIndex(temperature, humidity);

            this.display();
        }
       
        public display(): void {
            console.log("Heat index is ", this.heatIndex);
        }

        private computeHeatIndex(t: number, rh: number): number {
            let index = ((16.923 + (0.185212 * t) + (5.37941 * rh) - (0.100254 * t * rh) +
                (0.00941695 * (t * t)) + (0.00728898 * (rh * rh)) +
                (0.000345372 * (t * t * rh)) - (0.000814971 * (t * rh * rh)) +
                (0.0000102102 * (t * t * rh * rh)) - (0.000038646 * (t * t * t)) + (0.0000291583 *  
                (rh * rh * rh)) + (0.00000142721 * (t * t * t * rh)) +
                (0.000000197483 * (t * rh * rh * rh)) - (0.0000000218429 * (t * t * t * rh * rh)) +     
                0.000000000843296 * (t * t * rh * rh * rh)) -
                (0.0000000000481975 * (t * t * t * rh * rh * rh)));
            return index;
        }
    }

    let weatherData: WeatherData = new WeatherData();
    let currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    let statisticsDisplay: StatisticsDisplay = new StatisticsDisplay(weatherData);
    let forecastDisplay: ForecastDisplay = new ForecastDisplay(weatherData);
    let heatIndexDisplay: HeatIndexDisplay = new HeatIndexDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
}