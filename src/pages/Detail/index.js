import React from 'react'
import { Redirect } from 'wouter'
import Gif from '../../components/Gif/Gif'
import useSingleGif from '../../hooks/useSingleGif'
import useSEO from '../../hooks/useSEO'
import { Helmet } from 'react-helmet'

export default function Detail ({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <h1>CARGNADO...</h1>;
      </>
    )
  }

  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
        <meta name='description' content={`Detail of ${title}`} />
      </Helmet>
      <h3 className='Detail-title'>{gif.title}</h3>
      <Gif {...gif} />
    </>
  )
}
