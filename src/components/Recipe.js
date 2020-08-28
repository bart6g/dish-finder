import React from "react";
import styles from "./recipe.module.scss";
const Recipe = ({ calories, time, weight, ingredients, title, img, link }) => {
  return (
    <div key={title} className={styles.container}>
      <h1>{title}</h1>
      <p>
        Calories:
        {calories.toFixed(2)}
        kcal
      </p>
      <p>Preparation: {time}min</p>
      <img src={img} alt="" />
      <a href={link} target={"_blank"} rel="noopener noreferrer">
        Click for more info
      </a>
    </div>
  );
};

export default Recipe;
