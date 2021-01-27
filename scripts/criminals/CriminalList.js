// importing the functions that have the info we need to make the CriminalList function
import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

// exporting and declaring the main function of this module
export const CriminalList = (convictionFilter) => {
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
   
      criminals.forEach((singleCriminal) => {
        criminalListContainer.innerHTML += Criminal(singleCriminal);
      });
  })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
  CriminalList();
})


