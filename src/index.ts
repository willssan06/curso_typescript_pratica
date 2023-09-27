let x: number = 10;
x = 12;
console.log(x);

// inferencia x annotation
let y = 12;

// tipos básicos

let firstName: string = "Wilson"
let age: number = 40
const isAdmin: boolean = true

console.log(typeof firstName)

// object array

const myNumbers: number[] = [1, 2, 3]
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5)
console.log(myNumbers);

// tuplas é um tipo de array

let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

// Object literals -> {prop: value}

const user: {name: string, age: number} = {
    name: "Wilson",
    age: 40, 
}

console.log(user);

// any, você declara uma variável que aceita qualquer valor

let a:any = 0

a = "Teste"
a = true

// union type, você declara uma variável que aceita mais de um tipo de valor

let id: string | number = "10"
id = 200

// type alias (criar uma apelido para a váriavel para ficar fácil de referenciar)

type myIdType = number | string
const userId: myIdType = 10

// enum (serve para você amarzenar valores, que serão repetidos em várias parte do sistema conforme um tipo de regra em específico)

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    Size: Size.G
}

console.log(camisa);

// lteral types é um valor literal atribuido para um tipo ou seja um valor que não se altera

let teste: "autenticado" | null 
teste = "autenticado";
teste = null;


// funcoes tipar os argumentos da função

function sum (a: number, b: number) {
    return a + b 
}
console.log(sum(12, 12));


// funcoes tipando o retorno

function sayHelloTo(name: String): String{
    return `Hello ${name}`
}
console.log(sayHelloTo("Wilson"))


// funcoes tipadas que não retornão nada

function logger(msg: String): void{
    console.log(msg)
}
logger("Teste!")

// funcoes com parametros opcionais

function greeting(name: string, greet?: string): void{
   if(greet) {
    console.log(`Olá ${greet} ${name}`)
   }else {
    console.log(`Olá ${name}`)
   }
}
greeting("José");
greeting("Pedro", "Sir");

// interfaces servem para padronizar a lógica para ser usado numa função

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1, n2:2}))

// narrowing 
// checagem tipos

function doSomething (info:number | boolean){
    if (typeof info === "number"){
        console.log(`O número é ${info}`)
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics criar funções que trabalhem o tipo de dado, não importa o dado que venha.

function showArraysItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM:${item}` );
    });
}

const a1 = [1,2,3];
const a2 = ["a", "b", "c" ];

showArraysItens(a1);
showArraysItens(a2);

// Classes

class User {

    nome
    role 
    isApproved

    constructor(nome: string, role: string, isApproved: boolean) {
        this.nome = nome
        this.role = role
        this.isApproved = isApproved
    }

    ShowUserName() {
        console.log(`O nome do usuário é ${this.nome}`)
    }

    ShowUserRole(canShow: boolean) {
        if(canShow){
            console.log(`Idade do usuário é: ${this.role}`)
            return
        }
        console.log("Informação restrita!");
    }
}

const zeca = new User("Zéca", "Admin", true)
console.log(zeca);
zeca.ShowUserName();
zeca.ShowUserRole(false);

// interfaces em classes

interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand} `)
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

// herança

class SuperCar extends Car {
    engine

    constructor (brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4);
a4.showBrand();

// decorators (implementação de uma função especial para implementar funcionalidades a partir da minha classe)

function BaseParameters(){
    return function <T extends {new (...args: any []): {}}>(constructor: T){
        return class extends constructor {
            id = Math.random()
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    nome 
    constructor(nome: string) {
        this.nome = nome
    }
}

const sam = new Person("Sam");
console.log(sam)











