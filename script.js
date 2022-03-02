let pendingNumber = "";
let enteredNumber = "";
screen = document.getElementById("screen");

let selectNumber = (num) => {
    // pendingNumber += num;
    console.log(pendingNumber);

    pendingNumber.length < 9 ? (pendingNumber += num) : (pendingNumber = pendingNumber);
    screen.innerHTML = parseInt(pendingNumber);
};

let clearScreen = () => {
    pendingNumber = "0";
    screen.innerHTML = parseInt(pendingNumber);
};

let sqrRoot = () => {
    num = parseInt(screen.innerHTML);
    console.log(num);
    screen.innerHTML = Math.sqrt(num).toFixed(9);
};
