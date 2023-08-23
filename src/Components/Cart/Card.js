import React from 'react';

const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
    <div className="card">
        <div className="image_box mb-3">
            <img src={img} alt="Image" />
        </div>
        <div className="card-body p-0">
            <p className='card-title'>{title}</p>
            <p className='card_desc'>{author}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} className='btn'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards