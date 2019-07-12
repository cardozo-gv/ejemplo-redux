/*
  Actions creators:
  son funciones que retornan un action. Son opcionales pero utilizarlas
  tienen varias ventajas:
   *Documentan mejor el codigo
   *evitan tener las cadenas type quemadas por todo el codigo
   *Facilitan conocer los parámetros que necesita la aplicacion
   *Permiten agregar logica adicional
*/

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

export {addToCart, removeFromCart}
