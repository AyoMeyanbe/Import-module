// contain a method greetPerson(name). Import capitalise method from utilities.js to format name in the name variable in the greet.js

//in greet.js import capitalise() from utilities.js to format name variable in the greetPerson() located in greet.js

// in greetPerson('ayo') return "Hello Ayo"
// make a 4th display for this

import { capitalise } from "./utilities.js";

const greetPerson = (name) => {
    return ` Hello ${capitalise(name)}`;
}

export {greetPerson};