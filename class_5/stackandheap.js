// ***************************************************************************
// Stack and Heap in JavaScript
// ***************************************************************************

// Stack and Heap are two types of memory used in programming languages like JavaScript. Understanding how they work can help you write more efficient code and avoid common pitfalls.
            
// Stack:(Primitives) (int , string, boolean , float , double, null, undefined) , Heap : (Non-Primitives) (objects, arrays, functions)


let myYoutubename = "histeshchoudharydotcom";

let anotherYoutubename = myYoutubename;

anotherYoutubename = "chaiorcode";

console.log(myYoutubename); // Output: histeshchoudharydotcom
console.log(anotherYoutubename); // Output: chaiorcode



let userOne = {
    name: "histesh",
    age: 22 ,
}

let usertwo=userOne;

usertwo.name="choudhary";

console.log(userOne.name); // Output: choudhary
console.log(usertwo.name); // Output: choudhary