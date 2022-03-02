let pendingNumber = "";
let enteredNumber = "";
screen = document.getElementById("screen");

let selectNumber = (num) => {
    // pendingNumber += num;
    if (pendingNumber.includes(".") && num === ".") {
        pendingNumber += "";
    }
    pendingNumber.length < 10 ? (pendingNumber += num) : (pendingNumber = pendingNumber);
    screen.innerHTML = parseInt(pendingNumber);
    console.log(pendingNumber);
};

let clearScreen = () => {
    pendingNumber = "0";
    screen.innerHTML = parseInt(pendingNumber);
};

let sqrRoot = () => {
    num = parseInt(screen.innerHTML);
    console.log(num);
    screen.innerHTML = Math.sqrt(num).toFixed(9); // need to eliminate trailing 0's
};

let operator = () => {};
