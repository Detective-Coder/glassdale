import {Note} from "./Note.js"

// declairing this empty variable that we're gonna use in those functions below
let notes = []

// once we call the getNotes function, the notes variable is full of the info we need to use, this function takes that variable and returns a copy of the array
export const useNotes = () => {
  return notes.slice()
}
// this function uses a fetch call to get the objects from the api, then it turns that data into json that we can use, then it takes that data and stores it in the notes variable above
export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
      .then(response => response.json())
      .then(parsedNotes => {
          notes = parsedNotes
      })

}

// I believe this is the function we use to add the notes we write to the notes.json file. it gets in contact with the api running on my local machine, then posts the new note to the that api
export const saveNote = note => {
  return fetch('http://localhost:8088/notes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes) // After we add a note, get them all again so our new note appears in our collection
}