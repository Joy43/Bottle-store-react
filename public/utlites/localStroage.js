const getStoredCart =()=>{
    const stordCartString=localStorage.getItem('cart');
    if(stordCartString){
        return JSON.parse(stordCartString)
    }
    return[];
}
const saveCartTols=cart=>{
const cartStringified=JSON.stringify(cart);
localStorage.setItem('cart',cartStringified)};
const addTols=id=>{
    const cart=getStoredCart();
    cart.push(id);
    // save to local stored
    saveCartTols(cart);
}
export{addTols,getStoredCart}