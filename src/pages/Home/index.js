import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import history from '../../services/history'
import * as CartActions from '../../store/modules/cart/actions';

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
              <button type="button" onClick={() => handleAddProduct(product.id)}>Adicionar</button>
              <button type="button" onClick={() => history.push('/details', product)}>Detalhes do produto</button>
            </li>  
          ))}
        </div>
      );
    };