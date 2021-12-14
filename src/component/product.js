import React from "react";
import "./product.css";
import {useStateValue} from './stateProvider.js';

function Product({ id, title, image, price, category,description }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        category: category,
        description: description
      },
    });
  };




  return (
     <div className="product">
      <div class='product_header'>
        <h4 className="product__title">{title}</h4>
        <p className="product__price">
          <strong>Price: ₹</strong>
          <strong> {price}</strong>
          </p>
      {/*  <div className="product__stars">{props.stars}</div> */}
      <div className='product__head'>
        <p><b>Category: </b> {category}</p>
        <p><b>Description: </b> {description}</p>
      </div>
      </div>
        <img src={image} alt="product__image" className='product__image'/>
        <button onClick={addToBasket} class='product__button'>Add To Basket</button>
    </div>
  );
}

export default Product;