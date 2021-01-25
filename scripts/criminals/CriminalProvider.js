let criminals = []

export const useCriminals = () => {
  return criminals.slice()
}

export const getCriminals = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then(function (response) {
      return response.json()
    })
    .then(function (parsedCriminals) {
      criminals = parsedCriminals
    })
}