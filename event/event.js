```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Event Practice</title>
</head>
<body>

    <h1>User Manager</h1>

    <form id="userForm">

        <input
            type="text"
            id="username"
            placeholder="Enter username"
        >

        <button type="submit" id="addUser">
            Add User
        </button>

    </form>

    <p id="message"></p>

    <h2>Users</h2>

    <ul id="userList">

        <li>
            Saurabh
            <button class="deleteBtn">Delete</button>
        </li>

        <li>
            Rahul
            <button class="deleteBtn">Delete</button>
        </li>

        <li>
            Amit
            <button class="deleteBtn">Delete</button>
        </li>

    </ul>

    <script src="script.js"></script>

</body>
</html>
```
