import { type } from "@testing-library/user-event/dist/type"

export const addtocart=(payload)=>{
    return{
        type:"addtocart", 
        payload: payload
    }
}
export const deletefrombasket=(payload)=>{
    return{
        type:"deletefrombasket",
        payload:payload,
    }
}
export const cartclick=()=>{
    return{
        type:"catclick",
    }
}
