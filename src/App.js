import React, { Component } from 'react';
import './App.css';
import api from './services/api';
import { formatPrice } from './util/format';

// function App() {
//   return (
//     <h1>Testando bootstrap</h1>
//   );
// }

// export default App;


class App extends Component {

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
        <h1>Listar os Filmes</h1>
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

export default App;