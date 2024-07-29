// Accepting User Input

// 1. Using window prompt
// let username = window.prompt("What is your username?")

// console.log(username)

// 2. Using a form
let username
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value
    console.log(username)

    // Changing H1 tag
    document.getElementById("myH1").textContent = `Hello ${username}`
}