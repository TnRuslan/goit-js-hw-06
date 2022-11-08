const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients")

const listItems = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
 
  listItem.textContent = ingredient;
  listItem.classList.add("item");

  console.log(listItem)
  return listItem
})

ingredientsListEl.append(...listItems)

