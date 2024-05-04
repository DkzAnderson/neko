import React from 'react'
import { Routes, Route, Link , BrowserRouter, NavLink, Navigate } from 'react-router-dom'
import { Home } from '../components/Home'
import { MediaPlayer } from '../components/MediaPlayer'
import { DescriptionSerie } from '../components/DescriptionSerie'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/neko' element={<Home/>}/>
        <Route path='neko/:name/:se/:ep' element={<MediaPlayer/>}/>
        <Route path='neko/:name' element={<DescriptionSerie/>}/>
      </Routes>
    </BrowserRouter>
  )
}
