// Tehtävä 1

// Määritellään tarvittavat vakiot
const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");
// Bonus nappulat
const addTextButton = document.querySelector("#addTextButton");
const changeBackgroundButton = document.querySelector("#changeBackgroundButton");


// Muokataan otsikkoa, kun nappia painetaan.
changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

// Muokataan tyyliä, kun nappia painetaan.
changeStyleButton.addEventListener("click", function () {
    taskOneHeading.classList.toggle("highlight");
});

// Muokataan tekstiä, kun nappia painetaan.
changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Elefanteilla on kärsä, jossa voi olla lähes 100 000 lihasta.";
});

// Bonus: Lisätään tekstiä eläintekstin loppuun poistamatta alkuperäistä.
addTextButton.addEventListener("click", function () {
    const alkuperainen = animalText.textContent;
    animalText.textContent = alkuperainen + " Savanninnorsu-uros voi painaa jopa 7000 kiloa.";
});

// Bonus: Vaihdetaan sivun taustaväriä.
changeBackgroundButton.addEventListener("click", function () {
    const siteBackground = document.body;
    siteBackground.style.backgroundColor = "grey";
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");
});
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE



// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.
animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;
    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textcontent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikereillä on valesilmät korvissaan.";
    }
});

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT



// listener for the select element from the drop down list.



    // function to update the DOM based on the selected animal
