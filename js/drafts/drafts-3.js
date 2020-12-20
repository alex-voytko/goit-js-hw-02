// Функция findSmallestNumber поиска самого наименьшего элемента массива

const numbers = [67, 45, -3, 78, -12, 2];
let smallestNumber = numbers[0];

const findSmallestNumber = function(array) {
    for (let i = 1; i < array.length; i += 1) {

        if (array[i] < smallestNumber) {
            smallestNumber = array[i];
        }
    }
    return smallestNumber;
}

const r1 = findSmallestNumber([13, 23, 10, 14, 44]);
console.log(r1);

const r2 = findSmallestNumber([11, 23, 141, 24, 14, 4]);
console.log(r2);


