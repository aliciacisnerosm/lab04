
var input =  "";
var result = 0;


document.getElementById("addButton").addEventListener('click', (event) =>{
    input +=  document.getElementsByClassName("inputNumber")[0].value;
    input += "+";
    document.getElementsByClassName("inputNumber")[0].value = "";
});

document.getElementById("substractButton").addEventListener('click', (event) =>{
    input +=  document.getElementsByClassName("inputNumber")[0].value;
    input += "-";
    document.getElementsByClassName("inputNumber")[0].value = "";
});

document.getElementById("multiplicationButton").addEventListener('click', (event) =>{
    input +=  document.getElementsByClassName("inputNumber")[0].value;
    input += "*";
    document.getElementsByClassName("inputNumber")[0].value = "";
});

document.getElementById("divisionButton").addEventListener('click', (event) =>{
    input +=  document.getElementsByClassName("inputNumber")[0].value;
    input += "/";
    document.getElementsByClassName("inputNumber")[0].value = "";
});

document.getElementsByClassName("resetButton")[0].addEventListener('click', (event) =>{
    input = "";
    document.getElementsByClassName("inputNumber")[0].value = input;
    document.getElementById("resultValue").value = "";
    document.getElementsByClassName("inputNumber")[0].value = "";
    document.getElementById("logInformation").value += input;

});

document.getElementsByClassName("equalButton")[0].addEventListener('click', (event) => {
    input +=  document.getElementsByClassName("inputNumber")[0].value;
    input.replace(/\s/g, "");
    result = eval(input);
    document.getElementById("resultValue").value = result;
    input = input + " = " + result + "\n";
    document.getElementById("logInformation").value += input;
    document.getElementsByClassName("inputNumber")[0].value = "";
    input = "";
    
});


