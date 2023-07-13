import React from 'react';

export default function Footer() {
    return (
        <footer className='w-screen h-58 flex flex-col justify-center items-center'>
            <span className='font-inter font-light text-footer-color text-sm'>개인정보 처리방침 | 이용 약관</span>
            <span className='font-inter font-light text-footer-color text-sm'>All rights reserved @ Codestates</span>
        </footer>
    );
}