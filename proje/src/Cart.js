import React from 'react'
import './Cart.css'
import {useDispatch,useSelector} from 'react-redux'
import { addtocart,deletefrombasket } from './actions'
import {v4 as uuid4} from 'uuid';


function Cart({id,imagesrc,Product,Price}) {
    const dispatch=useDispatch()
    const deletefromcart=(value)=>
    {
        dispatch(deletefrombasket(value))
    }
    const addtobasket=()=>
    {
        dispatch(addtocart({id:uuid4(), imagesrc,Product, Price})) /*sepete ekleme*/
    }

  return (
    <div>
        <div className="cartitem" idofitem={id}> 
        <img src={imagesrc }alt=""/>
        <div className=".productdetails">
            <h3>{Product}</h3>
            <p>{Price} ₺</p>
            </div>
            <div className="cartvuttons">
                <button onClick={()=>addtobasket}> Add to card</button> 
                <button onClick={()=>deletefromcart(id)}>Delete</button>

            </div>
        </div>
    </div>
  )
}

export default Cart