// Grab the List Elements and the Div elements separately
const anchorElements = document.querySelectorAll("li>a"); // targets anchor tags inside tabs

const tabpanels = document.querySelectorAll('[role="tabpanel"]'); // targets divs with role="tabpanel" attributes

anchorElements.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        // https://www.geeksforgeeks.org/how-to-check-the-given-element-has-the-specified-class-in-javascript/
        // Check if tab is open already
        if (!anchor.classList.contains("open")) {

            // Remove class="open" for all list
            anchorElements.forEach((anchorCopy) => {

                anchorCopy.classList.remove("open");

            }); 

            // Then add the class="open" to the list of the current iteration of the outer loop
            anchor.classList.add("open"); 

            // Loop through panels to find match
            tabpanels.forEach((tabpanel) => {
                // https://stackoverflow.com/questions/3623110/how-can-i-get-an-elements-id-value-with-javascript

                if (anchor.hash == "#" + tabpanel.id) {

                    // Hide all panels first
                    tabpanels.forEach((tabpanelCopy) => {
                        tabpanelCopy.style.display = "none";
                    });

                    // Show the matching panel
                    tabpanel.style.display = "block";

                } else {
                    // Keep hidden otherwise
                    tabpanel.style.display = "none";
                }
            });
        } else {
            // Remove "open" class if tab was already open
            anchor.classList.remove("open");
        }
    });
});

// Used this a bit https://www.w3schools.com/howto/howto_js_tabs.asp