"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjetos(pessoa) {
    console.log(pessoa);
}
//classes
{
    class Character {
        constructor(strength, skill) {
            this.stregth = strength;
            this.skill = skill;
        }
        attack() {
            console.log(`Attack with ${this.stregth} points`);
        }
    }
    const p1 = new Character(10, 88);
    console.log(p1.attack());
}
//interfaces vs type
{
    const bot1 = {
        id: 1,
        name: "megaman",
    };
    const bot2 = {
        id: 1,
        name: "megaman",
        sayHello: function () {
            return "hello";
        }
    };
    console.log(bot1);
    console.log(bot2);
    class Pessoa {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        sayHello() {
            return "hello";
        }
    }
    const p = new Pessoa(1, "gutsman");
    console.log(p.sayHello());
}
//tipos
{
    let ligado = false;
    let nome = "Vinicius";
    let idade = 30;
    let altura = 1.9;
    let aniversario = new Date("2024-04-01 12:00");
    console.log(aniversario.toString());
    //tipos especiais
    let nulo = null;
    let indefinido = undefined;
    //tipos abrangentes
    let qualquerTipo = 10;
    qualquerTipo = "dez";
    //let retorno:void = void;
}
//objetos
{
    let produto = {
        nome: "Vinicius",
        cidade: "sp",
        idade: 23,
    };
    let meuProduto = {
        nome: "Tenis",
        preco: 200,
        unidades: 5,
    };
    printaObjetos({
        name: "bruce wayne",
        vulgo: "batman",
    });
}
//arrays
{
    let frutas = ["abacaxi", "mamao", "melancia", "etc"];
    let frutas2 = ["abacaxi", "mamao", "melancia", "etc"];
    //varios tipos em arrays
    let infos = ["vinicius", 30, "abacaxi", 588];
}
//arrays métodos
{
    let frutas = ["abacaxi", "mamao", "melancia", "etc"];
    /*
    push(): Adiciona um elemento ao final do array.
    unshift(): Adiciona um elemento ao início do array.
    pop(): Remove um elemento do final do array.
    shift(): Remove um elemento do início do array.
    slice(): Cria uma cópia rasa de um array.
    concat(): Une dois arrays e retorna um novo array.
    join(deliminator = ','): Une todos os elementos de um array
    dentro de um string.
    forEach: Executa uma função para cada elemento do array,
    sem a necessidade de se preocupar com a indexação dos elementos.
    
    */
}
//tuplas
{
    let boleto = ["agua conta", 150.85, 548862, false];
}
//funções
{
    function addNumber(x, y) {
        return x + y;
    }
    function addToHello(name) {
        return `Hello ${name}`;
    }
    let soma = addNumber(4, 7);
    console.log(addToHello("Vinicius"));
    //funçao multitipo
    {
        function CallToPhone(phone) {
            return phone;
        }
        console.log(CallToPhone(54564554));
        console.log(CallToPhone("54564554"));
    }
    //funcao assincrona
    {
        //promise
        function getDataBase(id) {
            return __awaiter(this, void 0, void 0, function* () {
                return "Vinicius";
            });
        }
    }
}
