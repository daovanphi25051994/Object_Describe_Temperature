function Temperature(celsius) {
    if (celsius >= -273) {
        this.celsius = celsius;
        this.convertToFahrenheit = function () {
            return this.celsius * 1.8 + 32;
        }
        this.convertToKelvin = function () {
            return this.celsius + 273.15;
        }
    }
}


let temperature = new Temperature(25);
let fahrenheit = temperature.convertToFahrenheit();
console.log(fahrenheit);

let kelvin = temperature.convertToKelvin();
console.log(kelvin);