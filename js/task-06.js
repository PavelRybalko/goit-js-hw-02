let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");

  if (input !== null && !Number.isNaN(+input)) {
    numbers.push(input);
  }

  if (Number.isNaN(+input)) {
    alert("Было введено не число, попробуйте ещё раз");
  }

} while (input !== null);

if (numbers.lenght !== 0) {
  for (const number of numbers) {
    total += +number;
  }
  console.log("Общая сумма чисел равна", total);
}