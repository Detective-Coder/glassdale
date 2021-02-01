// declairing this empty variable that we're gonna use in those functions below
let notes = []

// we're exporting this function that takes the criminals array, once the getCriminals function has been called somewhere, so that the criminals array is full of the info we want, and this function will make a copy of that function and return it
export const useNotes = () => {
  return notes.slice()
}

// this function will return the info we fetch from the api
// export const getNotes = () => {
//   // here's the return statement and the fetch call to the api
//   return fetch("http://localhost:8088/notes")
//     // once that comes back good, THEN we're going to make another function and plug in the reponse we got
//     .then(function (response) {
//       // we're going to return that response once we convert it to json so javascript can read it correctly
//       return response.json()
//     })
//     // once that goes well, THEN we're going to make another function that takes the output from that last function and stores is in the criminals array 
//     .then(function (parsedNotes) {
//       // right here is where it takes the output from the last function and puts it into the criminals array
//       notes = parsedNotes
//     })
// }

const getNotes = () => {
  return fetch('http://localhost:8088/notes')
      .then(response => response.json())
      .then(parsedNotes => {
          notes = parsedNotes
      })

}

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