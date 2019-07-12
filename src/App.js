import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Grid from 'react-bootstrap/lib/Grid';
import Navbar from 'react-bootstrap/lib/Navbar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              Ecommerce
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
