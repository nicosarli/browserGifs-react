import React from 'react'
import { Link } from 'wouter'
import Fav from '../Fav'

import './index.css'

const Gif = ({ id, title, url }) => {
  return (
    <div className='ListOfGifs-items'>
      <div className="Gifs-buttons">
      <Fav id={id}>

      </Fav>
      </div>
      <Link to={`/gif/${id}`} className='Gif-link'>
        <img src={url} alt={title} />
      </Link>
    </div>
  )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})
