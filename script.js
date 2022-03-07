const result = document.querySelector("#result");
const num = document.querySelectorAll(".num");
const sign = document.querySelectorAll(".sign");
const equal = document.querySelector("#equal");

////////////////////////////functions

equal.addEventListener("click",() => {
    firstNum=operate(firstNum,secondNum,symbol);
    result.innerHTML=firstNum;
    secondNum="";
})

num.forEach(numButton => {
    numButton.addEventListener("click",(e) => {
        if(numSwitch===0){
            firstNum=firstNum+`${e.target.innerHTML}`;
            result.innerHTML=firstNum;
        } else {
            secondNum=secondNum+`${e.target.innerHTML}`;
            result.innerHTML=secondNum;  
        }
    });
});

sign.forEach(signButton => {
    signButton.addEventListener("click", (e) => {
        symbol=`${e.target.innerHTML}`;
        numSwitch=1;
    })
})

function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b){
    if(b!==0) {
        return a/b;
    };
};

function operate(a,b,sign) {
    a=Number(a);
    b=Number(b);
    switch(sign) {
        case "+":
            return add(a,b);
        break;
        case "-":
            return subtract(a,b);
        break;
        case "*":
            return multiply(a,b);
        break;
        case "/":
            return divide(a,b);
        break;
    }
};

numSwitch=0;
symbol="";
firstNum="";
secondNum="";
