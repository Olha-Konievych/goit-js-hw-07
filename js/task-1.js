const sumCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${sumCategories.length}`);

sumCategories.forEach(item => {
    const category = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("ul li");

    console.log(`Category: ${category}`);
    console.log(`Elements: ${elements.length}`);
})
