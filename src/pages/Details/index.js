import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import { Container, Row, Col } from 'reactstrap';
import { FaShoppingCart } from "react-icons/fa";
import * as CartActions from '../../store/modules/cart/actions';

export default function Details(props) {
    console.log(props.history.location.state)

    const dispatch = useDispatch();
    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
      }
    
    return (
        <div class="product-details">
            <Container>
                <Row>
                    <Col md="6" sm="12">
                        <img src={props.history.location.state.picture} class="img-fluid" />
                    </Col>
                    <Col md="6" sm="12">
                        <h2>{props.history.location.state.title}</h2>
                        <p>{props.history.location.state.description}</p>
                        <p class="price">{formatPrice(props.history.location.state.price)}</p>
                        <button class="btn btn-buy" onClick={() => handleAddProduct(props.history.location.state.id)}><FaShoppingCart /> Comprar</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}