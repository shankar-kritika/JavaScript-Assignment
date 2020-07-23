function addTwo()
{
    
        num1 = Number(document.getElementById("firstNumber").value);
        num2 = Number(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1+num2;
}

function subtractTwo() 
{ 
        num1 = Number(document.getElementById("firstNumber").value);
        num2 = Number(document.getElementById("secondNumber").value);
        document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        
        document.getElementById("result").innerHTML = num1*num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1/num2;
}

function squareRoot() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = Math.sqrt(num1)+ " & " + Math.sqrt(num2);
}

function percentage() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = (num1/num2)*100+"%";
}