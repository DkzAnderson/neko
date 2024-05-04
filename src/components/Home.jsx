import React from 'react'
import data from '../../backend/scripts/functions'
import { CardSerie } from './CardSerie'

export const Home = () => {

    const styles = {
        main  : 'w-full h-full p-5 items-center justify-center',
        cardList : 'w-full flex justify-center flex-wrap gap-10 py-5',

    }


  return (
    <section className={styles.main}>
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
