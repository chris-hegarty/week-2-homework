let time = document.getElementById("time");
let scoreContainer = document.getElementById("score");
let start = document.getElementById("start");
let tiles = document.querySelectorAll(".tile");
//store the countdown clock number in a variable.
//add parseInt because it was rendering as a string instead of a number.
let countdown = parseInt(time.innerHTML);

function mole() {
        // randomly select a div fromo the tiles array at the top
        // store that div in a variable.
    let randomTile = tiles[Math.floor(Math.random() * tiles.length)];
        // add a class to turn it yellow
    randomTile.classList.add("yellow");
    //use setTimeout to remove the class after 2 seconds.
    setTimeout(() => {
        randomTile.classList.remove("yellow");
    }, 2000);
}

//add eventListener to the start button
start.addEventListener("click", () => {
    start.style.display = "none";
    //set an interval of one second
    //decrement it
    //output it to the page
    let runCountdown = setInterval(() => {
        countdown--;
        time.innerHTML = countdown;
            if(countdown == 0){
            clearInterval(runCountdown);
            clearInterval(moleInterval);
            start.style.display = "block";
            time.innerHTML = "20"
        }
    }, 1000); 
    //run the mole function to get the first random tile to turn yellow on and off.
    mole();
    //now have the mole function run every three seconds so there is one second inbetween the two seconds that the tile is yellow.
        let moleInterval = setInterval(() => {
            mole();
    }, 3000);
    //clear the interval at the same time the countdown stops.
});

// set score to zero in a variable
let score = 0;

//Add eventListener to all the tiles.
for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", (e) => {
        // the event target is the clicked box:
        let clickedTile = e.target;
        // if the clicked box has the class "yellow"
        if(clickedTile.classList.contains("yellow")){
            //increment the score
            score++;
            // output the score on the page
            // why doesn't this work?
            // score = scoreContainer.innerHTML;
            // but this does?
            scoreContainer.innerHTML = score;
            // remove the class "yellow" so extra clicks don't raise the score.
            clickedTile.classList.remove("yellow");
        }   
    });
}
