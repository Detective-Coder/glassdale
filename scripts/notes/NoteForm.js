import {saveNote} from "./NoteDataProvider.js"
import {NoteList} from "./NoteList.js"

const contentTarget = document.querySelector(".note-form-container")

export const NoteForm = () => {
    contentTarget.innerHTML = `
        <form class="bg-light p-5 mb-5">
        <div class="mb-3 col-sm-5">
          <label for="date" class="form-label">Date</label>
          <input type="date" class="form-control" id="date">
        </div>
        <div class="mb-3 col-sm-8">
          <label for="suspect" class="form-label">Suspect</label>
          <input type="text" class="form-control" id="suspect">
        </div>
        <div class="mb-3">
          <label for="textarea" class="form-label">Text</label>
          <textarea class="form-control" id="textarea" rows="3"></textarea>
        </div>

        <button id="saveNote">Save Note</button>
    `
}

// const noteForm = document.querySelector(".note-form-container")
// noteForm.innerHTML = NoteForm();

// document.querySelector("#notes-nav-link").addEventListener("click", () => {
//   NoteForm();
// })

const eventHub = document.querySelector("main")
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {

      // Make a new object representation of a note
      let newNote = {
          // Key/value pairs here
          "text": document.querySelector("#textarea").value,
          "date": document.querySelector("#date").value,
          "suspect": document.querySelector("#suspect").value
      }
      console.log(newNote)
      

      // Change API state and application state
      saveNote(newNote)
      .then(NoteList) // Refresh your list of notes once you've saved your new one
      console.log(newNote)
  }
})



