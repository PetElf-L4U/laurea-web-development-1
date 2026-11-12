// API Avaimen piilotus
const apiKey = process.env.OWAPI;
if (apiKey) {
console.log("API-avain ladattu turvallisesti GitHub Actionsista.");
// Tee API-kutsu käyttäen API_KEY:tä
} else {
console.error("VIRHE: API-avainta ei löydy ympäristömuuttujista."); 
} 


// OpenWeather API-avain.
// const apiKey = "API KEY HERE";
// URL:n parametrit
let city = "Helsinki"; 
const units = "metric";
const mode = "xml"; 
// Find the HTML element where we display the weather data.
const weatherdata = document.getElementById("weatherdata"); 

// Kaupungin API haku ja XML parsinta. Itsenäisenä funktiona sitä voidaan kutsua eri tavoin (eri nappuloilla, tai suoraan hakukentästä).
async function searchCity () {
     // Display a loading message.
    weatherdata.textContent = "Haetaan säätietoja...";
    // Try to fetch and process the weather data.
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}&mode=${mode}`);
        // Check whether the API returned a successful HTTP status.
        
         // Create an error and jump to the catch block.
        if (!response.ok) {
            throw new Error(`HTTP-virhe: ${response.status}`);
        }
        // Read the response body as text and wait until it is ready.
        // Display the XML as plain text on the page.
        const xmlText = await response.text(); 
        //weatherdata.textContent = xmlText;
        //XML parsinta stringistä DOMParserilla.
        const xml = new DOMParser().parseFromString(xmlText, "application/xml");
        // Poimitaan lämpötila, kosteus ja pilvisyys arvot.
        const temperature = xml.querySelector("temperature").getAttribute("value");
        const humidity = xml.querySelector("humidity").getAttribute("value");
        const clouds = xml.querySelector("clouds").getAttribute("value");
        // Näytetään tekstisisällöstä poimitut muuttujat.
        weatherdata.textContent = `${city}: lämpötila ${temperature} °C, kosteus ${humidity}%, pilvisyys ${clouds}%.`;
    }
        // Handle errors from the request or the code above.
            // Choose an error message in the page's language.
            // Display the message and details of the error.
    catch (error) {
            weatherdata.textContent = "Säätietojen haku epäonnistui: " + error.message;
    }
}

// Funktio-kutsut
// Muuttujat
const fetchWeatherButton = document.getElementById("fetchWeather");
const citysearch = document.getElementById("citysearch");
const searchButton = document.getElementById("search");

// Valikosta valittu kaupunki | Select-elementin onchange-funktiokutsu.
function pickCity() {
    city = document.getElementById("city").value;
};

// Nappulat ja hakukenttä

// "Hae data" -nappulan toiminnallisuus: Suorita searchCity-funktio.
fetchWeatherButton.addEventListener("click", function() {
    pickCity();
    searchCity();
});

// Hakukentän kautta haun suoritus, kun Enteriä painetaan, ja kenttä ei ole tyhjä.
citysearch.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && citysearch.value.trim() !== "") {
        city = citysearch.value.trim();
        searchCity();
    }
}); 

// "Hae"-nappulan toiminnallisuus. Jos hakukenttä ei ole tyhjä, muutetaan city muuttuja ja ajetaan funktio.
searchButton.addEventListener("click", function () {
    if (citysearch.value.trim() !== "") {
        city = citysearch.value.trim();
        searchCity();
    }
});

