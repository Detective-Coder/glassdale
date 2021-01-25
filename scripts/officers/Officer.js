export function Officers(officerObject){
  return `
  <section class="officer-card">

    <div class="officer-card-text">
      <h3>${officerObject.name}</h3>
      <p>ID: ${officerObject.id}</p>
    </div>
  </section>`
}