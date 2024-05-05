import React from 'react'
import data from '../../backend/scripts/functions'
import { CardSerie } from './CardSerie'
import { AsideBar } from './AsideBar'

export const Home = ({listState,setListState}) => {

    const styles = {
        main  : 'w-full xl:w-10/12 h-full grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-center',
        cardList : 'w-full col-span-2 z-20 md:col-span-4 py-10 flex justify-center flex-wrap gap-10 py-5',

    }


  return (
    <section className={styles.main}>
        <AsideBar/>
        <ul className={styles.cardList}>
            {
                data.map(item=>{
                    return(
                        <CardSerie 
                            serie={item} 
                            key={item.name}
                        />
                    )
                })
            }
        </ul>
    </section>
  )
}
