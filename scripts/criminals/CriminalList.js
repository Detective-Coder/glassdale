// importing the functions that have the info we need to make the CriminalList function
import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

// exporting and declaring the main function of this module
export const CriminalList = (convictionFilter, officerFilter) => {
  let criminalListContainer = document.querySelector("#main-container");
  criminalListContainer.innerHTML = "";

  getCriminals().then(() => {
    
      let criminals = useCriminals();

      if(convictionFilter) {
        criminals = useCriminals().filter(currentCriminal => {
          return currentCriminal.conviction === convictionFilter
        });
        // let filteredCriminals = []

        // for(let i = 0; i < criminals.length; i++){
        //   if(criminals[i].conviction === convictionFilter){
        //     filteredCriminals.push(criminals[i])
        //   }
        // }

        // criminals = filteredCriminals
      }
      if(officerFilter) {
        criminals = useCriminals().filter(currentCriminal => {
          // if the name of the officer that the user selects gets passed in through officerFilter, and that name matches the currentCriminal's arrestingOfficer property, then it equals true and that index in the array is returned, if not, the index is skipped over
          return currentCriminal.arrestingOfficer === officerFilter
        });
        // let filteredCriminals = []

        // for(let i = 0; i < criminals.length; i++){
        //   if(criminals[i].conviction === convictionFilter){
        //     filteredCriminals.push(criminals[i])
        //   }
        // }

        // criminals = filteredCriminals
      }
   
      criminals.forEach((singleCriminal) => {
        criminalListContainer.innerHTML += Criminal(singleCriminal);
      });
  })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
  CriminalList();
})


