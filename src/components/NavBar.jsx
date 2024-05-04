import React from 'react'
import { Routes, Route, Link , BrowserRouter, NavLink, Navigate } from 'react-router-dom'

export const NavBar = () => {
    const styles = {
        main : 'w-full sm:w-10/12 h-32 flex items-center justify-between py-4 px-2',
        ul   : 'flex gap-5',
        seeker: 'flex w-48 h-10 p-1 border border-blue-500 rounded-full items-center ',
        inputIcon: 'w-8 h-8 stroke-blue-500',
        input: 'w-4/5 h-10 text-sm bg-transparent outline-none px-2 text-center text-white'
    }
    return (
        <section className={styles.main}>
            <span>
                LOGO
            </span>

            <BrowserRouter>
                <ul className={styles.ul}>
                    <li>
                        <Link to={"/neko"}>
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link>
                            Categorias
                        </Link>
                    </li>
                </ul>
            </BrowserRouter>

            <div className={styles.seeker}>
                <input type="text" className={styles.input}/>
                <svg className={styles.inputIcon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        </section>
    )
}
