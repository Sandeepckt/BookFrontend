import React from 'react';
import list from '../Cart/data';
import Cards from './Card';

const Amazon = ({ handleClick }) => {
  return (
    <div className='container-fluid content-bg'>
    <div className='row'>
					<div className='col-lg-12 mb-4'>
						<h1 className='title text-center'>Our Products</h1>
					</div>
      {
        list.map((item) => (
          <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
            <Cards item={item} key={item.id} handleClick={handleClick} />
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Amazon