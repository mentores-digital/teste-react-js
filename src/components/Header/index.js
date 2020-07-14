import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  
  const cartSize = props.cart.length;

  return (
      <div classnames="container">
        <p>{cartSize} itens</p>
      </div>
    
  );
}

export default connect(state => ({
  cart: state.cart,
}))(Header);