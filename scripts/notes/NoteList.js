import {useNotes, getNotes, saveNote} from "./NoteDataProvider.js";
import {Note} from "./Note.js"

// exporting and declaring the main function of this module, 
export const NoteList = () => {
  // gets a reference to main-container and stores it in noteListContainer
  let noteListContainer = document.querySelector("#main-container");
  // setting the innerHTML to an empty string to build up later
  noteListContainer.innerHTML = "";

      // get the notes array information and store it in a new notes variable
      let notes = useNotes();

      // for each note, new function with singleNote as a parameter
      notes.forEach((singleNote) => {
        // for each note, write to the main-container with the results of the Note function - each single note is passed into the function with the singleNote parameter/argument
        noteListContainer.innerHTML += Note(singleNote);
      })
   
}





