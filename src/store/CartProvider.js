import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmount:0,
}

function itemsCount(arr, item){
    arr.forEach((elem)=>{
        if(elem.id === item.id){
            elem.amount = item.amount;
            elem.allPrice = elem.amount * elem.price;
        }
    })

    return arr;
}

function sumArr(arr){
    if(+arr.length === 1){
        return arr[0].allPrice ? arr[0].allPrice : arr[0].price;
    }
    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum += arr[i].allPrice ? arr[i].allPrice : arr[i].price;
    }

    return sum;
}


const cartReducer = (prevState,action) => {
  
  
   if(action.type === 'ADD'){
       let bool = prevState.items.find((elem)=>{
           return action.item.id === elem.id;
       })
       let updatedItems = [];
       if(bool === undefined){
           updatedItems = prevState.items.concat(action.item);
       } else {
            updatedItems = itemsCount(prevState.items, action.item);
       }
     
      const updatedTotalAmount = sumArr(updatedItems);

      return {
          items:updatedItems,
          totalAmount:updatedTotalAmount,
      }
   }
   return defaultCartState
}


const CartProvider = (props) => {
    const [cartState,dispatchCart] = useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler = (item) => {
       dispatchCart({type:'ADD',item:item})
    }
    const removItemFromCartHandler = (id) => {}

    const cartContext  = {
       
        items:cartState.items,   
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removItemFromCartHandler,
    }
    return (

        <CartContext.Provider value={cartContext}>
           {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider