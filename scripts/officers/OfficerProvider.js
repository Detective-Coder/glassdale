
let officers = []

export const useOfficers = () => {
  return officers.slice()
}

export const getOfficers = () => {
  return fetch("https://criminals.glassdale.us/officers")
    .then(function (response) {
      return response.json()
    })
    .then(function (parsedOfficers) {
      officers = parsedOfficers
    })
}