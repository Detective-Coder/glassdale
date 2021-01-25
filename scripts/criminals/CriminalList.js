// importing the functions that have the info we need to make the CriminalList function
import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { Criminals } from "./Criminal.js";

// getting a reference to the html element where we want to print to, and storing it in a new variable
let criminalContainer = document.querySelector(".criminal-list");

// the function we use to build the html up, giving it a parameter where we can pass in an array
function buildCriminalListHTML(criminalCollection){
  // declaring an empty string that we'll return later in the function
  let criminalHTML = "";

  // looping through the array that we pass in as an argument
  for(let i = 0; i < criminalCollection.length; i++){
    // for each iteration of the array we call our htmlobject function and run it on each index of the the array, and then store it each time in the empty string we made earlier
    criminalHTML += Criminals(criminalCollection[i]);
  }
  // we have to return that array so we can get to the info we put together in this function
  return criminalHTML;
}

// exporting and declaring the main function of this module
export const CriminalList = () => {
  // we're calling that function that returns the info from the api and THEN more stuff
  getCriminals().then(() => {
      // here we're calling that function that has a copy of the criminals array that's now full of data, and we're storing that info in a new variable
      let criminalData = useCriminals();
      // Now that you have the data, what component should be rendered?
      // we're calling the funcation that builds the html, we're passing in the criminalData variable that now has all the array info inside it, and we're storing all that built-up html from all that criminal data and storing it in a new variable
      const finalCriminalHTML = buildCriminalListHTML(criminalData);
      // we're taking that variable that is a reference to the dom element, we're writing to the html, and we're inserting that variable that has all all the html built-up
      criminalContainer.innerHTML = `
    ${finalCriminalHTML}
  `
  })

}