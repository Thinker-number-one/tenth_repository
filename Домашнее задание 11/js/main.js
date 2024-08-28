// Задание первое

let a = new Set();

a.add('e');
a.add('r');
a.add('i');
a.add('k');

a.add('t');
a.add('h');
a.add('e');

a.add('b');
a.add('e');
a.add('s');
a.add('t');
 
console.log(a); // В консоль выведется 'e' 'r' 'i' 'k' 't' 'h' 'b' 's', так как Set НЕ пропускает дубли!

// Задание второе

let userNumber = document.querySelector('input');

function userNumberInConsole() {
    console.log(+userNumber.value);
}

// Задание третье

let b = new Set();

b.add(1);
b.add(4);
b.add(9);

b.add(25);
b.add(36);
b.add(49);

b.add(81);
b.add(100);
b.add(121);

console.log(b);

console.log(b.has(1)); // В консоль выведется true
console.log(b.has(4)); // В консоль выведется true
console.log(b.has(9)); // В консоль выведется true

console.log(b.has(16)); // В консоль выведется false

console.log(b.has(25)); // В консоль выведется true
console.log(b.has(36)); // В консоль выведется true
console.log(b.has(49)); // В консоль выведется true

console.log(b.has(64)); // В консоль выведется false

console.log(b.has(81)); // В консоль выведется true
console.log(b.has(100)); // В консоль выведется true
console.log(b.has(121)); // В консоль выведется true

// Задание четвертое

let c = [1,2,3,4,5,6,666,777,1989];

console.log(c);

for(let i of c) {
    if(i >= 5) {
        console.log(i);
    }    
}