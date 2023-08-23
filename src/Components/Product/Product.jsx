import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image mb-3" src={props.url} alt="product image" />
      <h6 className="card-title ">{props.name}</h6>
      <p className="price">{props.price}</p>
      <p className="card_desc">{props.description}</p>
        <button className="btn btn-primary">Add to Cart</button>
 </div>
);
}