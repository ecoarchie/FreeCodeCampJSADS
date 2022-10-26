// Use getters and setters to Control Access to an Object

class Thermostat {
  constructor (temperatureInFar) {
    this._temperatureInFar = temperatureInFar;
  }

  get temperature() {
    return 5 / 9 * (this._temperatureInFar - 32);
  }

  set temperature(temperatureInCelcius) {
    this._temperatureInFar = temperatureInCelcius * 9 / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
