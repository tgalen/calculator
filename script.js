let pendingNumber = "";
let enteredNumber = "";
screen = document.getElementById("screen");

let selectNumber = (num) => {
    // pendingNumber += num;
    console.log(pendingNumber);
    pendingNumber.length < 9 ? (pendingNumber += num) : (pendingNumber = pendingNumber);
    screen.innerHTML = pendingNumber;
};
