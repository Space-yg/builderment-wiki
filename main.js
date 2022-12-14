import { pagesLinks, pagesTags } from "./variables.js";
import { test, search } from "./functions.js";

// Set pages
const pagesTag = document.getElementById("pages");
for (let i = 0; i < pagesLinks.length; i++) {
    const li = document.createElement("li");
    li.appendChild(pagesTags[i]);
    pagesTag.appendChild(li);
}