// WORKSHOP 03 - JavaScript Events

// EX1: Basic click events -> HTML events and function calls

function showTable() {
    //Animal types
    const animal1 = "Tiger";
    const animal2 = "Elephant";
    //Habitats
    const habitat1 = "Forest";
    const habitat2 = "Savanna";
    //Diets
    const diet1 = "Carnivore";
    const diet2 = "Herbivore";
    
    // HTML Table structure
    const animalTable = `
     <table class="display">
            <thead>
                <tr>
                    <th>Animal</th>
                    <th>Habitat</th>
                    <th>Diet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal1}</td>
                    <td>${habitat1}</td>
                    <td>${diet1}</td>
                </tr>
                <tr>
                    <td>${animal2}</td>
                    <td>${habitat2}</td>
                    <td>${diet2}</td>
                </tr>
            </tbody>
        </table>
    `;
       
    // Locating the element with the id "tableContainer" and inserting the HTML table into it.
    const container = document.querySelector("#tableContainer");
    container.innerHTML = animalTable;
} 

// EX2: Hover and clicks -> addEventListener and DOM manipulation

//Add a mouse over event to the "Exercise 2" heading. Print "Stepped over me with a mouse!" to the console.
const ex2heading = document.getElementById("ex2heading");
ex2heading.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!")
});

//Dynamically add a click event to the "Excercise 1" heading using the addEventListener() method. 
const ex1heading = document.querySelector("h2");
// Change the heading colour to red and its text to "Bye bye mouse!"
ex1heading.addEventListener("click", function() {
    ex1heading.textContent = "Bye bye mouse!"
    ex1heading.style.color = "red";
});

// EX3: Input events -> focus / blur / input / character counter / live preview

// 1. Focus event; when user clicks the feedback textarea. 

const feedbackTextarea = document.getElementById("feedback");
const statusSpan = document.getElementById("status");

feedbackTextarea.addEventListener("focus", function() {
    statusSpan.textContent = "Writing feedback...";
    feedbackTextarea.style.backgroundColor = "lightgrey";
});

// 2. Blur event; when the textarea loses focus.

feedbackTextarea.addEventListener("blur", function() {
    statusSpan.textContent = "";
    feedbackTextarea.style.background = "";
});

// 3. Input event; when something is written to the textarea.

const charCount = document.getElementById("charcount");
const previewDiv = document.getElementById("preview");

feedbackTextarea.addEventListener("input", function() {
    const currentLength = feedbackTextarea.value.length;
    charCount.textContent = `${currentLength}/200`;
    if (feedbackTextarea.value.trim() === "") {
        previewDiv.textContent = "(The preview will appear here)";
    }
    else {
        previewDiv.textContent = feedbackTextarea.value;
    }
});

// EX4: Form submission -> submit / preventDefault / simple validation

const feedbackForm = document.getElementById("feedbackForm");
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const currentLength = feedbackTextarea.value.length;
    if (currentLength <= 200 && currentLength >= 10) {
        console.log("Current feedback is of appropriate length.");
        feedbackTextarea.value = "";
        statusSpan.textContent = "Thank you for your feedback!";
    }
    else {
        console.error("Current feedback length is invalid.");
        statusSpan.textContent = "(Error! Valid feedback length is 10-200 characters.)";
    }
});
// EX5: Keyboard listening -> Using the event object
let keyPresses = 0;
document.addEventListener("keydown", function(event) {
    //Keydown-events in console.
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);
    const keyInfo = document.getElementById("keyinfo");
    keyInfo.textContent = event.key;
    keyInfo.textContent = event.code;
    //Display the pressed key input in the keybox element.
    const keyBox = document.getElementById("keybox");
    keyBox.textContent = event.key;
    //Since spacebar displays as empty, replace it with the string "Space".
    keyBox.textContent = event.key === " " ? "Space" : event.key; 
    keyBox.style.fontSize = "3em";
    keyBox.style.textAlign = "center";
    
    //Bonus Excercies
    
    // Count keypresses; add 1 per keydown event.
    keyPresses++;

    // Bonus: Show Ctrl, Alt or Shift, if pressed
    const modifierKeys = [];
    if (event.shiftKey) modifierKeys.push("Shift");
    if (event.ctrlKey) modifierKeys.push("Ctrl");
    if (event.altKey) modifierKeys.push("Alt");
    const modifiersText = modifierKeys.length > 0 ? modifierKeys.join(" + ") : "Not pressed";

    // Bonus: Change the background colour (light shades)
    const r = Math.floor(Math.random() * 56) + 200;
    const g = Math.floor(Math.random() * 56) + 200;
    const b = Math.floor(Math.random() * 56) + 200;
    keyBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    // Bonus: Showing the results in HTML
    keyInfo.innerHTML = `
    <b>Button (event.key):</b> ${event.key}<br>
    <b>Code (event.code):</b> ${event.code}<br>
    <b>Bonus:</b><br>
    Keypress total: ${keyPresses}<br>
    Modifier keys: ${modifiersText}
    `;

});

// Bonus EX: Google Maps + Geolocation API -> External web APIs

navigator.geolocation.getCurrentPosition(
    (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log("Latitude:", lat);
        console.log("Longitude:", lon);

        const url = `https://www.google.com/maps?q=${lat},${lon}`;
        window.location.href = url;    
    },
    (error) => {
        console.log("Could not get the location:", error.message);
        alert("Location search failed: " + error.message);
    }
);
