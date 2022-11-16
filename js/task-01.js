const categoriesList = document.querySelector("#categories");

const countItem = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${countItem.length}`);

countItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
