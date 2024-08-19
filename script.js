
// Typeof operator

let x = 5;
console.log(typeof x);

let str = "Hello";
console.log(typeof str);

let isTrue = true;
console.log(typeof isTrue);

let undefinedValue;
console.log(typeof undefinedValue);

// Object, Array & Date

const myProducts = ["Camasa", "Pantaloni", "Manusi"];
console.log(`myProducts: `, myProducts);
console.log(`First item in myProducts is ${myProducts[0]}`);
console.log(`Length of myProducts array is ${myProducts.length}`);

// Adaugarea de elemente push- la sfarsitul array=ului

const newItem = "Pantofi";
myProducts.push(newItem);
console.log(`myProducts after push: `, myProducts);

myProducts.push(25);
console.log(`myProducts after second push: `, myProducts);

// Modificarea unui element

myProducts[0] = "Tricou";
console.log(`myProducts after changing the first item: `, myProducts);

// Stergerea unui element pop- ultimul elememt din array

myProducts.pop();
console.log(`myProducts after pop-ing the last item `, myProducts);

// Adaugarea de elemente la inceputul liste unshift
myProducts.unshift("Camasa");
console.log(`myProducts after unshift the first item `, myProducts);

// Stergerea unui element de la inceputul unui array shift

myProducts.shift();
console.log(`myProducts after shift the first item `, myProducts);





