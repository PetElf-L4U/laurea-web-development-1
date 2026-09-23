// WORKSHOP 02 - Javascript Basics

// EX1 - Developer Tools and Console
    // Console print "Hello World!"
    console.log("Hoi maailma!");
    // Display a pop-up message "welcome to my website"
    alert("Tervetuloa verkkosivulleni!");
// EX2 - Variables
    // Store text values in variables
    const userName = "Petteri";
    let age = 35;
    const favoriteAnimal = "nauta";
    // Print the variables to the console.
    console.log("Nimeni on " + userName + " ja lempieläimeni on " + favoriteAnimal + ".");

// EX3 - User Input
    // Ask the user for their name
    const visitorName = prompt("Mikä sinun nimesi on?");
    // Print the user's answer
    console.log("Hei " + visitorName + "! Tervetuloa JavaScriptin pariin.");

// EX 4 - Conditionals
    // Ask the user their age and print the result to console, using if / else statement.
    const visitorAge = prompt("Kuinka vanha olet?");
    if (visitorAge >= 18){
        console.log("Olet täysi-ikäinen.")
        }
    else {
        console.log("Olet alle 18-vuotias.")
        }
    
// EX 5 - Functions
    // Create a fucntion called greetUser.
    //The function should receive a name as parameter and print a greeting.
    function greetUser(name) {
        console.log("Heippa " + name + "!");
    }
    greetUser(visitorName)
    
// EX 6 - Button - Connect JavaScript to the Page
    //Add a heading and a button to your HTML page.
    //When the button is clicked, use JavaScript to display a message.
    const date = new Date();

    function myFunction() {
       alert("Today is " + date.toDateString() + ".");
    }
