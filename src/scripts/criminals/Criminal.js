// we're exporting this html object function, it's going to be called later to build up and interpolate everything later in the list component
// export function Criminal(criminalObject){
//   return `
//   <section class="criminal-card">
//     <div class="criminal-card-text">
//       <h3>${criminalObject.name}</h3>
//       <p>Age: ${criminalObject.age}</p>
//       <p>Crime: ${criminalObject.conviction}</p>
//       <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
//       <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
//     </div>
//     <button class="associate" id="associates-${criminalObject.id}">Associate Alibis</button>
//   </section>`
// }

export const Criminal = (criminalObject, facilities) => {
  return `
  <div class="criminal">
      <h4>${criminalObject.name}</h4>
      <div class="criminal__details">
          <p>Convicted for ${criminalObject.conviction}</p>
          <p>Arrested by ${criminalObject.arrestingOfficer}</p>
          <p>Incarcerated between:
              ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
              ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
          </p>
          <p>Age: ${criminalObject.age}</p>
          <div>
              <h2>Facilities</h2>
              <ul>
                  ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
              </ul>
          </div>
          <button id="associates--${criminalObject.id}">Show Associates</button>
      </div>
  </div>
  `
}

// implement a new button on each criminal representation
// The button must be labeled "Associate Alibis". 
//Give each button a unique id by interpolating the id property of the criminal in the value.
// When the user clicks the button, you must iterate the array of known_associates for that criminal