import React from 'react'
import { Link } from 'wouter'

const Gif = ({ id, title, url }) => {
  return (
    <div className='ListOfGifs-items'>
      <Link to={`/gif/${id}`} className='Gif-link'>
        <img src={url} alt={title} />
      </Link>
    </div>
  )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
