import {CriminalList} from "./criminals/CriminalList.js";
import {OfficerList} from "./officers/OfficerList.js";
import {LocationsList} from "./locations/LocationsList.js";
import {ConvictionSelect} from "./convictions/ConvictionSelect.js";
import {OfficerSelect} from "./officers/OfficerSelect.js";
import {} from "./associates/AssociateSelect.js"
import {} from "./notes/NoteForm.js"
import {NoteForm} from "./notes/NoteForm.js"
import {NoteList} from "./notes/NoteList.js"
import {getCriminals} from "./criminals/CriminalProvider.js"

getCriminals()
// CriminalList();
// OfficerList();
// LocationsList();
ConvictionSelect();
OfficerSelect();
NoteForm();
// the function that does all the work for the local api
NoteList();
// AssociateSelect();

// dark mode code
// const darkModeButton = document.querySelector("#dark-mode")

// darkModeButton.addEventListener("click", function(){
//   // Select the entire body tag
//   const bodyElement = document.querySelector("body")

//   // Add a class
//   bodyElement.classList.toggle("dark-background")
// })




