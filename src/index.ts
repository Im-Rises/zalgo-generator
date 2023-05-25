import {zalgoGeneration, zalgoRandomGeneration, unzalgoText} from './zalgo-generator';

console.log(zalgoGeneration('Hello World!', 10, 10, 10));
const zalgoText = zalgoRandomGeneration('Zalgo text!', 10);
console.log(zalgoText);
console.log(unzalgoText(zalgoText));
