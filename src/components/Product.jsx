import React from "react";
import { useStateValue } from "./StateProvider";

const Product = ({ id,title, img, price }) => {
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title: title,
        img: img,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="rating">⭐⭐⭐⭐</p>
        <p className="price">${price}</p>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
