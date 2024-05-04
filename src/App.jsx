import { useState } from 'react'
import './App.css'

import data from '../backend/scripts/functions'

import { NavBar } from './components/NavBar'
import { RouterPrincipal } from './routes/RouterPrincipal'

function App() {
  const mainStyles = {
    header : 'w-full border-b font-nunito',
    main : 'w-full h-full font-nunito',
    footer : 'w-full border-t h-20 font-nunito'
  }

  return (
    <>
      <header className={mainStyles.header}>
        <NavBar/>
      </header>
      <main className={mainStyles.main}>
        <RouterPrincipal/>
      </main>
      <footer className={mainStyles.footer}>
        footer
      </footer>
    </>
  )
}

export default App
