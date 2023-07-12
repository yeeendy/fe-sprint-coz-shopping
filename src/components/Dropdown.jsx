import React from 'react';
import productIcon from '../assets/productIcon.svg'
import bookmark from '../assets/bookmark.svg'

export default function Dropdown() {

    return (
        <div className='absolute bg-white right-8 top-10 w-200 h-150 flex flex-col justify-center items-center rounded-xl shadow-lg'>
            <div className='flex-1 flex items-center border-b-2'>
                <span className='font-inter'>OOO님, 안녕하세요!</span>
            </div>
            <div className='flex-1 flex items-center cursor-pointer border-b-2'>
                <img src={productIcon} className='px-2' />
                <span className='font-inter'>상품리스트 페이지</span>
            </div>
            <div className='flex-1 flex items-center cursor-pointer'>
                <img src={bookmark} className='px-2' />
                <span className='font-inter'>북마크 페이지</span>
            </div>

        </div>
    );
}