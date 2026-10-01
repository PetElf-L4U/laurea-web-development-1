// Tehtävä 1: Sisällön muuttaminen

//const { createElement } = require("react");

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


// Tehtävä 2: Elementtien luominen JavaScriptillä ==========================

// 1. Valitaan "animalContent-elementti"
const animalContentDiv = document.getElementById("animalContent");

// 2. Päivän eläin -otsikko-elementin liittäminen. 
const h3 = document.createElement("h3");
animalContentDiv.append(h3);
h3.append("Päivän eläin.");
h3.classList.add("animal-heading"); // 6. Lisätään otsikolle CSS-luokka "animal-heading"

// 3. Tekstikappaleen liittäminen.
const p1 = document.createElement("p");
animalContentDiv.append(p1);
p1.append("Tiikerit ovat uhanalaisia kissaeläimiä. Ne kuuluvat Panthera-sukuun ja elävät enimmäkseen trooppisissa sademetsissä, Itä- ja Kaakkois-Aasiassa.");

// 4. Kuvan liittäminen.
const img = document.createElement("img");
img.src = "images/tiger.png";
img.alt = "A tiger.";
animalContentDiv.append(img);
// Lisätään nappuloille toiminnallisuudet.
const hideAnimalButton = document.getElementById("hideAnimalButton");
hideAnimalButton.addEventListener("click", function() {
    animalContentDiv.hidden = true;
});
const showAnimalButton = document.getElementById("showAnimalButton");
showAnimalButton.addEventListener("click", function() {
    animalContentDiv.hidden = false;
});


// Tehtävä 3: Eläimen valitseminen ================================================

// Muuta valinnan perusteella alasvetovalikosta eläimen nimi, kuva ja kuvausteksti.

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");
// Lisätään alasvetovalikolle change-tapahtuma kuuntelija. 
animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;
    console.log("Selected animal:", selectedAnimal);
// Valinnan luku, ja sisällön vaihto, sen perusteella.
    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Tämä on elefantti";
        animalDescription.textContent = "Elefantit kävelevät käytännössä varpaillaan.";
    }
    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikereillä on valesilmät korviensa takapuolella, joilla ne pelottelevat petoeläimiä ja kilpailijoita, kun ne ovat haavoittuvassa tilassa, esimerkiksi vettä juodessaan.";
    }
    if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Tämä on pingviini";
        animalDescription.textContent = "Pingviinit ovat lentokyvyttömiä, mutta virtaviivaisia uimareita.";
    }
    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Tämä on panda";
        animalDescription.textContent = "Pandojen ruokavalio koostuu pääasiallisesti bambusta.";
    }
});

// Lisätään kuvaan mouseenter-tapahtuma, joka lisää kuvalle CSS-luokan "image-highlight" kursorin ollessa kuvan päällä.
animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight"); 
});
// Lisätään kuvaan mouseleave-tapahtuma, joka poistaa kuvan "image-highlight" CSS-luokan, kursorin poistuessa kuvan päältä.
animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight"); 
});

// Tehtävä 4:  Eläinhavaintojen lisääminen

const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");
animalForm.addEventListener("submit", function (event) {
    // Estetään lomakkeen oletustoiminto - sivuston uudelleenlataus
    event.preventDefault();
    

    // Validointia: Tarkistetaan, etteivät kentät ole tyhjiä 
    // - konsoli virheilmoitus, jos tyhjä, ja perutaan funtion suoritus returnilla.
    const sightingAnimal = observationAnimal.value.trim();
    if (sightingAnimal === "") {
        console.log("Error, no sighted animal given.");
        return;
    }
    const sightingLocation = observationLocation.value.trim();
    if (sightingLocation === "") {
        console.log("Error, no sighting location given.");
        return;
    } 
    const sightingDate = observationDate.value; 
    if (sightingDate === "") {
        console.log("Error, no sighting date given.");
        return;
    }
    // Muokataan päivämäärä suomalaiseen järjestykseen.
    const dateSegments = sightingDate.split("-"); // Pilkotaan päivämäärä osiin: ["yyyy", "mm", "dd"] 
    // Asetetaan alkiot listasta paikoilleen. Number-funktio poistaa mahdolliset etunollat.
    const sightingDateFin = `${Number(dateSegments[2])}.${Number(dateSegments[1])}.${dateSegments[0]}`;


    const tableRow = document.createElement("tr");
    const tableDataAnimal = document.createElement("td");
    const tableDataLocation = document.createElement("td");
    const tableDataDate = document.createElement("td");
    // Määritellään tekstisisällöiksi input-elementtien arvot.
    tableDataAnimal.textContent = sightingAnimal;
    tableDataLocation.textContent = sightingLocation;
    tableDataDate.textContent = sightingDateFin;
    // Lisätään rivit taulukkoon
    observationTableBody.append(tableRow);
    tableRow.appendChild(tableDataAnimal);
    tableRow.appendChild(tableDataLocation);
    tableRow.appendChild(tableDataDate);
    // Resetoidaan lomake uutta inputtia varten.
    animalForm.reset();

});
// Bonus Tehtävä: Lisää poisto-painike taulukkoon, jolla rivin voi poistaa.












// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");
});
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

