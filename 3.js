// Задание 3.

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let str = "Hello";
let newString = "";

for (var i = str.length - 1; i >= 0; i--)
    newString += str[i];

console.log(newString);
