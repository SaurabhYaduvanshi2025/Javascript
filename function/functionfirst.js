


// function addtwoNumbers(a, b) {
//     console.log(a + b);

// }

// addtwoNumbers(5, 10);



// function addTwoNumbers(a, b) {         // The function `addTwoNumbers` takes two parameters `a` and `b`, adds them together, and returns the result. In this case, it will return the sum of `5` and `10`, which is `15`.
    
//     console.log(a + b);                     
// }

// const result = addTwoNumbers(5, 10);    

// console.log(result);



// function loginUser(username) {          // The function `loginUser` takes a parameter `username` and checks if it is provided. If not, it logs a message asking for a valid username and returns. If a username is provided, it returns a string indicating that the user is logging in. In this case, since an empty string is passed, it will log "Please enter a valid username" and return undefined.
//     if(!username ) {
//         console.log("Please enter a valid username");
//         return;
// }
//       return `${username} is logging in`;
// }

// console.log(loginUser(""));



// function calculateCartPrice(val1, val2, ...rest) {   // Rest operator is used to collect all the remaining arguments passed to the function into an array called `rest`. In this case, it collects all the values after `val1` and `val2` into the `rest` array.

//      return rest;

// }

// console.log(calculateCartPrice(100, 200, 300, 400, 500, 600, 700, 800, 900));


// const user = {
//     name :  "Saurabh",
//     age : 25,
//     location : "New Delhi",
//     email : "Saurabhyaduvanshi@gmail.com"
// }


// function userDetails(details) {
//     console.log(`Name: is ${details.name} and age is ${details.age} and location is ${details.location} and email is ${details.email}`);
// }

// console.log(userDetails(user));



const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getNewArray(array){      // The function `getNewArray` takes an array as an argument and returns the element at index 2 of that array. In this case, it will return the value `3`, which is the third element in the `newArray`.
    return array[2];
}

console.log(getNewArray(newArray));