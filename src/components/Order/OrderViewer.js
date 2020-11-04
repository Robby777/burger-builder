import React from "react";

import classes from "./OrderViewer.module.css";

const OrderViewer = (props) => {
  return (
    <div className={classes.OrderViewer}>
        <p>Name: {props.name}</p>
        <p>Street: {props.street}</p>
        <p>ZipCode: {props.zipCode}</p>
        <p>Country: {props.country}</p>
        <p>Email: {props.email}</p>
        <p>Delivery Method: {props.deliveryMethod}</p>
        <p>Total Price: {props.totalPrice}</p>
        <button className={classes.DeleteButton} onClick={props.deleteOrder}>
          DELETE ORDER
        </button>
    </div>
  );
};

export default OrderViewer;
