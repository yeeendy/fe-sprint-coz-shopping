import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className='w-screen h-20 py-25px px-76px flex items-center justify-between shadow-lg'>
            <div className='flex items-center'>
                <Link to='/'><img src={logo} className='ml-76 w-55 h-30 cursor-pointer' /></Link>
                <span className='ml-3 text-3xl font-bold'>COZ Shopping</span>
            </div>
            <div className='relative w-34 mr-76'>
                <img src={menu} onClick={() => setIsOpen(!isOpen)} className='mr-76 w-34 h-6 cursor-pointer' />
                {isOpen && <Dropdown />}
            </div>
        </header>
    );
}