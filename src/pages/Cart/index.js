import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import { Container, Table} from 'reactstrap';
import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const total = useSelector( state =>
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
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product){
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }
  return (
    <Container>
      <Table hover>
      <thead>
        <tr>
            <th>Imagem Produto</th>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
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
                <div>
                  <button type="button" onClick={() => decrement (product)}>
                    menos
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment (product)}>
                    mais
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(CartActions.removeCart(product.id))}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
      <span>Total</span>
      <strong>{total}</strong>
    </Container>
  );
}