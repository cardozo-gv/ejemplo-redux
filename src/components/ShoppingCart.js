import React from 'react';
import { Table, Button } from 'react-bootstrap';
import Panel from 'react-bootstrap/lib/Panel';
/*import store from '../store';*/
import { removeFromCart } from '../actionsCreators';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = (props) => {
  return (
    <Panel>
      <Panel.Heading>Shopping Cart</Panel.Heading>
      <Table fill>
        <tbody>
          {props.cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => props.removeFromCart(product)}><span className="glyphicon glyphicon-trash" aria-hidden="false"></span></Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>

    </Panel>
  )
}

/*mapStateToProps es una funcion de react-redux que permite elimiar los state de la clase.
Esto favorece la creacion de componentes presentacionales, es decir sin ninguna logica */
const mapStateToProps = state => {
  return {
    cart : state.cart
  }
}
/*mapDispatchToProps es un funcion de react-redux que recibe el dispatch del store y
retorna un objeto con todos los metodos que se necesitan  */
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product){
      dispatch(removeFromCart(product))
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
