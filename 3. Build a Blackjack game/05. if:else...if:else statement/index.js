// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
if (age < 100){
    console.log("Not eligible")
}
// else if exactly 100 -> "Here is your birthday card from the King!"
else if(age === 100){ // Deux signes égaux sont moins stricts, ils ignorent le type
    // de la réponse si elle est juste tandis quâvec 3 égals on autoriserait seulement
    // la condition de la variable number égale à 100 alors que sans, une string "100" passerait
    console.log("Here is your birthday card from the King")
}
// else                -> "Not elegible, you have already gotten one"
else{
    console.log("Not eligible")
}