import {saveNote} from "./NoteDataProvider.js"
import {NoteList} from "./NoteList.js"

// this is where we're printing the form
const contentTarget = document.querySelector(".note-form-container")

// this function contains the form where we get all the information that we want to save to our .json api
export const NoteForm = () => {
    contentTarget.innerHTML = `
        <div class="bg-light p-5 mb-5">
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

// getting a reference to the main element
const eventHub = document.querySelector("main")
// if there's a click event in the main element, we run this function with clickEvent as the parameter
eventHub.addEventListener("click", clickEvent => {
  // if what the user clicked on has the id of saveNote... which is the button that saves the info...
  if (clickEvent.target.id === "saveNote") {

      // Make a new object representation of a note, this seems to be the object with the info that we want to get and save into the local api, stored in a variable
      let newNote = {
          // Key/value pairs here
          "text": document.querySelector("#textarea").value,
          "date": document.querySelector("#date").value,
          "suspect": document.querySelector("#suspect").value
      }
      console.log(newNote)
      

      // Change API state and application state, we're calling the saveNote function - which takes in the info from the argument of newNote and writes it to the local api, then we're calling the NoteList function, which I believe just gets everything again
      saveNote(newNote)
      .then(NoteList) // Refresh your list of notes once you've saved your new one
      console.log(newNote)
  }
})



