import {useConvictions, getConvictions} from "./ConvictionProvider.js";
// The ConvictionSelect component, which will invoke useConvictions() and then iterate that collection to fill out the dropdown in the browser.

// exporting and declaring the main function of this module
export const ConvictionsList = () => {
  // we're calling that function that returns the info from the api and THEN more stuff
  getConvictions().then(() => {
     
      let convictionsData = useConvictions();
      for(let i = 0; i < convictionsData.length; i++) {

      }
  })
}