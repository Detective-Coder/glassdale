let associates = []

export const useAssociates = () => {
  return associates.slice()
}

export const getAssociates = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then(function (response) {
      return response.json()
    })
    .then(function (parsedAssociates) {
      associates = parsedAssociates
    })
}