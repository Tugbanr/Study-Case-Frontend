import React, { useEffect } from "react";
import "./Product.css";
import { addtocart } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function Products({ data }) {
  const dispatch = useDispatch();

  const { id, name, price, image } = data;
  console.log(name);
  const Additemincart = ({ id, imagesrc, Product, Price }) => {
    dispatch(addtocart({ id, imagesrc, Product, Price }));
  };

  return (
    <div className="item">
      <img src={image} />
      <h1>{name}</h1>
      <p>{price} ₺</p>

      <button onClick={() => Additemincart({})}>Add to cart</button>
    </div>
  );
}
export default Products;
