enum Colors {
  RED, // 0
  GREEN, // 1
  BLUE, // 2
  PURPLE = 10,
  YELLOW, // 11
}

console.log(Colors);
console.log(Colors[2]); // BLUE
console.log(Colors[7]); // undefined
console.log(Colors[10]); // PURPLE
console.log("----------");
export function choiceColor(color: Colors) {
  console.log(Colors[color]);
}
choiceColor(Colors.YELLOW);
