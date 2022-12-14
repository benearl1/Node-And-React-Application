import React from 'react';
import { useParams } from 'react-router-dom';

export default function CartScreen(props) {
  const { id } = useParams();
  const productId = Number(id);
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}