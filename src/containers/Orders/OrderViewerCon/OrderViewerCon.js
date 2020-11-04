import React from "react";
import { connect } from "react-redux";

import OrderViewer from "../../../components/Order/OrderViewer";
import * as actions from "../../../store/actions/index";

const OrderViewerCon = (props) => {
  const selectedOrder = props.orders.filter(
    (order) => order.id === props.match.params.id
  );

  console.log(props.history);

  const orders = selectedOrder.map((data)=> <OrderViewer
    key={data.id}
    name={data.orderData.name}
    street={data.orderData.street}
    zipCode={data.orderData.zipCode}
    country={data.orderData.country}
    email={data.orderData.email}
    deliveryMethod={data.deliveryMethod}
    totalPrice={data.totalPrice}
    deleteOrder={() => props.onDeleteOrder(data.id, props.token, props.history)}
  />);

  return (
    <div>
      {orders}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteOrder: (orderId, token, history) => dispatch(actions.deleteOrder(orderId, token, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderViewerCon);
