function defineConstants(){
    const name = "Maria";
    const lastname = "Olsson";
    const country = "Sweden";
    const num = 11;
    const num2 = 36;

    console.log("Define constants");
    console.log(name, lastname, country, num, num2);
}

function addNumbers(a,b){
 return a + b;
}

function printMessage(){
    console.log("This is message from a function")
}

function getMessage() {
    return "Hello World";
}

function mainFunction() {
    defineConstants();

    let result = addNumbers(11,36);
    console.log("Sum of numbers:", result);

    printMessage();

    let message = getMessage();
    console.log(message);
}

mainFunction();



const defineConstant = () => {
    const name = "Joe";
    const lastname = "Tavolta";
    const country = "China";
    const age = 56;
    const weight = 80;

    console.log("Defined constants:");
    console.log(name, lastname, country, age, weight)
}

const addNum = (a,b) => a+b;

const printMess = () => console.log("Message arrow function");

const getMess = () => "Hello World";

const mainFunc = () => {
    defineConstant();

    let result = addNum(23,45);
    console.log("Sum of numbers:", result);

    printMess();

    let mess = getMess();
    console.log(mess);
};

mainFunc();

function delayFunction() {
    setTimeout(() => {
    console.log("Function was delayed")
     }, 2000)
    }

    const delayedMessage = (millisecondsDelay, message) => {
        setTimeout(() => {
            console.log(message);
        }, millisecondsDelay);
    };
    
   
    delayedMessage(2000, "Hello after 2 seconds!");
    
