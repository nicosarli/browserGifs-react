import React, { Suspense } from 'react'
import './App.css'
import logo from './images/logo.png'
import { Link, Route } from 'wouter'
import ListOfGifs from './components/ListOfGifs/ListOfGifs'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { GifsContextProvider } from './context/GifsContext'

const HomePage = React.lazy(() => import('./pages/Home'))

function App () {
  return (
    <div className='App'>
      <Suspense fallback={null}>
        <section className='App-content'>
          <Link to='/'>
            <img src={logo} alt='logo giphy' className='App-content-logo' />
          </Link>
          <GifsContextProvider>
            <Route component={HomePage} path='/' />
            <Route component={SearchResults} path='/search/:keyword/:rating?' />
            <Route component={Detail} path='/gif/:id' />
            <Route component={ListOfGifs} path='/gif/:keyword' />
            <Route component={() => <h1> 404 ERROR :( </h1>} path='/404' />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  )
}

export default App
