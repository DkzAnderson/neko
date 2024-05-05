import React, { useState } from 'react'
import { Routes, Route, Link , BrowserRouter, NavLink, Navigate } from 'react-router-dom'
import data from '../../backend/scripts/functions'


export const NavBar = ({listState,setListState, setNotFound, notFound}) => {

    const [search,setSearch] = useState();
    const [showMenuMobile, setMenuMobile] = useState(false);

    const styles = {
        main : 'w-full sm:w-10/12 h-20 md:h-32 flex items-center justify-between py-4 px-4',
        ul   : 'flex gap-10',
        seeker: 'relative flex w-48 h-10 p-1 border border-blue-500 rounded-full items-center ',
        inputIcon: 'w-8 h-8 stroke-blue-500',
        input: 'w-4/5 h-10 text-sm bg-transparent outline-none px-2 text-center text-white',
        li : 'text-lg text-blue-500 hover:tracking-wider duration-300 hover:scale-125',
        desktop: 'hidden md:flex',
        menuIcon: 'w-9 h-9 stroke-blue-500',

        mobile : 'relative flex flex-col',
        menu: 'absolute flex flex-col gap-4 bg-blue-500 px-4 -left-4 -bottom-40 py-8 w-52',
        menuItems: 'text-xl text-white'
    }

    
    function FindSerie(e){
        e.preventDefault();

        setSearch(e.target.value); 
        let serie_filter = data.filter(element => {
            return element.name.toLowerCase().includes(search.toLowerCase());
        });

        if(search.length <= 1 || serie_filter <= 0){
            serie_filter = data;
            setNotFound(true);
        } else {
            setNotFound(false);
        }

        setListState(serie_filter);
        console.log(listState);
    }

    function ShowMenu(){
        setMenuMobile(!showMenuMobile);
    }

    return (
        <section className={styles.main}>
            <div className={styles.mobile}>
                <button
                    onClick={e=>{ShowMenu()}}
                >
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.menuIcon}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </button>
                {
                    showMenuMobile ? <ul className={styles.menu}>
                       <li className={styles.menuItems}>
                            <a href="/neko">Inicio</a>
                        </li>

                        <li className={styles.menuItems}>
                            <a href='/categories'>
                                Categorias
                            </a>
                        </li>
                    </ul> : ''
                }

            </div>

            <span>
                LOGO
            </span>

            <div className={styles.desktop}>
                <BrowserRouter>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <a href="/neko">Inicio</a>
                        </li>

                        <li className={styles.li}>
                            <a href='/categories'>
                                Categorias
                            </a>
                        </li>
                    </ul>
                </BrowserRouter>

                <form
                    onChange={e => { FindSerie(e) }}
                    className={styles.seeker}
                >
                    <input type="text" name='search' className={styles.input} />

                    <button type='submit'>
                        <svg className={styles.inputIcon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </form>
            </div>

        </section>
    )
}
