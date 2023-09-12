
import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    // console.log(handleAddToCart);
   const {name,img,price}=bottle;
   console.log(bottle);

    return (
        
            
<div className="Bottle-container">
    <h3>Bottle:{name}</h3>
    <img  src={img} alt="" />
    <p>Price:${price}</p>
    <button className='btn' onClick={()=>handleAddToCart(bottle)} >Purches</button>
</div>


        
    );
};


export default Bottle;