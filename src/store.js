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

import { createStore, combineReducers } from 'redux';

/*El combineReducers divide el reducers segun su funcionalidad
  ahora cada función reductora NO retorna todo el estado. Solamente retorna
  la parte del estado que importa
 */

const products = (state = [],action) => {
  if( action.type === "REPLACE_PRODUCTS"){
    return action.products
  }
  return state;
}

const cart = (state = [],action) => {
  if(action.type === "ADD_TO_CART"){
    return state.concat(action.product)
  }
  else if(action.type === "REMOVE_FROM_CART"){
    return state.filter(e => e.id !== action.product.id)
  }
  return state;
}


/* la llave cart va a ejecutar la funcion car, la llave products va a ejecutar la funcion products
como tienen el  mismo nombre llave y funcion se puede resumir así
combineReducers({cart,products}) */
export default createStore(combineReducers({cart:cart, products:products}));
