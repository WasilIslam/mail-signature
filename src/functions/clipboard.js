export function copyTextToClipboard(text) {
  var textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function copyRichText(elementId) {
  // Find the element with the provided ID
  console.log(elementId);
  const element = document.getElementById(elementId);

  // Create a range and select the content of the element
  const range = document.createRange();
  range.selectNodeContents(element);

  // Create a selection and add the range to it
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  // Use the Clipboard API to copy the selected content
  try {
    document.execCommand("copy");
    console.log("Rich text copied to clipboard.");
  } catch (error) {
    console.error("Unable to copy rich text: ", error);
  }

  // Clear the selection
  selection.removeAllRanges();
}
