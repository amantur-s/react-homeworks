// import MealItemFrom from '../Meals/MealItem/MealItemForm';
import Modal from '../UI/Modal';
import classes from './Card.module.css';
import CartContext from '../../store/cart-context';
import {  useContext } from 'react';





const Card = (props) => {
    const  cartCtx = useContext(CartContext)

    // const numberOfCartItems = cartCtx.items.reduce((currNumber,item) => {
        
    //     return currNumber + item.amount
    // },0)
 
  

    
    const cardItem = (
        <ul className={classes['cart-items']}>
            
               {/* {[{id:'c1',name:'Samsa',amount:2,price:12.99}]  */}
               {cartCtx.items.map((item) => {
                       return <li key={item.id}>{item.name} ${item.allPrice ? item.allPrice : item.price}</li>
               })}
        </ul>
    ) 

   
  
    return (
        <Modal onCloseCart={props.onCloseCart}>
          {cardItem}
          <div className={classes.total}>
  
              <span>totalAmont</span> 
              <span>{cartCtx.totalAmount}</span>
          </div>
          <div className={classes.actions}>
              <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
              <button className={classes.button}>Order</button>
          </div>
        </Modal>
    )
}
export default Card
