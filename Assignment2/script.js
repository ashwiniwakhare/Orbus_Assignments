function calculate(operation) {

    let a = parseFloat(document.getElementById("first_num").value);
    let b = parseFloat(document.getElementById("second_num").value);

    let result = "";

    if (operation === "add") {
        result = a + b;
    }
    else if (operation === "minus") {
        result = a - b;
    }
    else if (operation === "multiply") {
        result = a * b;
    }
    else if (operation === "divide") {
        if (b === 0) {
            result = "Cannot divide by zero";
        } else {
            result = a / b;
        }
    }

    document.getElementById("result").innerHTML = result;
}