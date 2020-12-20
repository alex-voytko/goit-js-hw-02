const formatString = function(string, maxLength = 40) {
    return string.length <= maxLength ? string : string.slice(0, maxLength) + '...';
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
),
);
// вернется форматированная строка