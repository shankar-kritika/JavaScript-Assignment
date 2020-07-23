function commiss()
{
    sales = document.getElementById("sales").value;
if(sales>0 && sales<=5000)
{
    reward=0.02*sales;
}

else if(sales>5000 && sales<=10000)
{
    reward=0.05*sales;
}

else if(sales>10000 && sales<=20000)
{
    reward=0.07*sales;
}

else if(sales >20000)
{
    reward=0.1*sales;
}
document.getElementById("result").innerHTML = reward;
}