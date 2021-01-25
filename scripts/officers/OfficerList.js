import { useOfficers, getOfficers } from "./OfficerProvider.js";
import { Officers } from "./Officer.js";

let officerContainer = document.querySelector(".officer-list");

function buildOfficerListHTML(officerCollection){
  let officerHTML = "";

  for(let i = 0; i < officerCollection.length; i++){
    officerHTML += Officers(officerCollection[i]);
  }

  return officerHTML;
}

export const OfficerList = () => {
  getOfficers().then(() => {
      let officerData = useOfficers();
      // Now that you have the data, what component should be rendered?
      const finalOfficerHTML = buildOfficerListHTML(officerData);
      officerContainer.innerHTML = `
    ${finalOfficerHTML}
  `
  })

}