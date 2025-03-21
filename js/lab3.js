// Grab the List Elements and the Div elements separately
const listElements = document.querySelectorAll("li");

const contentElementOne = document.querySelector("#tabpanel1");
const contentElementTwo = document.querySelector("#tabpanel2");
const contentElementThree = document.querySelector("#tabpanel3");

// Used this a bit https://www.w3schools.com/howto/howto_js_tabs.asp

// If user clicks on whatever
listElements[0].addEventListener("click", (event) => {
    // If the first list item is clicked
    console.log("clicked the first item");
});
listElements[1].addEventListener("click", (event) => {
    // If the first list item is clicked
    console.log("clicked the second item");
});
listElements[2].addEventListener("click", (event) => {
    // If the first list item is clicked
    console.log("clicked the third item");
});