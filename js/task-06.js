let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  const notANumber = Number.isNaN(+input);
  if (notANumber) {
    alert("Было введено не число, попробуйте ещё раз");
    continue;
  }

  if (input !== null && input !== "") {
    numbers.push(input);
  }
} while (input !== null);

if (numbers.lenght !== 0) {
  for (const number of numbers) {
    total += +number;
  }
}

console.log("Общая сумма чисел равна", total);
