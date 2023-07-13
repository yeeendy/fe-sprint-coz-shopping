import React from 'react';
import List from '../components/List';


export default function MainPage({ isData }) {
    return (
        <main>
            <section className='py-6'>
                <span className='px-76 text-2xl font-bold'>상품 리스트</span>
                <span></span>

                {/* 삼항연산자로 오류 막기 src={isData ? isData[0].img_url : ''}*/}
                <ul className='px-16 flex flex-nowrap'>
                    {/* map 돌려서 사진 띄우기 */}
                    {isData && isData.map((obj, idx) => <List key={idx} obj={obj} />).slice(0,4)}
                </ul>
            </section>

            <section className='px-76 py-3'>
                <span className='text-2xl font-bold'>북마크 리스트</span>
            </section>
        </main>
    );
}