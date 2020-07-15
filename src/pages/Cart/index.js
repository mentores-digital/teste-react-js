import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import { Container, Table, Jumbotron } from 'reactstrap';
import * as CartActions from '../../store/modules/cart/actions';
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalsum, product) => {
        return totalsum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountSuccess(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountSuccess(product.id, product.amount - 1));
  }
  return (
    <div class="cart">
      <Container>
        <Table hover bordered responsive>
          <thead>
            <tr>
              <th>Imagem Produto</th>
              <th>Produto</th>
              <th>Preço</th>
              <th>Qtd</th>
              <th>Subtotal</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(product => (
              <tr>
                <td>
                  <img class="img-fluid" src={product.picture} alt={product.title} />
                </td>
                <td>
                  {product.title}
                </td>
                <td>
                  {product.priceFormatted}
                </td>
                <td>
                  <div class="quantity">
                    <button type="button" class="btn" onClick={() => decrement(product)}>
                      <FaMinus />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" class="btn" onClick={() => increment(product)}>
                      <FaPlus />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subTotal}</strong>
                </td>
                <td>
                  <button type="button" class="btn btn-danger " onClick={() => dispatch(CartActions.removeCart(product.id))}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Jumbotron>
          <h4>Total: <strong>{total}</strong></h4>
        </Jumbotron>
      </Container>
    </div>
  );
}