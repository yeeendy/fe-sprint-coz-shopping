import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function List({ obj }) {
    const [isSelected, setIsSelected] = useState(false);
    const starColor = isSelected ? 'text-fill' : 'text-unfill'
    return (
        <section className='w-264 h-264 px-3 pt-3 relative'>

            {/* 이미지 or 브랜드 이미지 */}
            {obj && (obj.brand_image_url || obj.image_url) && (
                <img
                    src={obj.brand_image_url ? obj.brand_image_url : obj.image_url}
                    className='w-264 h-210 rounded-xl'
                    alt={obj.title || obj.brand_name}
                />
            )}
            <AiFillStar onClick={() => { setIsSelected(!isSelected) }} className={`${starColor} absolute top-190 left-224 w-6 h-6`} />
            {/* 첫 줄 */}
            <div className='flex justify-between pt-1.5'>
                {/* title or brand_name */}
                <span>
                    {obj && (obj.title || obj.brand_name) && (
                        <span className='text-base font-bold'>
                            {obj.title ? obj.title : obj.brand_name}
                        </span>
                    )}
                </span>
                {/* 비어있거나 할인율이거나 관심고객수 */}
                {/* !discountPercentage */}
                {obj && obj.discountPercentage && (
                    <span className='text-base font-bold text-dc-color'>{obj.discountPercentage}%</span>
                )}
                {obj.follower && <span className='text-base font-bold'>관심고객수</span>}
            </div>
            {/* 두 번째 줄 */}
            <div className='flex justify-between'>
                {/* !sub_title */}
                {obj && obj.sub_title ? (
                    <span className='text-base'>{obj.sub_title}</span>
                ) : (
                    <span className='text-base'>&nbsp;</span>
                )}
                {/* 비어있거나 가격이거나 팔로워수 */}
                {/* !price */}
                {obj && obj.price && <span className='text-sm'>{Number(obj.price).toLocaleString()}원</span>}
                {/* !follower */}
                {obj && obj.follower && (
                    <span className='text-base'>{obj.follower.toLocaleString()}</span>
                )}
            </div>
        </section>
    );
}