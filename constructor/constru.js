// class User {
//     constructor(username,email,password){   //
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

          
// encryptPassword(){
//     return `${this.password}abc`
// }

// ChangeUsername(){ 
//     return `${this.username.toUpperCase()}`
// }

// ChangeEmail(){
//     return `${this.email}`  
// }

// }


// const chai =  new User("saurabh", "saurabh@gmail.com", "12345");
// console.log(chai.encryptPassword())
// console.log(chai.ChangeUsername())
// console.log(chai.ChangeEmail())



// function User ( username,email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }


// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`

// }

// User.prototype.email = function(){
//     return `${this.email}`
// }


// const tea = new User("Tea", "test@gmail.com","123456")

// console.log(tea.encryptPassword());
// console.log(tea.username)

class User {
    constructor(username){
        this.username = username
    }
}

class Teacher extends User{
    constructor(username,email,passwords){
          super(username)
          this.email = email
          this.passwords = passwords

    }

    addCourse(){
    console.log(`A New Course was added by ${this.username}`)
}
}

const random = new Teacher("saurabh", "saurabh@gmail.com","1234")

random.addCourse()

const Pani =  new User("pani")

console.log(Pani.username)





