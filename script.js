let pendingNumber = "";
let enteredNumber = "";
screen = document.getElementById("screen");

let filterString = (numStr) => {
    // filter out leading 0
    let strToNum = parseInt(numStr);
    console.log(strToNum);
    let numToStr = strToNum.toString();
    console.log(numToStr);
    return numToStr;
};

console.log(filterString("999"));

let selectNumber = (num) => {
    pendingNumber.length > 0 ? (pendingNumber = filterString(pendingNumber)) : (pendingNumber = pendingNumber); // prevent an empty string being converted to a nunmber

    if (pendingNumber.includes(".") && num === ".") {
        pendingNumber += "";
    } else if (pendingNumber.length < 10) {
        pendingNumber += num;
    } else {
        pendingNumber = pendingNumber;
    }
    pendingNumberToInt = parseInt(pendingNumber);
    screen.innerHTML = pendingNumberToInt;
    console.log(pendingNumber);
    console.log(pendingNumberToInt);
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
