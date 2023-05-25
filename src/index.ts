import {zalgoGeneration, zalgoRandomGeneration, unzalgoText} from './zalgo-generator';

console.log('Zalgo hello world! : ', zalgoGeneration('Zalgo hello world!', 1, 1, 1), '\n');

const zalgoText = zalgoRandomGeneration('Zalgo text!', 3);

console.log('Random zalgo text : ', zalgoText, '\n');

console.log('Unzalgo Zalgo text! : ', unzalgoText(zalgoText), '\n');
