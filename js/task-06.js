let total = 0;
const numbers = [];
while (true) {
    let input = prompt('Введите число:');
    if (input === null) {
        for (let i = 0; i < numbers.length; i += 1) {
            total += numbers[i];
        }
        break;
    }
    if (input === isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    if (input === Number(input)) {
        numbers.push(input);
        continue;
    }
}
console.log(`Общая сумма чисел равна ${total}`);