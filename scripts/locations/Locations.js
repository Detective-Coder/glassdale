export function Locations(locationsObject){
  return `
  <section class="locations-card">

    <div class="locations-card-text">
      <h3>ID: ${locationsObject.id}</h3>
      <p>Facility Name: ${locationsObject.facilityName}</p>
      <p>Security Level: ${locationsObject.securityLevel}</p>
      <p>Capacity: ${locationsObject.capacity}</p>
    </div>
  </section>`
}