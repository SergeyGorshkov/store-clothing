import React from 'react';

import { CartItemContainer, CartDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <img src={ imageUrl } alt='item'/>
        <CartDetailsContainer>
            <span>{ name }</span>
            <span className="price">{ quantity } x ${ price }</span>
        </CartDetailsContainer>
    </CartItemContainer>
);

export default CartItem;