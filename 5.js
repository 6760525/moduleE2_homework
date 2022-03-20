// Задание 5.

// Дан произвольный массив. Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.

function rnd(max){
    return Math.floor(Math.random() * max);
}
    
let list = [];

for (let i = 0; i < rnd(20); i++)
  list.push(rnd(10));

console.log(`Длина массива: ${list.length} элементов`);

for (const element of list)
  console.log(element);
