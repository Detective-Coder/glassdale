import {useOfficers, getOfficers} from "./OfficerProvider.js";
import {Officers} from "./Officer.js";

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters-officers")

export const OfficerSelect = () => {
  getOfficers().then(() => {

    const officers = useOfficers();
    render(officers);
  })

}

function render(officerCollection) {
  contentTarget.innerHTML = `
  <select class="dropdown" id="officerSelect">
  <option value="0">Please select an officer...</option>
    ${
      officerCollection.map(officerObject => {
        const officerName = officerObject.name
        return `<option>${officerName}</option>`
      })
    }
  </select>
  `
}

// eventHub.addEventListener("change", changeEvent => {
//   if (changeEvent.target.id === "officerSelect") {
//       // Get the name of the selected officer
//       const selectedOfficer = changeEvent.target.value

//       // Write your code here

//   }
// })

// When the user selects an officer, show the criminals that were arrested by that officer

// the OfficerSelect component can iterate it and render an <option> element for each one