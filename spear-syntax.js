// Objects

const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60, defence: 45 };

// Bad Object Code
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defence'] = stats.defence;

// OR
const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, { hp: 45 });

// Good Object Code
const lvl2 = { ...pikachu, ...stats };
const lvl3 = { ...pikachu, hp: 45 };

console.log({ lvl2, lvl3 });

// Arrays
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

// Bad Array Code
// pokemon.push('Bulbasaur');
// pokemon.push('Metapod');
// pokemon.push('Weedle');

// Good Array Code
// Push
// pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];
// console.table(pokemon);

// Unshift
// pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon];
// console.table(pokemon);
pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle'];
console.table(pokemon);
