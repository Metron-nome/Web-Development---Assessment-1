// This is where the entire calulcation happens
function calculateTotalCost() { // This function is defined to calculate the cost of the petrol
    
    const petrolCost = parseFloat(document.getElementById("petrolCost").value);
    // This is getting the valeu of petrol per liter
   
    const litersPurchased = parseFloat(document.getElementById("litersPurchased").value);
    // This is where the user inputs how many liters they purchased
   
    const totalCost = petrolCost * litersPurchased;
    // And this is where the calculation happens
    
    document.getElementById("Cost").innerText = `Total Cost: $ ${totalCost.toFixed(2)}`;
} //This displays the total cost of the petrol

var promise = document.querySelector('audio').play();

// This code just allows the browser to actually autoplay the audio
if (promise !== undefined) {
    promise.then(_ => {
       
    }).catch(error => {
        
        
    });
}


document.getElementById("calculateButton").addEventListener("click", calculateTotalCost);

document.getElementById('PlayAudioButton').addEventListener('click', function() {
    const audio = document.getElementById('BackgroundMusic');
    audio.play();
});
