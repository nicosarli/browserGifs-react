import React from 'react'
import Gif from '../Gif/Gif'
import './styles.css'

const ListOfGifs = ({ gifs }) => {
  return (
    <div className='ListOfGifs'>
      {gifs?.map(({ id, title, url, ...restOfGif }) => (
        <Gif key={id} title={title} id={id} url={url} extrInfo={restOfGif} />
      ))}
    </div>
  )
}

export default ListOfGifs
