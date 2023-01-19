const addtocartReducers=(state=[],action)=>{
    switch(action.type)
    {
        case "addtocart":
            {
              localStorage.setItem("cartitems",JSON.stringify([...state,action.payload])) /* add üzerine gelen state alıp action'un üzerine ekleme yapıyoruz.*/
              return[...state,action.payload]
            }

            case"deletefrombasket":
            {
                let copyofBasket=[...state]
                let indeks=copyofBasket.findIndex(item=>item.id==action.payload)
                copyofBasket.splice(indeks,1) /*buldugu indeksi sil*/
                state=copyofBasket
                if(state.length==0)
                {
                    localStorage.clear()
                }
                else{
                    localStorage.setItem("cartitems",JSON.stringify(state))
                }
                return[...state] /* dolu state çevir*/
            }

            default:
                return state;
    }
} 
export default addtocartReducers