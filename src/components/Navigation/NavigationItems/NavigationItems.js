import React from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {props.isAuthenticated ? (
      <NavigationItem link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    )}
    {props.isAuthenticated ? (
      <NavigationItem link="/checkout">
        <ShoppingCartIcon style={{ color: "white" }} />
      </NavigationItem>
    ) : null}
  </ul>
);

export default navigationItems;
