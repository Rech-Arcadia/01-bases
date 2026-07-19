
interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    // power: 'Money'
};

// const {age, codeName, power = 'No tiene poder'} = person; //puede ser un objeto o un arreglo
// console.log({age, codeName, power});

// console.log(person.name);
// console.log(person.age);
// console.log(person.codeName);

interface createHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

const createHero = ({name, age, codeName, power}: createHeroArgs) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

console.log(createHero(person));