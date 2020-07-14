import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {

    state = {
      products: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/products');
  
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
  
      this.setState({ products: data });
      
    }

    handleAddProduct = product => {
      const { addToCart } = this.props;
      addToCart(product)
    }
  
    render() {
  
      const { products } = this.state;
  
      return (
        <div>
          <h1>Listar os Produtos</h1>
          {products.map(product => (
            <li key={product.id}>
              <h2>
                <strong>Título: </strong>
                {product.title}
              </h2>
              <img src={product.picture}/>
              <p>{product.priceFormatted}</p>
              <button type="button" onClick={() => this.handleAddProduct(product)}>Adicionar</button>
            </li>  
          ))}
        </div>
      );
    };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
  
export default connect(null, mapDispatchToProps)(Home);