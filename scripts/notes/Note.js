// exporting a function that takes in a note object and builds the html based on that object's properties
export function Note(noteObject){
  return `
  <section class="note-card">
      <p>Text: ${noteObject.text}</p>
      <p>Date: ${noteObject.date}</p>
      <p>Suspect: ${noteObject.suspect}</p>
    </section>
  `
}