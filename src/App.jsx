import { useState } from 'react'
import './App.css'

import data from '../backend/scripts/functions'

import { NavBar } from './components/NavBar'
import { RouterPrincipal } from './routes/RouterPrincipal'

function App() {

  const [listState,setListState] = useState();
  const [notFound,setNotFound] = useState();

  const mainStyles = {
    header : 'w-full border-b font-nunito',
    main : 'w-full h-full font-nunito',
    footer : 'w-full flex justify-center items-center border-t h-20 font-nunito',
    titles: 'text-3xl neko-title'
  }

  return (
    <>
      <header className={mainStyles.header}>
        <NavBar 
          listState={listState} 
          setListState={setListState}
          setNotFound={setNotFound}
          notFound={notFound}
        />
      </header>
      <main className={mainStyles.main}>
        <RouterPrincipal/>
      </main>
      <footer className={mainStyles.footer}>
        <h2 className={mainStyles.titles}>
          NekoStore
        </h2>
      </footer>
    </>
  )
}

export default App
