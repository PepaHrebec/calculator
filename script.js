const result = document.querySelector("#result");
const num = document.querySelectorAll(".num");
const sign = document.querySelectorAll(".sign");
const equal = document.querySelector("#equal");
const cancel = document.querySelector("#cancel");
const dot = document.querySelector("#dot");
const undo = document.querySelector("#undo");

////////////////////////////functions

undo.addEventListener("click", () => {
    switch(numSwitch) {
        case 0:
            firstNum=String(firstNum).slice(0,String(firstNum).length-1); 
            result.innerHTML=firstNum;
            if(firstNum===""){
                numSwitch=0;
            }
        break;
        case 1:
            if(secondNum!==""){
                secondNum=String(secondNum).slice(0,String(secondNum).length-1); 
                result.innerHTML=secondNum;   
            } else {
                firstNum=String(firstNum).slice(0,String(firstNum).length-1); 
                result.innerHTML=firstNum;
                if(firstNum===""){
                    numSwitch=0;
                };
            };
        break;
    };        
});

dot.addEventListener("click",() => {
    switch(numSwitch) {
        case 0:
            if(!firstNum.includes(".")) {
                firstNum=firstNum+"."; 
                result.innerHTML=firstNum;    
            };
        break;
        case 1:
            if(!secondNum.includes(".")) {
                secondNum=secondNum+"."; 
                result.innerHTML=secondNum;    
            };
        break;
    };  
});

cancel.addEventListener("click", () => {
    numSwitch=0;
    symbol="";
    firstNum="";
    secondNum="";
    result.innerHTML=firstNum;
});

equal.addEventListener("click",() => {
    if(symbol!==""){
        if(secondNum==0 && symbol==="/") {
            numSwitch=0;
            symbol="";
            firstNum="";
            secondNum="";
            result.innerHTML=""; 
            alert("You can't divide by zero.");    
        } else {
            firstNum=operate(firstNum,secondNum,symbol);
            result.innerHTML=firstNum.toFixed(2);
            secondNum="";
            symbol="";
        }
    };
});

num.forEach(numButton => {
    numButton.addEventListener("click",(e) => {
        if(numSwitch===0){
            firstNum=firstNum+`${e.target.innerHTML}`;
            result.innerHTML=firstNum;
        } else {
            if(firstNum!=="" && symbol==="") {
                numSwitch=0;
                firstNum=`${e.target.innerHTML}`;
                result.innerHTML=firstNum;
            } else {
            secondNum=secondNum+`${e.target.innerHTML}`;
            result.innerHTML=secondNum;  
            };
        };
    });
});

sign.forEach(signButton => {
    signButton.addEventListener("click", (e) => {
        if(secondNum!==""){
            if(secondNum==0 && symbol==="/") {
                numSwitch=0;
                symbol="";
                firstNum="";
                secondNum="";
                result.innerHTML=""; 
                alert("You can't divide by zero.");        
            } else {
                firstNum=operate(firstNum,secondNum,symbol);
                result.innerHTML=firstNum.toFixed(2);
                secondNum="";
            };
        }
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

let numSwitch=0;
let symbol="";
let firstNum="";
let secondNum="";