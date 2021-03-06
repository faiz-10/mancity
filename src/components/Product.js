import React from "react";
import home from './image/home.jpg'
import away from './image/away.jpg'

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <img src={home} width='100px'/>
        <img src={away} width='100px'/>
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">${props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-primary" onClick={() => {props.decrementQuantity(props.index)}}>
            -
          </button>
          <button type="button" class="btn btn-primary">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity * props.product.price}
      </div>
      <div className="col-2">
        <button className="btn btn-danger" onClick={() => {
          props.removeItem(props.index)
        }}>Remove</button>
      </div>
    </div>
  );
}
