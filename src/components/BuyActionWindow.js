import React,{useState }from "react";

import { Link } from "react-router-dom";
import "./BuyActionWindow.css";

import axios from "axios"

import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setstockQuantity] = useState(1);
  const [stockPrice, setstockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3005/newOrder", {
      name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
    })

    GeneralContext.closeBuyWindow();
  }

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" onChange={(e)=> setstockQuantity(e.target.value)} value={stockQuantity}/>
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" step="0.05" onChange={(e)=> setstockPrice(e.target.value)} value={stockPrice}/>
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required &#x20B9;140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
          <Link
            to=""
            className="btn btn-grey"
            onClick={handleCancelClick}
          >Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
