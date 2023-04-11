function roundNumber(number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  const rounded = Math.floor(number * factor + 0.5) / factor;
  return rounded;
}


console.log(roundNumber(3.14159, 2));
console.log(roundNumber(3.14159, 3)); 
console.log(roundNumber(3.14159, 4)); 
