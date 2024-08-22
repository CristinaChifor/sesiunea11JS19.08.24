
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

// indexOf- gasirea indexului unui element din Array; 
//Returneaza o portiune a array-ului intre indexurile specificate, fara a modifica array-ul original. 
//Ultimul index (end) nu este inclus in subset.

const indexOfPantaloni =myProducts.indexOf("Pantaloni");
console.log(`Elementul "Pantaloni" se afla in lista la indexul ${indexOfPantaloni}`);

// slice (start, end)- subset al unui array

const subsetOfMyProducts = myProducts.slice(1, 3);
console.log(`subset frrom 1 to 3 is`, subsetOfMyProducts);

// splice(start, deleteCount, item1, item2, ...): Modifica continutul array-ului, adaugand elemente la index start stergand un numr de elemente egal cu deleteCount incepand de la index start. 


myProducts.splice(2, 1, "Camasa");
console.log(`After splice (2, 1)`, myProducts);

//concat(): Concateneaza doua sau mai multe array-uri, returnand un array nou.
//Concatenare de array-uri

const concatenatedArrays = myProducts.concat(subsetOfMyProducts);
console.log(`After concat(subsetOfMyProducts)`, concatenatedArrays);

/**Objects
 *  In JavaScript, obiectele sunt structuri de date complexe care permit stocarea si organizarea datelor in perechi cheie-valoare. 
 * Un obiect poate contine diferite tipuri de date, inclusiv alte obiecte, functii si array-uri. 
 * Obiectele sunt fundamentale in JavaScript si sunt folosite pe scara larga in programare pentru a reprezenta si manipula informatii complexe.
Un obiect este definit utilizand paranteze {} si poate contine zero sau mai multe perechi cheie-valoare despartite prin virgula.
 */

let person = {
    name:"John",
    surname: "Doe",
    address: {
        street: "Cetatii",
        number: 21,
        flat: "B1",
        building: "7B",
        zipCode: "100203",
        city: "Cluj-Napoca",
        county: "Cluj",
        country: "Romania"
    },
    age: 30
};

console.log(`person:`, person);
console.log(`nume persoana: ${person.name}`);
console.log(`cod postal: ${person.address.zipCode}`);
console.log(person.flat);// undefined property
console.log(person.address.flat);

// brackets notation

console.log(`person surname: ${person["surname"]}`);

// Modificare valori in obiect

person.name = "Ion";
console.log(`name:`, person.name);
console.log(`name: ${person[name]}`);

// Compararea obiectelor

const obj1 = {a: 10, b: true};
const obj2 = {a: 10, b: true};
const obj3 = obj1;

console.log(`obj1 === obj2 => ${obj1 === obj2}`);
console.log(`obj1 === obj3 => ${obj1 === obj3}`);



