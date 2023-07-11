import React from 'react';
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'

export default function Header() {
    return (
        <header className='fixed left-0 top-0 w-screen h-20 py-25px px-76px flex items-center justify-between'>
            <div className='flex items-center'>
                <img src={logo} className='ml-76 w-55 h-30' />
                <span className='ml-3 text-3xl font-bold'>COZ Shopping</span>
            </div>
            <img src={menu} className='mr-76 w-34 h-6' />
        </header>
    );
}