// Scopes
// Global Scope - does not override block & function scope variables
const myName = "Eyimofe"

// Block Scope
if (true) {
    const myName = "Eyimofe"
}
console.log(myName)

// Function Scope
const printName = () => {
    const myName = "Eyimofe"
}
console.log(myName)

