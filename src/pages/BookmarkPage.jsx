import React, { useState } from "react";
import ctg_all_Icon from "../assets/ctg_all_Icon.svg";
import ctg_product from "../assets/ctg_product.svg";
import ctg_category from "../assets/ctg_category.svg";
import ctg_exhibition from "../assets/ctg_exhibition.svg";
import ctg_brand from "../assets/ctg_brand.svg";
import List from "../components/List";

export default function BookmarkPage({
  isData,
  bookmarkList,
  setBookmarkList,
}) {
  return (
    <main>
      <article className="py-6">
        <nav className="flex justify-center">
          <span className={`text-base mx-18 flex flex-col items-center`}>
            <img src={ctg_all_Icon} />
            <span className="mt-1">전체</span>
          </span>
          <span className={`text-base mx-18 flex flex-col items-center`}>
            <img src={ctg_product} />
            <span className="mt-1">상품</span>
          </span>
          <span className={`text-base mx-18 flex flex-col items-center`}>
            <img src={ctg_category} />
            <span className="mt-1">카테고리</span>
          </span>
          <span className={`text-base mx-18 flex flex-col items-center`}>
            <img src={ctg_exhibition} />
            <span className="mt-1">기획전</span>
          </span>
          <span className={`text-base mx-18 flex flex-col items-center`}>
            <img src={ctg_brand} />
            <span className="mt-1">브랜드</span>
          </span>
        </nav>
      </article>
      <section className="py-6">
        <span className="px-76 text-2xl font-bold">상품 리스트</span>
        <span></span>

        {/* 삼항연산자로 오류 막기 src={isData ? isData[0].img_url : ''}*/}
        <ul className="px-16 flex flex-wrap min-w-[1280px]">
          {/* map 돌려서 사진 띄우기 */}
          {bookmarkList.map((obj, idx) => (
            <List
              key={idx}
              obj={obj}
              bookmarkList={bookmarkList}
              setBookmarkList={setBookmarkList}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
