//types
function sum(number1: number, number2: number){ 
   return number1 + number2;
}


console.log(sum(2, 3));

//inteface

interface IAnimal {
    name: string;
    type: 'terrestre' | 'aquático' | 'voador';
    executeRoar(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    name: 'Elefante',
    type: 'terrestre',
    executeRoar: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

const felino: IFelino = {
    visaoNoturna: true,
    name: 'leão',
    type: "terrestre",
    executeRoar: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

console.log(felino.executeRoar(23))
