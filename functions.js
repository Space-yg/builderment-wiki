import { pagesLinks, pagesTags } from "./variables.js";

// Get path
var path = "";
for (let i = location.href.split("/").length - 2; i > 0; i--) {
    if (location.href.split("/")[i] === "builderment-wiki") break;
    else path += "../";
}
console.log(location.href.split("/"))
console.log(path)
// Search
function search() {
    const input = document.getElementsByTagName("input")[0];
    const searchDiv = document.getElementsByClassName("search")[0];
    const ulTag = document.getElementById("search");
    ulTag.innerHTML = "";
    if (input.value) searchDiv.style.visibility = "visible";
    else return searchDiv.style.visibility = "hidden";
    const showPages = [];
    for (let i = 0; i < pagesTags.length; i++) if (pagesTags[i].innerText.toUpperCase().indexOf(input.value.toUpperCase()) > -1) showPages.push(pagesTags[i]);
    for (let i = 0; i < showPages.length && i < 5; i++) {
        // <li onclick="window.location.href = `./wikis/Items copy/page.html`;">Items</li>
        const li = document.createElement("li");
        li.setAttribute("onclick", `window.location.href = "${path + showPages[i].getAttribute("href")}"`);
        li.innerHTML = showPages[i].innerText;
        ulTag.appendChild(li);
    }
}
document.getElementsByTagName("input")[0].addEventListener("keyup", search);

// Test any functionality
function test() { console.log("Test"); }

export {
    search,
    test
};
