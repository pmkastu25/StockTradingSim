import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setallOrders] = useState([]);
  const [ordersExist, setordersExist] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3005/allOrders").then((res) => {
      console.log(res.data);
      setallOrders(res.data);
      setordersExist(true);
    }, []);
  });

  return (
    <div className="orders">
      <div className="no-orders order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>mode</th>
          </tr>
          {allOrders.map((stocks, index) => {
            return (
              <tr>
                <th>{stocks.name}</th>
                <th>{stocks.qty}</th>
                <th>{stocks.price}</th>
                <th>{stocks.mode}</th>
              </tr>
            );
          })}
        </table>
        {ordersExist || (
          <div>
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        )}
      </div>
    </div> 
  );
};

export default Orders;
