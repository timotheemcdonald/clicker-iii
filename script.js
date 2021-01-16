//DOM
const clickHeading = document.getElementById("click-heading");
const autoHeading = document.getElementById("auto-heading");
const clickBtn = document.getElementById("click-btn");
const autoClick = document.getElementById("auto-click");

//Game variables
let clicks = 0;
let cost = 5;
let clicksPerSecond = 0;
let autoClickerAmount = 0;

//Event Listener
clickBtn.addEventListener("click", function () {
    clicks +=1;
    clickHeading.innerHTML = `Clicks: ${clicks}`
})

autoClick.addEventListener("click", () => {
    if(clicks >= cost) {
        clicks -= cost;
        clicksPerSecond +=1;
        autoClickerAmount +=1;
    } 
})

//function
function autoClicker(){
    clicks += clicksPerSecond
}

window.setInterval(function(){
    autoClicker();
    clickHeading.innerHTML = `Clicks: ${clicks}`;
    autoHeading.innerHTML = `Clicks per Second: ${autoClickerAmount}`;
}, 1000)