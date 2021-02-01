import {useNotes, getNotes, saveNote} from "./NoteDataProvider.js";
import {Note} from "./Note.js"

// exporting and declaring the main function of this module
export const NoteList = () => {
  let noteListContainer = document.querySelector("#main-container");
  noteListContainer.innerHTML = "";

  getNotes().then(() => {
    
      let notes = useNotes();

      notes.forEach((singleNote) => {
        noteListContainer.innerHTML += Note(singleNote);
      })
   
   
      // criminals.forEach((singleCriminal) => {
      //   criminalListContainer.innerHTML += Criminal(singleCriminal);
      // });
  })
}





