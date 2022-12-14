// List of pages
const pagesLinks = [
    "./wikis/Items/page.html",
    "./wikis/Test page/page.html"
];

// List of pages as <a>
const pagesTags = [];
for (let i = 0; i < pagesLinks.length; i++) {
    const a = document.createElement("a");
    a.setAttribute("href", pagesLinks[i]);
    a.innerHTML = pagesLinks[i].split("/")[2];
    const li = document.createElement("li");
    li.appendChild(a);
    pagesTags.push(a);
}

export {
    pagesLinks,
    pagesTags
};