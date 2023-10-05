
const categories = document.getElementById("categories");

const categoryItems = categories.querySelectorAll('li.item');

console.log(`Кількість категорій: ${categoryItems.length}`);

const categoriesList = document.getElementById('categories');


categoryItems.forEach((categoryItem) => {
  
  const categoryName = categoryItem.querySelector('h2').textContent;
  
  const categoryItemsList = categoryItem.querySelectorAll('ul > li');
  
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів у категорії: ${categoryItemsList.length}`);
});
