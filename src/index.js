import { choice, remove } from './helpers';
import fruits from './foods';

let fruit = choice(fruits);

console.log(`I'd like a ${fruit} please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let reamining = remove(fruits, fruit);
console.log(`I'm sorry, we're all out. We have ${reamining.length} left.`);
