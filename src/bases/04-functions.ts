
// function greetPerson( name: string ) {
//     return `Hello ${ name }`;
// }

// const greetPerson = (name: string) => {
//     return `Hello ${ name }`;
// }

const greetPerson = (name: string) => `Hello ${ name }`;


// console.log(greetPerson('Rodrigo'));

// const getUser = () => {
//     return {
//         uid: 'ABC-123',
//         username: 'El_Papi1502'

//     }
// }

export const getUser = (uid: string) => ({ uid, username: 'El_Papi1502' });


const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super Fuerza'
    }
]

const hero = heroes.find((hero) => hero.id === 1);

console.log(hero?.id);