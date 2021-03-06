// Задание 7.

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

let array = [null, '+', 1997, NaN, '@', 0, -16, 1e7, 100500, 0, 0.19, -1.07, 0.00, 2., 14, 'XXI', 19];

let odd = 0;
let even = 0;
let zero = 0;

array.forEach(function(item, index, array) {
    if ((!isNaN(item)) && (typeof(item) == "number") && item != 0) {
        if (item % 2 == 0)
            even++;
        else
            odd++;
    }
    else
        if (item === 0)
            zero++;
});

console.log(`Четных чисел: ${even}`)
console.log(`Нечетных чисел: ${odd}`)
console.log(`Нулей: ${zero}`)
