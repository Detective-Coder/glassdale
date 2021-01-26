import {useConvictions, getConvictions} from "./ConvictionProvider.js";
// The ConvictionSelect component, which will invoke useConvictions() and then iterate that collection to fill out the dropdown in the browser.

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters-crime")

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

// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("main")
eventHub.addEventListener("change", (eventObject) => {
    console.log("You clicked somewhere in the main container")

    // To be more specific, we need to know specifically what we clicked on
    console.log("Here is the element you clicked on: ", eventObject.target)

    if(event.target.id === "crimeSelect"){
        console.log("You selected something from the crime dropdown")
        console.log("This is the crime that was selected: ", eventObject.target.value)
        // Your code goes here!
    }
})