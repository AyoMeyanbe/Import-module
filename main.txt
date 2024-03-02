import { capitalise, roundToDecimalPlace} from "./utilities.js";
import {greetPerson} from "./greet.js";

function display(name, amount) {
    return `${capitalise(name)}, your total amount is : ${roundToDecimalPlace(amount)};`;
}

const display1 = document.getElementById('display1');
display1.innerText = capitalise("hello");

const display2 = document.getElementById('display2');
display2.innerText = roundToDecimalPlace(45.767676767677);

const display3 = document.getElementById('display3');
display3.innerText = display("ayo", '8900.9797987');

const display4 = document.getElementById('display4');
display4.innerText = greetPerson("ayodimeji");