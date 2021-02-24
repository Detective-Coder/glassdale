// importing the functions that have the info we need to make the CriminalList function
import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js";

// exporting and declaring the main function of this module
export const CriminalList = (convictionFilter, officerFilter) => {
  let criminalListContainer = document.querySelector("#main-container");
  criminalListContainer.innerHTML = "";
  // Kick off the fetching of both collections of data
  getFacilities()
  .then(getCriminalFacilities)
  .then(
    () => {
      // Pull in the data now that it has been fetched
      const facilities = useFacilities()
      const crimFac = useCriminalFacilities()
      let criminals = useCriminals()

      if(convictionFilter) {
        criminals = useCriminals().filter(currentCriminal => {
          return currentCriminal.conviction === convictionFilter
        });
      }

      if(officerFilter) {
        criminals = useCriminals().filter(currentCriminal => {
        // if the name of the officer that the user selects gets passed in through officerFilter, and that name matches the currentCriminal's arrestingOfficer property, then it equals true and that index in the array is returned, if not, the index is skipped over
        return currentCriminal.arrestingOfficer === officerFilter
          });
        }

      // Pass all three collections of data to render()
      render(criminals, facilities, crimFac)
    }
  )
}

const contentTarget = document.querySelector(".criminal-container")
const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  contentTarget.innerHTML = criminalsToRender.map(
      (criminalObject) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminalObject, facilities)
      }
  ).join("")
}


document.querySelector("#criminals-nav-link").addEventListener("click", () => {
  CriminalList();
})


// implement a new button on each criminal representation
// The button must be labeled "Associate Alibis". 
//Give each button a unique id by interpolating the id property of the criminal in the value.
// When the user clicks the button, you must iterate the array of known_associates for that criminal

// export const CriminalList = () => {

