let total = 0;
const numbers = [];
while (true) {
  let input = prompt('Введите число:');
  if (input === isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  if (input === Number(input)) {
    numbers.push(input);
    continue;
  }
  if (input === null) {
    break;
  }
}
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);