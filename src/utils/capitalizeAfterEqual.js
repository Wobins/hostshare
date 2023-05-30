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
