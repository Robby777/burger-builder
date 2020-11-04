import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import DetailsIcon from "@material-ui/icons/Details";

import classes from "./Order.module.css";
import Button from "../UI/Button/Button";

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "8px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <div>
        <p>Ingredients:{ingredientOutput}</p>
        <p>
          Price: <strong>USD {parseFloat(props.price).toFixed(2)}</strong>
        </p>
      </div>
      <div>
        <Button btnType="Success" clicked={props.orderViewer}>
          <DetailsIcon />
        </Button>
        <Button btnType="Danger" clicked={props.deleteOrder}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default order;
