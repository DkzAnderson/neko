import React from 'react'
import data from '../../backend/scripts/functions'

export const AsideBar = () => {

  const styles = {
    main : 'hidden lg:flex lg:col-span-2 lg:px-5 h-full w-full items-start justify-start',
    list : 'mt-10 flex flex-col gap-2 px-2 py-2 w-full xl:w-96 bg-blue-900 rounded-lg',
    listItem:'px-4 py-2 group hover:text-green-500 hover:tracking-widest border rounded-full shadow shadow-transparent shadow-inner hover:shadow-green-500 border-transparent hover:border-green-500 duration-300 flex items-center gap-3 w-full text-white cursor-pointer',
    icon : 'w-8 h-8 stroke-sky-400 group-hover:stroke-green-500'
  }

  return (
    <aside className={styles.main}>
      <ul className={styles.list}>
        {
          data.map(e=>{
            return(
              <li className={styles.listItem} key={e.name} >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={styles.icon}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>

                <h2>
                {e.name}
                </h2>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}
