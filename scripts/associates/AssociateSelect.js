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
      console.log(singleCriminal.known_associates);
      console.log(singleCriminal.known_associates[0].name)
      console.log(singleCriminal.known_associates[0].alibi)
      let associateName = singleCriminal.known_associates[0].name
      let associateAlibi = singleCriminal.known_associates[0].alibi
      console.log(associateName)
      console.log(associateAlibi)
      associatesBox.innerHTML = `Name: ${associateName}<br> Alibi: ${associateAlibi}`;
      // alert(JSON.stringify(singleCriminal.known_associates));
    }
    
  })

 
  // function Associates(associatesObject){
  //   return `
  //   <section class="associates-card">
  //     <div class="associates-card-text">
  //       <p>Name: ${singleCriminal.known_associates[0].name}</p>
  //       <p>Alibi: ${singleCriminal.known_associates[0].alibi}</p>
  //     </div>
  //   </section>`
  // }
  
  
    
  
  
  
  // if the change happens in the dropdown with the id of crimeSelect(the crime filter dropdown)
  if(eventObject.target.class === "associate"){
      
    
    // for(let i = 0; i < knownAssociatesForCriminal.length; i++) {

    // }
  }
  
})

// When the user clicks the button, you must iterate the array of known_associates for that criminal - CHECK
// then display the following information. You can display it in a dialog box, as a sidebar, at the top of the screen, or wherever you like.

// The name of the known associate
// The alibi that the known associate is providing for the criminal to try to prove the criminals' innocence.

