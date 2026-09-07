const userForm = document.getElementById("userForm");

const username = document.getElementById("username");

const submit = document.getElementById("addUser");




username.addEventListener("input", (e)=>{
    console.log(e.target.value);

})


username.addEventListener("focus", (e)=>{

       console.log("Input field is focused")

})


userForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("Form submitted");
})