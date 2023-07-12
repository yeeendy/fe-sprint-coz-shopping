import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import Dropdown from './Dropdown';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className='fixed left-0 top-0 w-screen h-20 py-25px px-76px flex items-center justify-between shadow-lg'>
            <div className='flex items-center'>
                <img src={logo} className='ml-76 w-55 h-30 cursor-pointer' />
                <span className='ml-3 text-3xl font-bold'>COZ Shopping</span>
            </div>
            <div className='relative'>
                <img src={menu} onClick={() => setIsOpen(!isOpen)} className='mr-76 w-34 h-6 cursor-pointer' />
                {isOpen && <Dropdown />}
            </div>
        </header>
    );
}