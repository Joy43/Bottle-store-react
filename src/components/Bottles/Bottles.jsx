import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addTols, getStoredCart } from "../../../public/utlites/localStroage";
import Cart from "../Cart/Cart";

const Bottles = () => {

const [bottles,setBottles]=useState([])
// card button
const [cart,setCart]=useState([]);

useEffect ( ()=>{
fetch('bottles.json')
.then(res=>res.json())
.then(data=>setBottles(data))
},[])
// load cart from local stored 
useEffect(()=>{
    console.log('called the useffect',bottles.length);
if(bottles.length>0){
    const storedCart=getStoredCart();
    console.log(storedCart,bottles);
const saveCart=[];
    for(const id of storedCart)
    {
        console.log(id);
        const bottle=bottles.find(bottle=>bottle.id===id)
        if(bottle){
saveCart.push(bottle)
        }
    }
    console.log('save cart',saveCart)
    setCart(saveCart)
}

},[bottles])

// even handle button
const handleAddToCart =bottle=>{
    console.log(bottle);
   const newCard=[...cart,bottle];
   setCart(newCard);
//    localstore
   addTols(bottle.id)
}
    return (
        <div>
            <h2>Bottle abailable :{bottles.length}</h2>
           <Cart cart={cart}  ></Cart>
        <div className="bottles-container">
        
        {
        bottles.map(bottle => <Bottle
        key={bottle.id}
        handleAddToCart={handleAddToCart}
        bottle={bottle}></Bottle>)
        }

</div>
</div>
    );
};

export default Bottles;