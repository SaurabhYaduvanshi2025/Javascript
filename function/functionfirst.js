


// function addtwoNumbers(a, b) {
//     console.log(a + b);

// }

// addtwoNumbers(5, 10);



// function addTwoNumbers(a, b) {
    
//     console.log(a + b);
// }

// const result = addTwoNumbers(5, 10);    

// console.log(result);



function loginUser(username) {
    if(!username ) {
        console.log("Please enter a valid username");
        return;
}
      return `${username} is logging in`;
}

console.log(loginUser(""));