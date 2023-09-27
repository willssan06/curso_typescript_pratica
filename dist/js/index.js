"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
console.log(x);
// inferencia x annotation
let y = 12;
// tipos básicos
let firstName = "Wilson";
let age = 40;
const isAdmin = true;
console.log(typeof firstName);
// object array
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
// tuplas é um tipo de array
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// Object literals -> {prop: value}
const user = {
    name: "Wilson",
    age: 40,
};
console.log(user);
// any, você declara uma variável que aceita qualquer valor
let a = 0;
a = "Teste";
a = true;
// union type, você declara uma variável que aceita mais de um tipo de valor
let id = "10";
id = 200;
const userId = 10;
// enum (serve para você amarzenar valores, que serão repetidos em várias parte do sistema conforme um tipo de regra em específico)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    Size: Size.G
};
console.log(camisa);
// lteral types é um valor literal atribuido para um tipo ou seja um valor que não se altera
let teste;
teste = "autenticado";
teste = null;
// funcoes tipar os argumentos da função
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// funcoes tipando o retorno
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Wilson"));
// funcoes tipadas que não retornão nada
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
// funcoes com parametros opcionais
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("José");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
// narrowing 
// checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
// generics criar funções que trabalhem o tipo de dado, não importa o dado que venha.
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM:${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItens(a1);
showArraysItens(a2);
// Classes
class User {
    constructor(nome, role, isApproved) {
        this.nome = nome;
        this.role = role;
        this.isApproved = isApproved;
    }
    ShowUserName() {
        console.log(`O nome do usuário é ${this.nome}`);
    }
    ShowUserRole(canShow) {
        if (canShow) {
            console.log(`Idade do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.ShowUserName();
zeca.ShowUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand} `);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decorators (implementação de uma função especial para implementar funcionalidades a partir da minha classe)
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(nome) {
        this.nome = nome;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
