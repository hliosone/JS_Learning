let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(){
    myPoints += 3
}

function remove1Point(){
    --myPoints
}

// Call the functions to that the line below logs out 10
while(myPoints < 10){
    add3Points()
}
while(myPoints > 10){
    remove1Point()
}

console.log(myPoints)