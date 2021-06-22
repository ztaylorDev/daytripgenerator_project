let userInput = prompt("Type Get Going for your trip")

function getRandomFood(restaurants){
    return sourceOfFood;
    
}
    let sourceOfFood = ["moes", "dominoes", "rocos tacos"];
    let food = sourceOfFood[Math.floor(Math.random() * sourceOfFood.length)];
    console.log(food);










// let generatedTransportation = getRandomSelection(transportation);

function getRandomTransportation(vehicle){
    return transportation;
}
    let transportation = ["bus", "train", "plane"];
    let modeOfTranspo = transportation[Math.floor(Math.random() * transportation.length)];
    console.log(modeOfTranspo); 





// let generateddestination = getRandomSelection(destination);

function getRandomDestination(destiny){
    return destination;
}
    let destination = ["hawaii", "tampa", "texas"];
    let randomLocation = destination[Math.floor(Math.random() * destination.length)];
    console.log(randomLocation); 





// let generatedentertainment = getRandomSelection(entertainment);
function getRandomEntertainment(showtime){
    return entertainment;
}
    let entertainment = ["comedy show", "concert", "movie"];
    let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
    console.log(randomEntertainment); 



function getRandomReselection(betterChoice){
    return getRandomReselection;
}

    let randomReselection = ["moes", "dominoes", "rocos tacos"]
    let reselect = randomReselection[Math.floor(Math.random() * randomReselection.length)];
    console.log(reselect);


    
    let userInputTwo = setTimeout(function(){ prompt("Do you like your options")}, 10000);
        if (userInputTwo === "yes"){
            console.log("Enjoy");
        }
        else{
            console.log("press refresh for reselection");
        }
    


  

        























// function getRandomColor(color){
//     return color;
// }

// color = ["purple", "blue", "orange", "black"]
// let getRandomNumber = Math.random() * 4;
// getRandomNumber = Math.floor(getRandomNumber) + 1;
// console.log(getRandomNumber);








