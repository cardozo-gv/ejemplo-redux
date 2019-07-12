/*
Actions creators:
son funciones que retornan un action. Son opcionales pero utilizarlas
tienen varias ventajas:
*Documentan mejor el codigo
*evitan tener las cadenas type quemadas por todo el codigo
*Facilitan conocer los parámetros que necesita la aplicacion
*Permiten agregar logica adicional
*/
import axios from 'axios'; /*Permite hacer llamados http */

const loadProducts = () => {
  return dispatch => {
    return axios.get("http://localhost:3001/products")
    .then(response => {
      dispatch({
        type: "REPLACE_PRODUCTS",
        products:response.data
      })
    });
  }

}

const addToCart = product => {
  return {
    type:"ADD_TO_CART",
    product
  }
}

const removeFromCart = product => {
  return {
    type:"REMOVE_FROM_CART",
    product
  }
}

export {loadProducts,addToCart, removeFromCart}
