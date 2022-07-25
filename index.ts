
function addElementsInList<T>(array: any[], value: T) {
    return array.map(item => item + value);
}

addElementsInList([1, 2, 3], 2)
//types
function sum(number1: number, number2: number) {
    return number1 + number2;
}


console.log(sum(2, 3));

//inteface

interface IUser {
    id: string,
    email: string
}

interface IAdmin extends IUser {
    cargo?: 'Super' | 'Cordenador' | 'Supervisor' | 'funcionario';
}

function redirecione(user: IUser | IAdmin) {
    if ('cargo' in user) {
        // redirecionar para area de adms
    }
    // redirecionar para area de usuarios
}

function redirecionarArea(user: IAdmin) {
    if (user.cargo) {
        //tem cargo vai pra sua area
    }
    // nao tem cargo vai pra area comun
}


interface IAnimal {
    name: string;
    type: 'terrestre' | 'aquático' | 'voador';
    domestico: boolean;
    executeRoar(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IAnimal = {
    name: 'Elefante',
    type: 'terrestre',
    domestico: false,
    executeRoar: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

const felino: IFelino = {
    visaoNoturna: true,
    name: 'leão',
    type: "terrestre",
    domestico: false,
    executeRoar: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

const animal2: IDomestico = {
    domestico: true,
    name: 'cachorro',
    porte: 'medio',
    type: 'terrestre',
    executeRoar: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
    visaoNoturna: true

}

//readonly

interface IAnimalDomestico {
    name: string;
    age: number;
    favoriteToy?: string;
}

class MyDog implements IAnimalDomestico {
    name: string;
    age: number;
    favoriteToy?: string | undefined;

    constructor(name: string, age: number, ...string: string[]) {
        this.name = name
        this.age = age
        this.favoriteToy = string[0]
    }
}

type CachorroSomenteLeitura = {
    +readonly [k in keyof IAnimalDomestico]-?: IAnimalDomestico[k]
}

const cao = new MyDog('bryan', 22)

console.log(cao.favoriteToy)

console.log(felino.executeRoar(23))
console.log(animal2)

interface IEstudante {
    name: string;
    idade: number;
}

interface IEstudante {
    serie: string;
}

const estudante: IEstudante = {
    name: "",
    idade: 0,
    serie: ""
}

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao')
    }
});

$('body').novaFuncao();

interface IPessoa {
    name: string;
    idade: number;
    nacionalidade: string;
}

interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'> {

}

const brasileiro: IBrasileiro = {
    name: '',
    idade: 0
}


interface IPropriets {
    name: string;
    age: number;
    ocupation: string;
    acountType: string;
}

class EmployeeComon implements Omit<IPropriets, 'acountType'>{
    name: string;
    age: number;
    ocupation: string;
    constructor(name: string, age:number, ocupation: string) {
        this.name = name
        this.age = age
        this. ocupation = ocupation
    }


}