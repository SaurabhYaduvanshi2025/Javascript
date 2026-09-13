const promisOne = new Promise(function(resolve, reject) { // create a new promise

    setTimeout(function() {  // simulate an async operation
        console.log('async operation complete'); // this will run after 2 seconds
        resolve(); // resolve the promise after 2 seconds
    },2000);
})

promisOne.then(function() {
    console.log('promise consumed'); // this will run after the promise is resolved
})


new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('async operation complete'); // this will run after 2 seconds
        resolve(); // resolve the promise after 2 seconds
    },2000);


}).then(function(){
    console.log('promise consumed'); // this will run after the promise is resolved
    })


 const promisThree = new Promise(function(resolve,reject){          // in  this line i build promisthree for print user and  email id ,

     setTimeout(function(){
     
        resolve({username: "chai", email:"chaipilo@gmail.com"});

     },1000)


 });

 promisThree.then(function(user){
    console.log(user)
 })



//  const promisFour = new Promise(function(resolve,reject){ 
//     setTimeout(function(){
//         let error = false    
//         if (!error){
//             resolve({username: "Saurabh Yadav", password: "kafir@9899"})
//         }else{
//             reject('Error Something went wrong')
//         }
//     },1000)
//  })


//  promisFour.then((user)=>{
//     return user.username
//  }).then((username)=>{
//     console.log(username)
//  }).catch(function(error){
//       console.log(error)
//  }).finally(()=>console.log("finall")) 




const promisFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
           resolve({username: "Saurabh Yadav", password: "Sau@1234"})
        }else{
            reject('Error: Js Went wrong')
        }
    },2000)
}); 

 async function consumePromiseFive(){
    try{
            const response = await promisFive
    console.log(response)

    } catch(error){
        console.log(error)
    }
 }

 consumePromiseFive()





