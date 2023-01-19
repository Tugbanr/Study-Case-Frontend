const clicktocartReducer=(state=false,action)=>{ /* Baslangıc degeri Tıklanmamıs olsun istedik */
    switch(action.type)
    {
        case "cartclick":
            {
                return(!state)
            }
            default:
                return state;
    }
}
export default clicktocartReducer
