import {useNotes, getNotes, deleteNote} from "./NoteDataProvider.js";
import {Note} from "./Note.js"
import {useCriminals, getCriminals} from "../criminals/CriminalProvider.js"

// exporting and declaring the main function of this module, 
export const NoteList = () => {
  // gets a reference to main-container and stores it in noteListContainer
  let noteListContainer = document.querySelector("#main-container");
  // setting the innerHTML to an empty string to build up later
  noteListContainer.innerHTML = "";
    getNotes()
    .then(getCriminals)
    .then(() => {
      // get the notes array information and store it in a new notes variable
      let notes = useNotes();
      let criminals = useCriminals();
      // for each note, new function with singleNote as a parameter
      notes.forEach((singleNote) => {
        // for each note, write to the main-container with the results of the Note function - each single note is passed into the function with the singleNote parameter/argument
        const relatedCriminal = criminals.find(criminal => {
          return criminal.id === +singleNote.criminalId
        })
        noteListContainer.innerHTML += Note(singleNote, relatedCriminal);
      })  
    })
}

// const contentTarget = document.querySelector("#main-container")
// const render = (noteCollection, criminalCollection) => {
//   contentTarget.innerHTML = noteCollection.map(note => {
//       // Find the related criminal
//       const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

//       return `
//           <section class="note">
//               <h2>Note about ${relatedCriminal.name}</h2>
//               ${note.noteText}
//           </section>
//       `
//   })
// }

// export const NoteList = () => {
//   getNotes()
//       .then(getCriminals)
//       .then(() => {
//           const notes = useNotes()
//           const criminals = useCriminals()
//           render(notes, criminals)
//       })
// }

const eventHub = document.querySelector("#main-container")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteNote")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
    deleteNote(idToDelete)
    .then(Notelist)
  }
});





