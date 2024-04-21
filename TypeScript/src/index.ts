type heroi={
    name: string;
    vulgo: string;
}

function printaObjetos(pessoa: heroi){
    console.log(pessoa);
}
//classes
{
    //data modifiers
    /**
     * public todos podem acessar
     * private só pode ser acessado de dentro da classe
     * protected classes que herdam podem acessar
     */
    class Character{
        public name?:string;
        stregth:number;
        skill:number;

        constructor(name: string, strength: number,skill:number){
            this.name = name;
            this.stregth = strength;
            this.skill = skill;
        }

        public attack():void{
            console.log(`Attack with ${this.stregth} points`)
        }
    }

    const p1 = new Character("Ryu", 10, 88);
    console.log(p1.attack());

}

//interfaces vs type
{
    //type tipar conjunto/objeto - quando definir a forma como uma const vai receber seus valores
    //interface utilizada quando vai trabalhar com classe
    type robot={
        readonly id: number | string;
        name: string;
    }

    interface robot2{
        readonly id: number | string;
        name:string;
        sayHello():string;
    }

    const bot1: robot={
        id:1,
        name:"megaman",
    }

    const bot2: robot2 = {
        id: 1,
        name: "megaman",
        sayHello: function (): string {
            return "hello"
        }
    }
    console.log(bot1);
    console.log(bot2);

    class Pessoa implements robot2{
        id: string | number;
        name: string;

        constructor(id:string|number, name:string){
            this.id = id
            this.name = name
        }
        sayHello(): string {
            return "hello"
        }
    }
    const p = new Pessoa(1, "gutsman")
    console.log(p.sayHello())
}

//tipos
{
let ligado:boolean = false;
let nome:string = "Vinicius";
let idade:number = 30;
let altura:number = 1.9;

let aniversario:Date = new Date("2024-04-01 12:00")
console.log(aniversario.toString())

//tipos especiais
let nulo:null = null
let indefinido:undefined = undefined;

//tipos abrangentes
let qualquerTipo: any = 10
qualquerTipo = "dez"

//let retorno:void = void;
}

//objetos
{
    let produto: object = {
        nome:"Vinicius",
        cidade:"sp",
        idade:23,
    };

    type ProdutoLoja = {
        nome:string;
        preco:number;
        unidades:number;
    }

    let meuProduto:ProdutoLoja={
        nome: "Tenis",
        preco: 200,
        unidades: 5,
    };


    printaObjetos({
        name: "bruce wayne",
        vulgo: "batman",
    })
}

//arrays
{
let frutas:string[] = ["abacaxi", "mamao", "melancia", "etc"];
let frutas2:Array<string> = ["abacaxi", "mamao", "melancia", "etc"]
//varios tipos em arrays
let infos:(string|number)[] = ["vinicius", 30, "abacaxi", 588]
}

//arrays métodos
{
    let frutas: string[] = ["abacaxi", "mamao", "melancia", "etc"];
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
    let boleto:[string, number, number, boolean] = ["agua conta", 150.85, 548862, false]
}

//funções
{
    function addNumber (x:number,y:number):number {
        return x + y
    }

    function addToHello(name:string):string{
        return `Hello ${name}`
    }

    let soma: number = addNumber(4, 7);
    console.log(addToHello("Vinicius"));

    //funçao multitipo
    {
        function CallToPhone(phone:number | string):number|string{
            return phone;
        }

        console.log(CallToPhone(54564554));
        console.log(CallToPhone("54564554"));
    }

    //funcao assincrona
    {
        //promise
        async function getDataBase(id:number):Promise<number | string>{
            return "Vinicius"
        }
    }

    


}