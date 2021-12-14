import React from "react";
import "./subtotal.css";

import { useStateValue } from "./stateProvider";
import { getBasketTotal } from "./reducer";
import { Link ,useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
   return (
    <div className="subtotal">
      <b>Subtotal:{getBasketTotal(basket)}</b>
      <br/>
      <button>Checkout</button>
      <Link to='/shop'>
        <button style={{margin:'0.25rem 0', width:'100%'}}>Return to Shopping</button>
      </Link>
    </div>
  );
}

export default Subtotal;