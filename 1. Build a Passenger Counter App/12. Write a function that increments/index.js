let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
function nextLap(){
    ++lapsCompleted
}
// Run it three times

for (i = 0; i < 3; ++i){
    nextLap()
}


console.log(lapsCompleted)