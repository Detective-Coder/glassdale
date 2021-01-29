import { CriminalList } from "../criminals/CriminalList.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
// const contentTarget = document.querySelector(".crime-filter")

export const AssociateSelect = () => {
  // we're calling that function that returns the info from the api and THEN more stuff
  getConvictions().then(() => {
     
      const convictions = useConvictions();
       render(convictions)
  
  })
}

// function render(convictionsCollection){
//   contentTarget.innerHTML = `
//   <select class="dropdown" id="crimeSelect">
//   <option value="0">Please select a crime...</option>
//     ${
//       convictionsCollection.map(crimeObject => {
//         const crimeName = crimeObject.name 
//         return `<option>${crimeName}</option>`
//       })
//     }
//   </select>
//   `
// }
let associatesBox = document.querySelector("#associates-box");
// select the main element in the html and store it in eventHub
const eventHub = document.querySelector("main")
// listen to main for a changeEvent, which is associated with a dropdown selection, make a parameter called eventObject for this upcoming function
eventHub.addEventListener("click", (eventObject) => {
  getCriminals().then(() => {
    let criminal = useCriminals();
    let knownAssociatesForCriminal = [];
    for(let i = 0; i < criminal.length; i++) {
      knownAssociatesForCriminal += criminal[i].known_associates
    }
    console.log(eventObject.target.id.split("-")[1])
    if (eventObject.target.id.includes("associates-")) {
      let singleCriminal = criminal.find(x => x.id == eventObject.target.id.split("-")[1])
     
      let associateName = singleCriminal.known_associates[0].name
      let associateAlibi = singleCriminal.known_associates[0].alibi
     
      associatesBox.innerHTML = `<div class="name-container">Name: ${associateName}</div> <div class="alibi-container">Alibi: ${associateAlibi}</div>`;
    }
  })
})



