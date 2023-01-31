let counter = 0;
const button = document.querySelector("button");
const countContainer = document.querySelector(".count");

button.onclick = function () {
    event.target.disabled = true;

    counter = 0;

    const intervalId = setInterval(function () {
        counter++; 
        countContainer.innerHTML = counter;

        if (counter === 7) {
            clearInterval(intervalId);
            button.disabled = false;
        }
    }, 1000);
};