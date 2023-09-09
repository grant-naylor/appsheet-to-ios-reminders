// .TableView__list or .TableView__reactListWrapper or .TableViewRow__column or .TextTypeDisplay__text

// Step 1: Get all elements with the class name ".TableViewRow__column"
const elements = document.getElementsByClassName("TableViewRow__column");

// Step 2: Iterate over the elements and extract their text content
const values = [];
for (let i = 0; i < elements.length; i++) {
  const text = elements[i].textContent.trim();
  values.push(text);
}

// Step 3: Convert the array to a comma-delimited string
const textString = values.join(",");

// Call completion to finish
completion(textString);
