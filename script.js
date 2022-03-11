let pendingNumber = "0";
let enteredNumber = "";
localStorage.removeItem("operator");
localStorage.setItem("firstNumber", 0);
screen = document.getElementById("screen");
const add = document.getElementById("+");
const subtract = document.getElementById("-");
const multiply = document.getElementById("x");
const divide = document.getElementById("/");
screen.innerHTML = pendingNumber;

let filterString = (numStr) => {
    // filter out leading 0
    if (numStr[numStr.length - 1] === ".") {
        return numStr;
    } else {
        let strToNum = parseFloat(numStr);
        let numToStr = strToNum.toString();
        return numToStr;
    }
};

let selectNumber = (num) => {
    if (localStorage.getItem("operator")) {
        // pendingNumber = "";
        pendingNumber.length > 0 ? (pendingNumber = filterString(pendingNumber)) : (pendingNumber = pendingNumber); // prevent an empty string being converted to a nunmber
        if (pendingNumber.includes(".") && num === ".") {
            pendingNumber += "";
        } else if (pendingNumber.length < 10) {
            pendingNumber += num;
        } else {
            pendingNumber = pendingNumber;
        }
        // pendingNumberToInt = parseInt(pendingNumber);
        screen.innerHTML = parseFloat(pendingNumber);

        localStorage.setItem("secondNumber", pendingNumber);
    } else {
        pendingNumber.length > 0 ? (pendingNumber = filterString(pendingNumber)) : (pendingNumber = pendingNumber); // prevent an empty string being converted to a nunmber
        if (pendingNumber.includes(".") && num === ".") {
            pendingNumber += "";
        } else if (pendingNumber.length < 10) {
            pendingNumber += num;
        } else {
            pendingNumber = pendingNumber;
        }
        // pendingNumberToInt = parseInt(pendingNumber);
        screen.innerHTML = parseFloat(pendingNumber);

        localStorage.setItem("firstNumber", pendingNumber);
    }
};

let clearScreen = () => {
    pendingNumber = "0";
    screen.innerHTML = parseInt(pendingNumber);
    console.log(pendingNumber);
    localStorage.setItem("firstNumber", pendingNumber);
    localStorage.removeItem("operator");
    localStorage.removeItem("secondNumber");
};

let sqrRoot = () => {
    num = parseFloat(screen.innerHTML);
    console.log(num);
    screen.innerHTML = Math.sqrt(num).toFixed(9); // need to eliminate trailing 0's
};

let saveSelectedOperation = (operator) => {
    localStorage.setItem("operator", operator);
    pendingNumber = "0";
};

let equals = () => {
    let num1 = parseFloat(localStorage.getItem("firstNumber"));
    let num2 = parseFloat(localStorage.getItem("secondNumber"));
    let result;
    if (localStorage.getItem("operator") === "*") {
        result = num1 * num2;
    } else if (localStorage.getItem("operator") === "/") {
        result = num1 / num2;
    } else if (localStorage.getItem("operator") === "+") {
        result = num1 + num2;
    } else {
        result = num1 - num2;
    }
    screen.innerHTML = result;

    localStorage.removeItem("operator");
    localStorage.setItem("firstNumber", result);
    localStorage.removeItem("secondNumber");
    pendingNumber = "";
};

let getPercent = () => {
    if (localStorage.getItem("secondNumber") == null) {
        localStorage.setItem("firstNumber", parseFloat(localStorage.getItem("firstNumber")) / 100);
        screen.innerHTML = localStorage.getItem("firstNumber");
    } else {
        localStorage.setItem("secondNumber", parseFloat(localStorage.getItem("secondNumber")) / 100);
        screen.innerHTML = localStorage.getItem("secondNumber");
    }
};
