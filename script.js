//DOM
const clickHeading = document.getElementById("click-heading");
const clickBtn = document.getElementById("click-btn");

//Game variables
let clicks = 0;

//Event Listener
clickBtn.addEventListener("click", function () {
    clicks +=1;
    clickHeading.innerHTML = `Clicks: ${clicks}`
})