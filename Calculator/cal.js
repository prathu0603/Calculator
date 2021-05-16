
function dis(val)
{   
   
    document.getElementById("display").innerText += val;
}

function solve()
{
    let x = document.getElementById("display").innerText;
    let y = eval(x)
    document.getElementById("result").innerText = y
}

function clr()
{
    document.getElementById("display").innerText = "";
    document.getElementById("result").innerText = ""
}

function clrone()
{
    document.getElementById("display").innerText = document.getElementById("display").innerText.toString().slice(0,-1);

}