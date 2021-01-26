// importing the functions that contain all the final work for printing to the dom
import {CriminalList} from "./criminals/CriminalList.js";
import {OfficerList} from "./officers/OfficerList.js";
import {LocationsList} from "./locations/LocationsList.js";
import {ConvictionsList} from "./convictions/ConvictionSelect.js";

// calling the functions that we imported
// CriminalList();
// OfficerList();
// LocationsList();
ConvictionsList();

const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
  // Select the entire body tag
  const bodyElement = document.querySelector("body")

  // Add a class
  bodyElement.classList.toggle("dark-background")
})

