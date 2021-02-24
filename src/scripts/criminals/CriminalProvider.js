// declairing this empty variable that we're gonna use in those functions below
let criminals = []

// we're exporting this function that takes the criminals array, once the getCriminals function has been called somewhere, so that the criminals array is full of the info we want, and this function will make a copy of that function and return it
export const useCriminals = () => {
  return criminals.slice()
}

// this function will return the info we fetch from the api
export const getCriminals = () => {
  // here's the return statement and the fetch call to the api
  return fetch("https://criminals.glassdale.us/criminals")
    // once that comes back good, THEN we're going to make another function and plug in the reponse we got
    .then(response => response.json())
    // once that goes well, THEN we're going to make another function that takes the output from that last function and stores is in the criminals array 
    .then(parsedCriminals => {
      // right here is where it takes the output from the last function and puts it into the criminals array
      criminals = parsedCriminals
    })
}