const promisOne = new Promise(function(resolve, reject) { // create a new promise

    setTimeout(function() {  // simulate an async operation
        console.log('async operation complete'); // this will run after 2 seconds
        resolve(); // resolve the promise after 2 seconds
    },2000);
})

promisOne.then(function() {
    console.log('promise consumed'); // this will run after the promise is resolved
})