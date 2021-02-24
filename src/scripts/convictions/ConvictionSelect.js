import { CriminalList } from "../criminals/CriminalList.js";
import {useConvictions, getConvictions} from "./ConvictionProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".crime-filter")

export const ConvictionSelect = () => {
  // we're calling that function that returns the info from the api and THEN more stuff
  getConvictions().then(() => {
     
      const convictions = useConvictions();
       render(convictions)
  
  })
}

function render(convictionsCollection){
  contentTarget.innerHTML = `
  <select class="dropdown" id="crimeSelect">
  <option value="0">Please select a crime...</option>
    ${
      convictionsCollection.map(crimeObject => {
        const crimeName = crimeObject.name 
        return `<option>${crimeName}</option>`
      })
    }
  </select>
  `
}

// select the main element in the html and store it in eventHub
const eventHub = document.querySelector("main")
// listen to main for a changeEvent, which is associated with a dropdown selection, make a parameter called eventObject for this upcoming function
eventHub.addEventListener("change", (eventObject) => {
    
    // if the change happens in the dropdown with the id of crimeSelect(the crime filter dropdown)
    if(eventObject.target.id === "crimeSelect"){
        // console.log("You selected something from the crime dropdown")
        // console.log("This is the crime that was selected: ", eventObject.target.value)
           // ---------- Your code goes here ----------- //
        /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
      //  we call the CriminalList function and pass in the value of the change, which in this case was the name of the crime the user selected
        CriminalList(eventObject.target.value);
    }
  
})

