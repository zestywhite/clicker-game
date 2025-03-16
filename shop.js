// Load data
let clickCount = parseInt(localStorage.getItem("clickCount")) || 0;
let clickPower = parseInt(localStorage.getItem("clickPower")) || 1;

document.getElementById("clickCount").textContent = clickCount;

// Buy Upgrade
document.getElementById("buyUpgrade").addEventListener("click", function () {
    if (clickCount >= 50) {
        clickCount -= 50;
        clickPower++;

        localStorage.setItem("clickCount", clickCount);
        localStorage.setItem("clickPower", clickPower);

        document.getElementById("clickCount").textContent = clickCount;
    }
});
