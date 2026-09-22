let calculator = document.getElementById("calculator");

calculator.addEventListener("submit", function(event)
{
    event.preventDefault();

    let left = document.getElementById("left").value;
    let right = document.getElementById("right").value;
    let operator = document.getElementById("operator").value;

    // Check if inputs are positive integers or zero
    if (!/^\d+$/.test(left) || !/^\d+$/.test(right))
    {
        alert("Error :(");
        return;
    }

    left = Number(left);
    right = Number(right);

    // Check for division or modulo by zero
    if (right === 0 && (operator === "/" || operator === "%"))
    {
        alert("It's over 9000!");
        return;
    }

    let result;

    // Perform calculation
    if (operator === "+")
        result = left + right;

    else if (operator === "-")
        result = left - right;

    else if (operator === "*")
        result = left * right;

    else if (operator === "/")
        result = left / right;

    else if (operator === "%")
        result = left % right;

    // Display result
    alert(result);
    console.log(result);
});

// Alert every 30 seconds
setInterval(function()
{
    alert("Please, use me...");
}, 30000);