// Grab the List Elements and the Div elements separately
const anchorElements = document.querySelectorAll("li>a"); // targets anchor tags inside tabs

const tabpanels = document.querySelectorAll('[role="tabpanel"]'); // targets divs with role="tabpanel" attributes

anchorElements.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        // https://www.geeksforgeeks.org/how-to-check-the-given-element-has-the-specified-class-in-javascript/
        if (!anchor.classList.contains("open")) {
            anchorElements.forEach((anchorCopy) => {
                anchorCopy.classList.remove("open");
            }); // Remove class="open" for all list
            anchor.classList.add("open"); // Then add the class="open" to the list of the current iteration of the outer loop

            tabpanels.forEach((tabpanel) => {
                // https://stackoverflow.com/questions/3623110/how-can-i-get-an-elements-id-value-with-javascript

                if (anchor.hash == "#" + tabpanel.id) {
                    tabpanels.forEach((tabpanelCopy) => {
                        tabpanelCopy.style.display = "none";
                    });
                    tabpanel.style.display = "block";
                } else {
                    tabpanel.style.display = "none";
                }
            });
        } else {
            anchor.classList.remove("open");
        }
    });
});

// Used this a bit https://www.w3schools.com/howto/howto_js_tabs.asp