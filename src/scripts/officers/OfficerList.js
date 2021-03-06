import { useOfficers, getOfficers } from "./OfficerProvider.js";
import { Officers } from "./Officer.js";

let officerContainer = document.querySelector("#main-container");

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
      officerContainer.innerHTML = `<h2>Officers</h2>
    <div class="flex-container">${finalOfficerHTML}</div>
  `
  })
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
  // invoke the function that prints the criminals
  OfficerList();
})