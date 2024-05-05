import React, { useState } from 'react'
import { Routes, Route, Link , BrowserRouter, NavLink, Navigate } from 'react-router-dom'

import data from '../../backend/scripts/functions'
import icon from '../assets/Neko-Store-logo.png'

export const NavBar = ({listState,setListState, setNotFound, notFound}) => {

    const [search,setSearch] = useState();
    const [showMenuMobile, setMenuMobile] = useState(false);

    let styles = {

        main : 'w-full h-20 md:h-32 flex justify-center px-5',
                // desktop
        desktop: 'hidden md:flex w-11/12 lg:w-10/12 items-center justify-between',
        ul   : 'flex gap-10',
        seeker: 'relative hidden md:flex w-48 h-10 p-1 border border-blue-500 rounded-full items-center ',
        inputIcon: 'w-8 h-8 stroke-blue-500',
        input: 'w-4/5 h-10 text-sm bg-transparent outline-none px-2 text-center text-white',
        li : 'text-lg text-blue-500 hover:tracking-wider duration-300 hover:scale-125',
                // mobile
        mobile : 'relative w-full px-4 flex flex-col md:hidden z-20',
        head : 'flex w-full flex justify-between',
        menuIcon: 'w-9 h-9 z-20 stroke-blue-500',
        logoBox: 'w-24 md:w-40 h-full z-20',
        logo : 'object-contain ',
        menuList: 'flex flex-col items-center justify-center gap-8 py-10 w-full',
        menuItems: 'text-xl text-blue-500 text-center ',
        mobileSeeker: 'relative flex justify-between pr-2 w-10/12 h-10 p-1 border border-blue-500 rounded-full items-center'
    }


    showMenuMobile ? styles.menuList += ' flex' : styles.menuList += ' hidden'

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
                <div className={styles.head}>
                    <button
                        onClick={e => { ShowMenu() }}
                    >
                        <svg
                            fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.menuIcon}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>

                    <span className={styles.logoBox}>
                        <img
                            className={styles.logo}
                            src={icon}
                            alt="Neko-Store-Icon"
                        />
                    </span>
                </div>

                <ul className={styles.menuList}>
                    <li className={styles.menuItems}>
                        <a href="/neko">Inicio</a>
                    </li>

                    <li className={styles.menuItems}>
                        <a href='/categories'>
                            Categorias
                        </a>
                    </li>
                    <form
                        onChange={e => { FindSerie(e) }}
                        className={styles.mobileSeeker}
                    >
                        <input type="text" name='search' placeholder='Buscar ...' className={styles.input} />

                        <button type='submit'>
                            <svg className={styles.inputIcon} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </form>
                </ul>
            </div>

            <div className={styles.desktop}>
                <span className={styles.logoBox}>                
                    <img
                    className={styles.logo}
                    src={icon}
                    alt="Neko-Store-Icon"
                />

                </span>

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
