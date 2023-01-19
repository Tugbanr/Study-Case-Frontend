import logo from "./logo.svg";
import "./App.css";
import React,{ useEffect, useState } from "react";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { v4 as uuid4 } from "uuid";

function App() {
  let selectcart = useSelector((state) => state.cartclick);
  let cart = useSelector((state) => state.addtocart);
  const [items, setitems] = useState([]);
  const [cartitems, setcartitems] = useState([]);

  useEffect(() => {
        // localStorage.clear()
    const getdata = async () => {
      const data = await fetch(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      const result = await data.json();
      setitems(result);
    };
    getdata();
    setcartitems(cart);
  }, [cart, cartitems]);
console.log(items)

  return (
    <div>
      <Header />
      {selectcart ? (
        cartitems.length > 0 ? (
          cartitems.map((item) => (
            <Cart
              key={item.id}
              id={item.id}
              imagesrc={item.imagesrc}
              Product={item.Product}
              Price={item.Price}
            />
          ))
        ) : (
          <h1 className="emptycart"> No any item in cart</h1>
        )
      ) : (
        <div className="section">  
        
          {items.map((item) => (
            <Products
              key={item.id}
              data={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
