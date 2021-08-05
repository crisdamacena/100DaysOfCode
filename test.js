class Thermostat {
  constructor(graus) {
    this._graus =  (5/9 * (graus - 32)).toFixed(2);
  }
  // getter
  get temperature() {
    return this._graus;
  }
  // setter
  set temperature(updatedGraus) {
    this._graus = updatedGraus;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos.temperature);

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);