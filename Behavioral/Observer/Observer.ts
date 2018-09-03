class WeatherData {
    getTemperature(): number {
        return 0;
    };
    getHumiditiy(): number {
        return 0;
    };
    getPressure(): number {
        return 0;
    };

    public measurementsChanged(): void {
        let temp = this.getTemperature();
        let humidity = this.getHumiditiy();
        let pressure = this.getPressure();

        currentConditionsDisplay.update(temp, humidity, pressure);
        statisticsDisplay.update(temp, humidity, pressure);
        forecastDisplay.update(temp, humidity, pressure);
    };
}