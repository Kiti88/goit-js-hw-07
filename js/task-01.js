const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('.item');

// 1. Полічить та виведе в консоль кількість категорій
console.log(`Total categories: ${items.length}`);

// 2. Для кожного елемента li.item у списку ul#categories
items.forEach((item) => {
  // Знайде та виведе в консоль текст заголовка елемента (тегу <h2>)
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  // Знайде та виведе в консоль кількість елементів у категорії (усіх <li>, вкладених у нього)
  const categoryItemsCount = item.querySelectorAll('ul li').length;
  console.log(`Number of items: ${categoryItemsCount}`);
});
