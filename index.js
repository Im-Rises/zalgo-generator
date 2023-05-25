import {zalgoGeneration, zalgoRandomGeneration, unzalgoText} from './src/zalgo-generator.js';

console.log(zalgoGeneration('Hello World!'));
const zalgoText = zalgoRandomGeneration('Zalgo text!', 10);
console.log(zalgoText);
console.log(unzalgoText(zalgoText));
