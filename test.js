function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
  }
  
  // Corrected variable name
  const favoriteFoods = ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"];
  
  const foodListElements = favoriteFoods.map(mapFoodItem);
  
  console.log(foodListElements);