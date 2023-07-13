import React from 'react';
import productIcon from '../assets/productIcon.svg'
import bookmark from '../assets/bookmark.svg'

export default function Dropdown() {

    return (
        <>
            {/* 말풍선 꼬다리 */}
            <div className='border-l-8 border-r-8 border-b-18 border-b-gray-100 absolute border-l-transparent border-r-transparent right-23 left-1/4'></div>
            <div className='border-l-8 border-r-8 border-b-18 border-b-white absolute border-l-transparent border-r-transparent right-23 left-1/4 top-7 z-40'></div>
            {/* 말풍선 몸통 */}
            <div className='absolute bg-white -right-8 top-10 w-200 h-150 flex flex-col items-center rounded-xl shadow-3xl z-40'>
                <div className='w-200 h-50 flex justify-center items-center border-b-2 pt-2'>
                    <span className='font-inter text-center'>OOO님, 안녕하세요!</span>
                </div>
                <div className='px-4 w-200 h-50 flex items-center cursor-pointer border-b-2'>
                    <img src={productIcon} className='px-2' />
                    <span className='font-inter'>상품리스트 페이지</span>
                </div>
                <div className='px-4 w-200 h-50 flex items-center cursor-pointer'>
                    <img src={bookmark} className='px-2' />
                    <span className='font-inter'>북마크 페이지</span>
                </div>
            </div>
        </>
    );
}