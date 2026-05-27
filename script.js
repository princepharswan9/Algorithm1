let array = [];
const generateBtn = document.getElementById("generate");
const sizeSlider = document.getElementById("size");

function generateArray() {
    array = [];
    const size = sizeSlider.value;
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 400) + 20);
    }
    renderBars(array);
}

// Simple utility functions to prevent overlapping button clicks
function disableControls() {
    document.querySelectorAll("button, input").forEach(el => el.disabled = true);
}

function enableControls() {
    document.querySelectorAll("button, input").forEach(el => el.disabled = false);
}

generateBtn.addEventListener("click", generateArray);
sizeSlider.addEventListener("input", generateArray);
generateArray();