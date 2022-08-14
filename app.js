const value1 = (Math.floor(Math.random() * 10));
const value2 = (Math.floor(Math.random() * 10));

const formEle = document.getElementById("form");
const Qvalue1 = document.getElementById("multiply");
const inputEle = document.getElementById("input");
const scorevale = document.getElementById("score");


Qvalue1.innerText = `What is ${value1} multiply by ${value2} ?`;

const answer = value1 * value2;

let result = JSON.parse(localStorage.getItem("result"));
scorevale.innerText = `Score: ${result}`;

formEle.addEventListener("submit", () => {
    const userAnswer = +inputEle.value;
    if (userAnswer === answer) {
        result = result + 1;
        updateLocalStorage();
    } else {
        result = result - 1;
        updateLocalStorage();
    }
});
// if there is no score set the value to zero
if (!result) {
    result = 0;
};

function updateLocalStorage() {
    localStorage.setItem("result", JSON.stringify(result));
};