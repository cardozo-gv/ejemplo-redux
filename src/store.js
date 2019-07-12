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
import thunk from 'redux-thunk';

const reducer = (state,action) => {
  if(action.type === "REPLACE_PRODUCTS"){
    return {
      ...state,
      products:action.products
    };
  }

  else if(action.type === "ADD_TO_CART"){
    return {
      ...state,
      cart : state.cart.concat(action.product)
    }
  }
  else if(action.type === "REMOVE_FROM_CART"){
    return {
      ...state,
      cart : state.cart.filter(e => e.id !== action.product.id),
    }
  }
  return state;
}


const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(reducer,{cart:[],products:[]},applyMiddleware(logger,thunk));
