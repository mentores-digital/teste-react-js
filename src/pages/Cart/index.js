import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import { Container, Table} from 'reactstrap';
import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, removeCart, updateCart, total }) {
  function increment(product) {
    updateCart(product.id, product.amount + 1);
  }
  function decrement(product){
    updateCart(product.id, product.amount - 1)
  }
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
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
                  onClick={() => removeCart(product.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <footer>
        <button type="button">Finalizar pedido</button>

        
          <span>Total</span>
          <strong>{total}</strong>
        
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);