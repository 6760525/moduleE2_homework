// Задание 8.

// Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let myMap = new Map()

myMap.set('key', 'prop');
myMap.set(1, 'prop2');
myMap.set(true, 123);

for (let k of myMap.keys()){
    console.log(`Ключ — ${k}, значение — ${myMap.get(k)}.`);
}
