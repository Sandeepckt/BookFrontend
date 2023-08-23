import React from 'react';
import list from '../Cart/data';
import Cards from './Card';

const Amazon = ({handleClick}) => {
  return (
    <section className='section-cart'>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Amazon