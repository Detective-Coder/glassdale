// we're exporting this html object function, it's going to be called later to build up and interpolate everything later in the list component
export function Criminals(criminalObject){
  return `
  <section class="criminal-card">

    <div class="criminal-card-text">
      <h3>${criminalObject.name}</h3>
      <p>Age: ${criminalObject.age}</p>
      <p>Crime: ${criminalObject.conviction}</p>
      <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
      <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
  </section>`
}