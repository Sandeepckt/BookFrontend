import React from 'react';
import list from '../Cart/data';
import Cards from './Card';

const Amazon = ({ handleClick }) => {
  return (
    <div className='row'>
      {
        list.map((item) => (
          <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
            <Cards item={item} key={item.id} handleClick={handleClick} />
          </div>
        ))
      }
    </div>
  )
}

export default Amazon