
let locations = []

export const useLocations = () => {
  return locations.slice()
}

export const getLocations = () => {
  return fetch("https://criminals.glassdale.us/facilities")
    .then(function (response) {
      return response.json()
    })
    .then(function (parsedLocations) {
      locations = parsedLocations
    })
}