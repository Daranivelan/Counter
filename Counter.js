let count = 0;

document.getElementById("Increase").onclick = function()
{
    count += 1;
    document.getElementById("Counter").textContent = count;
}

document.getElementById("Decrease").onclick = function()
{
    count -= 1;
    document.getElementById("Counter").textContent = count;
}

document.getElementById("Reset").onclick = function()
{
    count = 0;
    document.getElementById("Counter").textContent = count;
}