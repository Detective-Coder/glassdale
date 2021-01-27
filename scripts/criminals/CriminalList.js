// importing the functions that have the info we need to make the CriminalList function
import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";



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
export const CriminalList = (convictionFilter) => {
  let criminalListContainer = document.querySelector("#main-container");
debugger
  criminalListContainer.innerHTML = "";

  getCriminals().then(() => {
    
      let criminals = useCriminals();

      if(convictionFilter) {
        debugger
        criminals = criminalData.filter(currentCriminal => {
          return currentCriminal.name
        });
      }
   
      // const finalCriminalHTML = buildCriminalListHTML(criminalData);
      criminals.forEach((singleCriminal) => {
        criminalListContainer.innerHTML += Criminal(singleCriminal);
      });
      
  //     criminalListContainer.innerHTML = `
  //   <h2>Criminals</h2><div class="flex-container">${criminalListContainer}</div>
  // `
  })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
  CriminalList();
})

// export const CriminalList = (convictionFilter) => {
//   let criminalListContainer = document.querySelector(".criminal-list");

//   criminalListContainer.innerHTML = ""

//   getCriminals().then(() => {
//     let criminals = useCriminals();

//     // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
//     if(convictionFilter){

//       criminals = // write your filter here

//     }

//     criminals.forEach((singleCriminal) => {
//       criminalListContainer.innerHTML += Criminal(singleCriminal);
//     });
//   });
// };
