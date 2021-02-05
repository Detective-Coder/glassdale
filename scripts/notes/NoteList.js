import {useNotes, getNotes, saveNote} from "./NoteDataProvider.js";
import {Note} from "./Note.js"

// exporting and declaring the main function of this module, 
export const NoteList = () => {
  // gets a reference to main-container and stores it in noteListContainer
  let noteListContainer = document.querySelector("#main-container");
  // setting the innerHTML to an empty string to build up later
  noteListContainer.innerHTML = "";

  // getNotes().then(() => {
    
      let notes = useNotes();

      notes.forEach((singleNote) => {
        noteListContainer.innerHTML += Note(singleNote);
      })
   
  // })
}





