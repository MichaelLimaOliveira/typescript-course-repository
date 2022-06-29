const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const inputText = event.currentTarget as HTMLInputElement;
    console.log(input.value);
})

function addElementsInList<T>(array: any[], value:T ) {
    return array.map(item => item + value);
}

addElementsInList([1, 2, 3], 2)
//types
function sum(number1: number, number2: number){ 
   return number1 + number2;
}


console.log(sum(2, 3));

//inteface

interface IUser {
    id: string,
    email: string
}

interface IAdmin extends IUser {
    cargo: 'Super' | 'Cordenador' | 'Supervisor';
}

function redirecione(user: IUser | IAdmin) {
    if ('cargo' in user) {
        // redirecionar para area de adms
    }
    // redirecionar para area de usuarios
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


console.log(felino.executeRoar(23))
console.log(animal2)
