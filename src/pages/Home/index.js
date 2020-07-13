import React, {Component} from 'react';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

export default class Home extends Component {

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
              <p>
                {product.url}
              </p>
              <img src={product.picture}/>
              <p>{product.priceFormatted}</p>
            </li>
          ))}
        </div>
      );
    };
};
  
  