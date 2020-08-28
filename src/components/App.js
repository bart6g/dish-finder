import React, { useEffect, useState } from "react";
import Form from "./Form";
import Recipe from "./Recipe";
import styles from "./app.module.scss";

// const initial = [
//   {
//     title: "Banana-Blueberry Smoothie",
//     calories: 324.533,
//     totalTime: 5,
//     weight: 235.4,
//     image:
//       "https://www.edamam.com/web-img/03e/03e118d9a968764719b775890f102d1c.jpg",
//     ingredients: ["bananas", "milk", "sugar"],
//   },
//   {
//     title: "Banana-Blueberry Smoothie",
//     calories: 324.533,
//     totalTime: 5,
//     weight: 235.4,
//     image:
//       "https://www.edamam.com/web-img/03e/03e118d9a968764719b775890f102d1c.jpg",
//     ingredients: ["bananas", "milk", "sugar"],
//   },
//   {
//     title: "Banana-Blueberry Smoothie",
//     calories: 324.533,
//     totalTime: 5,
//     weight: 235.4,
//     image:
//       "https://www.edamam.com/web-img/03e/03e118d9a968764719b775890f102d1c.jpg",
//     ingredients: ["bananas", "milk", "sugar"],
//   },
// ];
const App = () => {
  const APP_ID = "0c42cf5c";
  const APP_KEY = "29b70ac22ac15997d71e3ce66578b524";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className={App}>
      <Form handleState={setQuery} />

      <div className={styles.container}>
        {recipes.map((item) => (
          <Recipe
            key={item.recipe.title}
            title={item.recipe.title}
            calories={item.recipe.calories}
            ingredients={item.recipe.ingredients}
            time={item.recipe.totalTime}
            weight={item.recipe.totalWeight}
            // title={item.label}
            link={item.recipe.shareAs}
            img={item.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
