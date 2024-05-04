import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../backend/scripts/functions';

export const MediaPlayer = () => {


  const {name, se='x' ,ep=0 } = useParams();
  const [url,setUrl]= useState(undefined);
  const [serie,setSerie] = useState(undefined);
  const [season,setSeaon] = useState(undefined);
  const [episode,setEpisode] = useState(undefined);
  const Go = useNavigate();

  let cap = 0;

  function GetData(){
    data.forEach(i=>{
      if(i.name == name){
        setSerie(i);
        i.seasons.forEach(element => {
          if(element.name == se){
            setSeaon(element);
            //console.log(element.episodes[ep-1].url)
            setUrl(element.episodes[(ep-1)].url)
            setEpisode(ep);
          }
        })
      }
    })
  }

  function ShowEpisode(e,episode,link){
    const show = {
      episode: episode,
      season : season.name,
      serie  : serie.name
    }
    const url = `/neko/${show.name}/${show.season}/${show.episode}`
    GetData();
    Go(url);
    setUrl(link);
    setEpisode(episode);

  }



  const styles = {
    main : 'w-full flex flex-col items-center py-5',
    title : 'text-center text-2xl text-blue-500 font-bold',
    subTitle: 'text-center text-lg text-blue-500',
    iframe: 'mt-5 w-full h-96 border-none outline-none',
    episodeListBox: ' mt-10 w-10/12 flex flex-col items-center rounded-lg border border-blue-500 overflow-hidden',
    episodeListTitle:'text-xl py-2 w-full text-center bg-blue-500 text-white',
    episodeList: ' w-full p-1 max-h-96 overflow-auto flex flex-col gap-1',
    episodeListItem: 'text-lg hover:tracking-widest duration-300 text-center cursor-pointer border text-gray-500 hover:text-blue-500 border-transparent hover:border-blue-500'
  }

  useEffect(()=>{
    GetData();
  },[]);

  if(season == undefined){
    return (
      <section className={styles.main}>
        <h2 className={styles.title}>
          {name} 
        </h2>
        <h2 className={styles.title}>
          {se} / Capitulo {ep}
        </h2>

        <iframe 
          src={url}
          className={styles.iframe}
        />
      </section>
    )
  } else if(name == undefined){
    return(
      <h2>
        Ocurrio un error inesperado
      </h2>
    )
  } else {
    return (
      <section className={styles.main}>

        <div>
          <h2 className={styles.title}>
            {serie.name}
          </h2>
          <h2 className={styles.subTitle}>
            {se} / Capitulo {episode}
          </h2>
        </div>

        <iframe 
          src={url}
          className={styles.iframe}
        />
  
        <div className={styles.episodeListBox}>
          <h2 className={styles.episodeListTitle}>
            {se}
          </h2>

          <ul className={styles.episodeList}>
            {
              season.episodes.map(eps => {
                cap++
                let epNo = cap;
                return (
                  <li
                    key={eps.url}
                    className={styles.episodeListItem}
                    onClick={e=>{ShowEpisode(e,epNo,eps.url)}}
                  >
                    Capitulo {cap}
                  </li>
                )
              })
            }
          </ul>
        </div>

      </section>
    )
  }

}
