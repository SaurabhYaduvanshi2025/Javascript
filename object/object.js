//Object


const myDetail = Symbol("key1");


const user = {

      name : "Saurabh",
      fullname : "Saurabh yadav",
      [myDetail] : "mykey",
      department : "IT Sector",
      age  : 25,
      location : "New Delhi",
      email : "Test@gmail.com",
      isLoggedIn : false,
}


// console.log(user.fullname);
// console.log(user["name"]);
// console.log(user[myDetail]);

// user.email = "Test@chat.com";
// user.email = "Test@gemini.com"
// console.log(user)


// const number1 = {1:"a", 2:"b", 3:"c"};
// const number2 = {4:"d", 5:"e", 6:"f"};
// const number3 = {7:"g", 8:"h", 9:"i"};

// const allNumbers = Object.assign({}, number1, number2, number3);

// console.log(allNumbers);

// const {department} = user;
// console.log(user);


const data = {
      name : "Saurabh",
      age : 25,
      location : "New Delhi",
      email : "Saurabhyaduvanshi2018@gmail.com",
};                                                             

// Object destructuring is a way to unpack values from arrays or properties from objects into distinct variables. In the provided code snippet, object destructuring is used to extract the `email` property from the `data` object.

// const {email} = data;
// console.log(email);

const {email : myEmail} = data;
console.log(myEmail);