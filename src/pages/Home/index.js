import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import history from '../../services/history'
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FaShoppingCart } from "react-icons/fa";


export default function Home (){

    const [products, setProducts] = useState([]);
    const amount = useSelector(state => 
      state.cart.reduce((sumAmount, product) => {
        sumAmount[product.id] = product.amount;
        return sumAmount;
      }, {})
    );

    const dispatch = useDispatch();

    useEffect(() => {
      async function loadProducts() {
        const response = await api.get('/products');

        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

        setProducts(data);
      }
      loadProducts();
    }, []);

    function handleAddProduct(id) {
      dispatch(CartActions.addToCartRequest(id));
    }
  
    return (
      <div class="list-products">
        <Container>
          <Row>
          {products.map(product => (
            <Col md="3" sm="12">
              <Card key={product.id} onClick={() => history.push('/details', product)}>
                <CardImg top width="100%" src={product.picture} alt={product.title} />
                <CardBody>
                  <CardTitle> {product.title}</CardTitle>
                  <CardSubtitle>{product.priceFormatted}</CardSubtitle>
                  <Button onClick={() => handleAddProduct(product.id)}><FaShoppingCart /> Comprar</Button>
                </CardBody>
              </Card>
            </Col>
            ))}
          </Row>
        </Container>
      </div>
      );
    };