// Conditional Statments
const age = 18

//  If
if (age > 18) {
    console.log("You can drive")
}

// If - else
if (age > 18) {
    console.log("You can drive")
} else {
    console.log("You can't drive")
}

// if else if

if (age > 18) {
    console.log("You can drive")
} else if (age === 18){
    console.log("Yeah you can drive")
}
 else {
    console.log("You can't drive")
}


// Switch Statements
const color = "red"

switch (color) {
    case "red":
        console.log("Color is red")
        break;
    case "blue":
        console.log("Color is blue")
        break;
    case "green":
        console.log("Color is green")
        break;
    default:
        console.log("Not a valid color")
}