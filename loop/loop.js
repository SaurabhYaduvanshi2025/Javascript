// const array = ["Hero","bajaj","Royal Enfield", "TVS"];


// for(const arrays of array ){

    
//     console.log(arrays);
// }



// const number = [1,2,3,4,5,6,7,8,9]



// for(num of number){
//     console.log(num)
// }



// Maps practice Sessions start from here


// const map = new Map()

// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('fr',"France")


// console.log(map)




// const map = new Map()

// map.set('UK' ,"Uttara Khand")
// map.set('UP', "Uttar Pradesh")
// map.set('DEL', "Delhi")



// console.log (map)



// for(const [key,value] of map){

//     console.log(key, "=", value)

// }


// Array practice done in loop and map now this time for object


// const myObject = {
//     js : 'Javascript',
//     cpp : 'C++',
//      py : 'Python'
// }


// for (const key in myObject){
//     console.log(`${myObject[key]}`)
// }




// for each loop with example

    // const coding = ["Javascript","C++", "Php","react"];


    // coding.forEach(function(value){
    //     console.log(value)
    // });



    // const myArray = ["Bike", "car", "Train", "Air Flight"];

    // myArray.forEach(function(myArray){
    //            console.log(myArray)
    // })


    // Array ke ander Object ki practice with  for each loop



    const myCoding = [
        {
            LanguageName : "Javascript",
            ShortForm : "Js"
        },

        {

            LanguageName : "Python",
            ShortForm    : "py"
        },

        {
            LanguageName : "PHP",
            ShortForm    : "php"
        }
    ]



    myCoding.forEach((Value) => {
        console.log(Value.ShortForm);
    })