// export default function capitalizeFirstLetter(str) {
//   // Split the string into an array of words
//   if (typeof str !== "string") {
//     throw new TypeError(`Expected a string as input", not type ${typeof str}`);
//   }
//   let words = str.split(" ");

//   // Iterate through each word
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];

//     // Capitalize the first letter of the word
//     let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

//     // Replace the original word with the capitalized word
//     words[i] = capitalizedWord;
//   }

//   // Join the words back into a string
//   let capitalizedStr = words.join(" ");

//   return capitalizedStr;
// }


export default function capitalizeAfterEqual(str) {
  // Find the index of the equal sign
  let equalIndex = str.indexOf("=");

  // Check if the equal sign exists in the string
  if (equalIndex !== -1) {
    // Extract the substring after the equal sign
    let substring = str.substring(equalIndex + 1);

    // Capitalize the first letter of the substring
    let capitalizedSubstring = substring.charAt(0).toUpperCase() + substring.slice(1);

    // Concatenate the modified substring with the rest of the string
    let modifiedStr = str.substring(0, equalIndex + 1) + capitalizedSubstring;

    return modifiedStr;
  }

  // Return the original string if no equal sign is found
  return str;
}
