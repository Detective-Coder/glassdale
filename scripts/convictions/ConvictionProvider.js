// The ConvictionProvider component will fetch those crimes and export a useConvictions() method for other components to import.
let convictions = []

// this function will return the info we fetch from the api
export const getConvictions = () => {
  // here's the return statement and the fetch call to the api
  return fetch("https://criminals.glassdale.us/crimes")
    // once that comes back good, THEN we're going to make another function and plug in the reponse we got
    .then(function (response) {
      // we're going to return that response once we convert it to json so javascript can read it correctly
      return response.json()
    })
    // once that goes well, THEN we're going to make another function that takes the output from that last function and stores is in the criminals array 
    .then(function (parsedConvictions) {
      // right here is where it takes the output from the last function and puts it into the criminals array
      convictions = parsedConvictions
    })
}

export const useConvictions = () => {
  return convictions.slice()
}