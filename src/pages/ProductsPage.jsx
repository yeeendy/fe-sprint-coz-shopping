import React, { useState } from 'react';
import List from '../components/List';
import ctg_all_Icon from '../assets/ctg_all_Icon.svg'
import ctg_product from '../assets/ctg_product.svg'
import ctg_category from '../assets/ctg_category.svg'
import ctg_exhibition from '../assets/ctg_exhibition.svg'
import ctg_brand from '../assets/ctg_brand.svg'



export default function ProductsPage({ isData, bookmarkList, setBookmarkList }) {
    if (!isData) {
        // isData가 널인 경우 널 렌더링 또는 로딩 표시기 표시
        return null;
    }
    const [filter, setFilter] = useState('all');

    const handleFilter = (type) => {
        setFilter(type);
    };

    // 타입별로 필터링
    const filteredData = (type) => {
        if (type === 'all') {
            return isData;
        } else {
            return isData.filter((obj) => obj.type === type);
        }
    };
    return (
        <main>
            <article className='py-6'>
                <nav className='flex justify-center'>
                    <span onClick={() => handleFilter('all')} className={`text-base mx-18 flex flex-col items-center ${filter === 'all' ? 'text-accent font-bold underline underline-offset-4' : 'text-base'
                        }`}>
                        <img src={ctg_all_Icon} />
                        <span className='mt-1'>전체</span>
                    </span>
                    <span onClick={() => handleFilter('Product')} className={`text-base mx-18 flex flex-col items-center ${filter === 'Product' ? 'text-accent font-bold underline underline-offset-4' : 'text-base'
                        }`}>
                        <img src={ctg_product} />
                        <span className='mt-1'>상품</span>
                    </span>
                    <span onClick={() => handleFilter('Category')} className={`text-base mx-18 flex flex-col items-center ${filter === 'Category' ? 'text-accent font-bold underline underline-offset-4' : 'text-base'
                        }`}>
                        <img src={ctg_category} />
                        <span className='mt-1'>카테고리</span>
                    </span>
                    <span onClick={() => handleFilter('Exhibition')} className={`text-base mx-18 flex flex-col items-center ${filter === 'Exhibition' ? 'text-accent font-bold underline underline-offset-4' : 'text-base'
                        }`}>
                        <img src={ctg_exhibition} />
                        <span className='mt-1'>기획전</span>
                    </span>
                    <span onClick={() => handleFilter('Brand')} className={`text-base mx-18 flex flex-col items-center ${filter === 'Brand' ? 'text-accent font-bold underline underline-offset-4' : 'text-base'
                        }`}>
                        <img src={ctg_brand} />
                        <span className='mt-1'>브랜드</span>
                    </span>
                </nav>

                {/* 삼항연산자로 오류 막기 src={isData ? isData[0].img_url : ''}*/}
                <ul className='px-16 flex flex-wrap min-w-[1280px]'>
                    {/* map 돌려서 사진 띄우기 */}
                    {filteredData(filter).map((obj, idx) => <List key={idx} obj={obj} bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />)}
                </ul>
            </article>
        </main>
    );
}

