// const userForm = document.getElementById("userForm");

// const username = document.getElementById("username");

// const submit = document.getElementById("addUser");




// username.addEventListener("input", (e)=>{
//     console.log(e.target.value);

// })


// username.addEventListener("focus", (e)=>{

//        console.log("Input field is focused")

// })


// userForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log("Form submitted");
// })

// eevent bubbling and capturing

const userForm = document.getElementById("userForm");
const username = document.getElementById("username");
const userList = document.getElementById("userList");

username.addEventListener("input", (e) => {
    console.log(e.target.value);
});

username.addEventListener("focus", () => {
    console.log("Input field is focused");
});

userForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = username.value;

    const li = document.createElement("li");

    li.textContent = name;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    li.append(deleteBtn);

    userList.append(li);

    username.value = "";
});