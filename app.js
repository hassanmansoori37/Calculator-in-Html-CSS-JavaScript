let display = document.getElementById("display");

// number + operator dono add honge
function append(value) {
    if (display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// clear all
function clearDisplay() {
    display.textContent = "0";
}

// last character delete
function deleteLast() {
    let current = display.textContent;

    if (current.length === 1) {
        display.textContent = "0";
    } else {
        display.textContent = current.slice(0, -1);
    }
}

// calculate result
function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
}