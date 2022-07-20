import React, { Component } from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import SubTotal from "./SubTotal";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
          <Link to='/'>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
          />
          </Link>
        <div>
          <h1 className="checkout__title">Your shopping Basket</h1>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal/>
      </div>
    </div>
  );
};

export default Checkout;
