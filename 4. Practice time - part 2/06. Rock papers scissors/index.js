let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function randomItem(){
    return hands[Math.floor(Math.random() * 3)]
}

for(i = 0; i < 10; ++i){
    console.log(randomItem())
}