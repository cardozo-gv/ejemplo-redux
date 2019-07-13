/*
  Actions creators:
  son funciones que retornan un action. Son opcionales pero utilizarlas
  tienen varias ventajas:
   *Documentan mejor el codigo
   *evitan tener las cadenas type quemadas por todo el codigo
   *Facilitan conocer los parámetros que necesita la aplicacion
   *Permiten agregar logica adicional
*/



const loadProducts = () => {
  return {
    type : "REPLACE_PRODUCTS",
    products : [
      { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
      { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
      { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
    ]
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

export {addToCart, removeFromCart, loadProducts}
