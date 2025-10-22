const user = {
  firstname: "Petras",
  lastName: "Petraitis",
  age: 30,
  hobbies: ["football", "basketball", ["....", "...."]],
  contacts: {
    "home adress": {
      street: "Savanoriu pr.",
      number: 111,
      city: "Kaunas",
    },
    "work adress": {
      street: "Savanoriu pr",
      number: 111,
      city: "Vilnius",
    },
  },
};

console.log(user);

console.log(user.firstname);
console.log(user.hobbies);
console.log(user.contacts["home adress"].street);

user.id = 123456789;

console.log(user);

user.sayHello = () => {
  console.log("Labas rytas");
};
console.log(user);

user.sayHello();

///////////

let name = "Antanas";
let lastName = "Antanaitis";

const person = {
  name: name,
  lastName: lastName,
};
console.log(person);

const person1 = {
  name: name,
  lastName: lastName,
};
console.log(person1);

///////////
const person2 = {};
person2.name = "John";
person2.lastName = "Doe";

console.log(person2);

/////////////
const person3 = {};

const persona = Object.create(person3);
person2.name = "John";
person2.lastName = "Doe";

console.log(persona);

///////////

function Persona(name, lastName) {
  this.firstname = name;
  this.lastName = lastName;
}

const persona1 = new Persona("Tom", "Soyer");
console.log(persona1);

///////

const obj = {
  name: "Jane",
  greet: function () {
    const arrowFunc = () => console.log(this.name);
    arrowFunc();
  },
};
obj.greet();

// ("use strict");
// const obj1 = {
//   name: "Jane",
//   greet: function () {
//     const arrowFunc = () => console.log(this.name);
//     arrowFunc();
//   },
// };
// setTimeout(obj1.greet, 1000);

const obj2 = {
  name: "Jane",
  greet: function () {
    console.log(this.name);
  },
};
obj.greet();

//////////
// console.log(person2);

// const { name: renamedKeyName, lastName } = person2;
// console.log(renamedKeyName);
// console.log(lastName);

////////////////

// let zmogus = {
//   vardas: "Vesta",
//   amzius: 25,
//   augintinis: {
//     vardas: "Koksis",
//     rusis: "suo"
//   }
// }
// pristatyti() {
//   console.log("labas as esu ${this.vardas}, man ${this.amzius}, o mano augintinis ${this.augintinis.vardas}.");
// }

const useris = {
  firstName: "Steve",
  nickName: "Lalala",
  grantedPrizes: ["prize1", "prize2", "prize3"],
};

// Object.keys();

console.log(Object.keys(useris));
console.log(Object.values(useris));
console.log(Object.entries(useris));

delete useris.nickName;

console.log(useris);

/////////// 1.3 pratybos 1.

const augintinis = {
  vardas: "Koksis",
  rusis: "suo",
  amzius: "11",
};
console.log("Be savybes pridejimo");
console.log(augintinis);

/////////// 2.
augintinis.spalva = "juoda";

console.log("Po naujos savybes pridejimo:");
console.log(augintinis);

////////// 3.
delete augintinis.spalva;
console.log(augintinis);

/////////// 4.
if ("spalva" in augintinis) {
  console.log("Savybe 'spalva' egiztuoja objekte");
} else {
  console.log("Savybe 'spalva' neegiztuoja objekte");
}

if ("rusis" in augintinis) {
  console.log("Savybe 'rusis' egzistuoja objekte");
} else {
  console.log("Savybe 'rusis' neegzistuoja objekte");
}
console.log("spalva" in augintinis);

///////// 1.

const vaisiai = ["Bananai", "Vysnios", "Obuoliai"];

for (let i = 0; i < vaisiai.length; i++) console.log(vaisiai[i]);

//////// 2. for
const skaiciai = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < skaiciai.length; i++) {
  suma += skaiciai[i];
}

console.log(suma);

////// 2. forEach
const skaiciai1 = [1, 2, 3, 4, 5];
let suma1 = 0;
skaiciai1.forEach((element) => {
  suma1 += element;
});
console.log(suma1);

//////. 2. reduce

const skaiciai2 = [1, 2, 3, 4, 5];

const initialValue = 0;
const suma2 = skaiciai2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(suma2);

////// 3.

const sakinys = "as megstu labai vaikscioti daug lauke su savo mazu suniuku";

const zodziai = sakinys.split(" ");
console.log(zodziai);

const lyginiai = [];
const nelyginiai = [];

for (let i = 0; i < zodziai.length; i++)
  if (i % 2 === 0) {
    lyginiai.push(zodziai[i]);
  } else {
    nelyginiai.push(zodziai[i]);
  }

const sakinysLyginiai = lyginiai.join(" ");
const sakinysNelyginiai = nelyginiai.join(" ");

console.log(sakinysLyginiai);
console.log(sakinysNelyginiai);

//////// 4. veliau padaryti

////////////////////// 2 pratybos
////////////// 1.

const automobiliai = ["Audi", "Bmw", "Volkswagen", "Volvo"];
// if (!automobiliai.includes("Bentley")) {  // includes tikrina ar yra masyve
//   automobiliai.push("Bentley");
// }
// console.log(automobiliai);
console.log(automobiliai.includes("Bentley"));
automobiliai.push("Bentley");
console.log(automobiliai);

///////////// 2.

let prekes = ["pienas", "duona", "sviestas", "mesa", "pienas", "duona"];
let unikaliosPrekes = [];

for (let i = 0; i < prekes.length; i++) {
  let preke = prekes[i];
  if (unikaliosPrekes.indexOf(preke) === -1) {
    unikaliosPrekes.push(preke);
  }
}
console.log(prekes);
console.log(unikaliosPrekes);

///////////// 3.

let fruits = [
  "Bananai",
  "Vysnios",
  "Obuoliai",
  "Bananai",
  "Kriause",
  "Vynuoges",
  "Vysnios",
];
let unikalusVaisiai = []; ///cia filtruosime dublikatus

for (let i = 0; i < fruits.length; i++) {
  let fruit = fruits[i]; //pasiemam kiekviena vaisiu is masyvo
  if (!unikalusVaisiai.includes(fruit)) {
    unikalusVaisiai.push(fruit);
  }
}
console.log(fruits);
console.log(unikalusVaisiai);

////////// 4.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numbers[i] = "Petras";
  }
}
for (let i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === "string") {
    // typeof tikrina ar elementas yra tekstas
    numbers[i] = numbers[i].toUpperCase();
  }
}
console.log(numbers);

/////////////////////// 4. pratybos
let duomenys = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  topping: [
    { id: "5001", type: "None" },
    { id: "5002", type: "Glazed" },
    { id: "5005", type: "Sugar" },
    { id: "5007", type: "Powdered Sugar" },
    { id: "5006", type: "Chocolate with Sprinkles" },
    { id: "5003", type: "Chocolate" },
    { id: "5004", type: "Maple" },
  ],
};
duomenys.topping.forEach((el) => {
  Object.keys(el).map((element) => {
    console.log(`${element}: ${item[element]}`);
  })
});

duomenys.topping.forEach((el) => {
  console.log(el);
  let text = Object.entries(el)
.map(([key, val]) => `${key}: ${val}`)
.join(", ")
})
