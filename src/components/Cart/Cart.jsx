import './cart.css'
import PropTypes from 'prop-types'; // ES6

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Cart:{cart.length}</h4>
             <div className="cart-container">
                {
                    cart.map(bottle=><img src={bottle.img}></img>)
                }
             </div>
        </div>
    );
};

Cart.PropTypes={
    cart:PropTypes.array.isRequired
}
export default Cart;