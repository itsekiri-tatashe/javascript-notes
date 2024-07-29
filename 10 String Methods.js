// String Methods - Allows you to manipulate and work with strings

let username = "Anirejuoritse"

// Get Character by Index
console.log(username.charAt(3))

// Get Index by First Character
console.log(username.indexOf("e"))

// Get Index by Last Character
console.log(username.lastIndexOf("e"))

// Get Length of String
console.log(username.length)

// Remove extra space
username = "   Anirejuoritse       "
username = username.trim()
console.log(username)
 
// Convert to Upper case
console.log(username.toUpperCase())

// Convert to Lower Case
console.log(username.toLowerCase())

// Repeats the string accorsing to the number in  the parameter
console.log(username.repeat(3))

let phoneNumber = "123-456-7890"

// Checks whether the string starts with something
console.log(phoneNumber.startsWith("12"))

// Checks whether the string includes something
console.log(phoneNumber.includes("54"))

// Replaces all stated strings with string
console.log(phoneNumber.replaceAll("-", ""))

// String Slicing
console.log(username.slice(0, 5))