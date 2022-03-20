// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
// Проверить, все ли элементы в массиве одинаковые.

let arr1 = [1,1,1,1,1];
let arr2 = [1,1,1,2,3,4,5];
let res = true;

arr1.forEach(function(item, index, array) {
    res = res && item == arr1[0]
});
console.log(res)

res = true;
arr2.forEach(function(item, index, array) {
    res = res && item == arr2[0]
});
console.log(res)
