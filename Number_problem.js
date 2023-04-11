function roundNumber(number, decimalPlaces) {
  return Number(number.toFixed(decimalPlaces));
}

console.log(roundNumber(3.14159, 2));
console.log(roundNumber(3.14159, 3));
console.log(roundNumber(3.14159, 4));
