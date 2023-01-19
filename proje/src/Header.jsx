import React, { useEffect } from "react";
import "./Header.css";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { cartclick, addtocart } from "./actions";
import { useDispatch } from "react-redux";

function Header() {
  const cart = [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("cartitems") !== null) {
      const getItems = JSON.parse(localStorage.getItem("cartitems"));
      getItems.forEach((item) => {
        dispatch(addtocart(item));
      });
    }
  }, []);
  return (
    <div className="header">
      <div className="logo">Eteration</div>
      <div className="search">
      
        <input type="text" placeholder="Search" />
       
      </div>

      <div className="cart" onClick={() => dispatch(cartclick())}>
        <ShoppingBagIcon className="icon" />{" "}
        <div className="text">{cart.length}</div>
      </div>
    </div>
  );
}
export default Header;
