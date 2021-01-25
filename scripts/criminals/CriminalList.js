import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { Criminals } from "./Criminal.js";

let criminalContainer = document.querySelector(".criminal-list");

function buildCriminalListHTML(criminalCollection){
  let criminalHTML = "";

  for(let i = 0; i < criminalCollection.length; i++){
    criminalHTML += Criminals(criminalCollection[i]);
  }

  return criminalHTML;
}

export const CriminalList = () => {
  getCriminals().then(() => {
      let criminalData = useCriminals();
      // Now that you have the data, what component should be rendered?
      const finalCriminalHTML = buildCriminalListHTML(criminalData);
      criminalContainer.innerHTML = `
    ${finalCriminalHTML}
  `
  })

}