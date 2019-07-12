/* Mantiene el estado de la aplicacion de forma centralizada
  * permite el acceso al estado a traves del getState()
  * Registra los suscriptores a traves de subscribe(fn).
  * Permite que el estado sea actualizado a traves del metodo dispatch(action)
  * El store se crea con el metodo createStore(reduceFn,estado inicial)
  ---------------
  La funcion reductora es una funcion que recibe un estado, una accion y retorna
  un nuevo estado
  El store invoca la funcion reductora siempre que recibe un llamado al metodo dispatch(action)
*/

import { createStore, applyMiddleware } from 'redux';

const reducer = (state,action) => {
  if(action.type === "ADD_TO_CART"){
    return {
      ...state,
      cart : state.cart.concat(action.product)
    }
  };
  if(action.type === "REMOVE_FROM_CART"){
    return {
      ...state,
      cart : state.cart.filter(e => e.id !== action.product.id),
    }
  }
  return state;
}

const products = [
  { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
  { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
  { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
]

export default createStore(reducer,{cart:[],products:products});
