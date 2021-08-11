import React from 'react'
import useLocation from 'wouter/use-location'
import useUser from '../../hooks/useUser'

import './index.css'

const Fav = ({ id }) => {
  const { isLogged } = useUser()
  const [ , navigate] = useLocation()

  const handleClick = () => {
    if (!isLogged) return useLocation('/login')
    alert(id)
  }

  return (
    <button  className='gif-Fav' onClick={handleClick}>
      <span role='img' aria-label='Fav Gif'>☼</span>
    </button>
  )
}

export default Fav
