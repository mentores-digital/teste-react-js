import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  
  const cartSize = useSelector(state => state.cart.length);

  return (
      <div classnames="container">
        <p to="/cart">{cartSize} itens</p>
      </div>
    
  );
}