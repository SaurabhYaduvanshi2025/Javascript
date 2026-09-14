function SetUsername(username){
    this.username = username
    console.log("called")
}

function createrUser(username,email,password){
    SetUsername.call(this,username)

      this.email = email
      this.password = password
}

const chai = new createrUser("saurabh","saurabh@gmail.com","123456")
console.log(chai)