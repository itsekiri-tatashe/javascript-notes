// If Statements

let age = 22
let canDrink = false
if (age < 18) {
    console.log("Child or Teenager")
    canDrink = false
} else {
    console.log("Adult")
    canDrink = true
}

console.log(canDrink)


// Nested If Statements
let drunk = true
if (age < 18) {
    console.log("You can't drink")
} else {
    console.log("Yeah you can drink")
    if (drunk) {
        console.log("You can't drive, order an Uber!")
    } else {
        console.log("You can drive")
    }
}


// If Else If
let score = 90

if (score > 70) {
    console.log("The grade is Excellent")
} 
else if (score > 45 && score < 70) {
    console.log("The grade is Pass")
} else {
    console.log("The grade is Fail")
}