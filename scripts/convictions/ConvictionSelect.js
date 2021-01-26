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
  <select>
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
