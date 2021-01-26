import { useLocations, getLocations } from "./LocationsProvider.js";
import { Locations } from "./Locations.js";

let locationsContainer = document.querySelector("#main-container");

function buildLocationsListHTML(locationsCollection){
  let locationsHTML = "";

  for(let i = 0; i < locationsCollection.length; i++){
    locationsHTML += Locations(locationsCollection[i]);
  }

  return locationsHTML;
}

export const LocationsList = () => {
  getLocations().then(() => {
      let locationsData = useLocations();
      // Now that you have the data, what component should be rendered?
      const finalLocationsHTML = buildLocationsListHTML(locationsData);
      locationsContainer.innerHTML = `
    <h2>Locations</h2><div class="flex-container">${finalLocationsHTML}</div>
  `
  })
}

document.querySelector("#facilitiesnav-link").addEventListener("click", () => {
  // invoke the function that prints the criminals
  LocationsList();
})