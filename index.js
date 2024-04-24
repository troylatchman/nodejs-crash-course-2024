import getPosts, { getPostsLength } from "./postController.js";
import { generateRandomNumber, celciusToFahrenheit } from "./utils.js";

console.log(`Random Number: ${generateRandomNumber()}`);
console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);

console.log(getPosts());
console.log(`Post length: ${getPostsLength()}`);
