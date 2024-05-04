import React from 'react'
import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom'
import { DescriptionSerie } from './DescriptionSerie'

export const CardSerie = ({ serie }) => {
  const styles = {
    main: 'relative w-64 h-96 rounded-lg hover:border justify-between items-center cursor-pointer flex flex-col group',
    txtBox: 'w-full h-1/5 flex items-center justify-center',
    txt: 'text-2xl text-center text-blue-500 group-hover:text-red-700',
    icon: 'absolute hidden group-hover:flex w-12 h-12 stroke-blue-500 top-32 duration-1000 animate-ping',
    picture: 'w-full h-4/5 overflow-hidden rounded-lg',
    img: 'w-full h-full object-cover rounded-lg group-hover:scale-150 group-hover:opacity-30 duration-500'
  }
  const Go = useNavigate();

  function FindSerie (e){
    const url = `/neko/${serie.name}`
    Go(url);
  }

  return (
    <article className={styles.main} onClick={e=>{FindSerie(e)}}>
            
      <picture className={styles.picture}>
        <img className={styles.img}
          src={serie.image}
          alt="image"
        />
      </picture>


      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.icon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
      </svg>

      <span className={styles.txtBox}>
        <h3 className={styles.txt}>
          {serie.name}
        </h3>
      </span>
    </article>
  )
}
