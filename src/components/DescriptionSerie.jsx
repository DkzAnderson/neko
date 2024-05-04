import React, { useEffect, useState } from 'react'
import data from '../../backend/scripts/functions';
import { useNavigate, useParams } from 'react-router-dom'

export const DescriptionSerie = () => {
  const {name} = useParams();
  const [serie,setSerie] = useState([]);
  const [seasons,setSeasons] = useState([]);
  const [episodes,setEpisodes] = useState(undefined);
  const [seasonSelected, setSeasonSelected] = useState (undefined);
  let count = 1;

  const styles = {
    main : 'flex flex-col w-full items-center px-8 mb-20 py-4',
    title : 'text-3xl text-center text-blue-500',
    imgBox: 'w-full h-96 rounded overflow-hidden my-8',
    img : 'rounded w-full h-full object-contain',
    descriptionBox: 'w-full mb-5',
    descriptionTxt: 'text-zinc-400',
    seasonBox: 'w-full flex flex-col gap-2',
    seasonBoxTitles: 'text-center cursor-pointer hover:bg-gray-300 hover:text-blue-500 hover:tracking-widest duration-300 text-lg py-2 border border-blue-500 bg-blue-500 rounded text-white',
    episodesBox: 'w-full mt-10 border border-gray-300 rounded-lg overflow-hidden text-center text-lg',
    episodesBoxTitle: 'bg-gray-300 text-blue-500 font-bold py-2',
    episodesList : 'w-full text-center items-center gap-2 flex flex-col py-2 max-h-52 overflow-auto',
    episodesItems : 'text-lg py-1 w-11/12 hover:tracking-wider duration-300 border cursor-pointer text-gray-500 active:border-red-600 active:text-red-600 hover:text-blue-500 border-transparent hover:border-blue-500',

  }

  const Go = useNavigate();

  function ShowEpisodes(e,item){
    setEpisodes(item);
    setSeasonSelected(item.name);
  }

  function goMedia(e,item,se){
    const url = `/neko/${serie.name}/${se}/${item}`;
    Go(url);
    // usar el url para navegar hasta 
    // la seccion media y usar esta 
    // para obtener los datos del video
  }


  useEffect(()=>{
    data.forEach(item=>{
      if(item.name == name){
        setSerie(item);
        setSeasons(item.seasons
        )
      }
    })
  },[])

  if (episodes != undefined){
    return (
      <section className={styles.main}>
        <h2 className={styles.title}>
          {serie.name}
        </h2>
  
        <picture className={styles.imgBox}>
          <img 
            className={styles.img}
            src={serie.image} 
            alt={serie.name+'_poster'}
          />
        </picture>
  
        <div className={styles.descriptionBox}>
          <p className={styles.descriptionTxt}>
            {serie.description}
          </p>
        </div>
  
        <ul className={styles.seasonBox}>
            {
              seasons.map(i=>{
                return(
                  <li 
                    key={i.name}
                    className={styles.seasonBoxTitles}
                    onClick={e=>{ShowEpisodes(e,i)}}
                  >
                    {i.name}
                  </li>
                )
              })
            }
        </ul>
  
        <div className={styles.episodesBox}>
          <h2 className={styles.episodesBoxTitle}>
            {seasonSelected}
          </h2>
          <ul className={styles.episodesList}>

            {
              episodes.episodes.map(episode => {
                let episodeNo = count;
                let se = seasonSelected
                return (
                  <li
                    key={count}
                    onClick={e => { goMedia(e, episodeNo, se) }}
                    className={styles.episodesItems}
                  >
                    {`Capitulo ${count++}`}
                  </li>
                )
              })
            }
          </ul>
        </div>

  
      </section>
    )
  } else {
    return (
      <section className={styles.main}>
        <h2 className={styles.title}>
          {serie.name}
        </h2>
  
        <picture className={styles.imgBox}>
          <img 
            className={styles.img}
            src={serie.image} 
            alt={serie.name+'_poster'}
          />
        </picture>
  
        <div className={styles.descriptionBox}>
          <p className={styles.descriptionTxt}>
            {serie.description}
          </p>
        </div>
  
        <ul className={styles.seasonBox}>
            {
              seasons.map(i=>{
                return(
                  <li 
                    key={i.name}
                    className={styles.seasonBoxTitles}
                    onClick={e=>{ShowEpisodes(e,i)}}
                  >
                    {i.name}
                  </li>
                )
              })
            }
        </ul>
  
      </section>
    )
  }

}
