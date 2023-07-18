import React from "react";
import List from "../components/List";

export default function MainPage({ isData, bookmarkList, setBookmarkList }) {
  return (
    <main>
      <section className="py-6">
        <span className="px-76 text-2xl font-bold">상품 리스트</span>
        <span></span>

        {/* 삼항연산자로 오류 막기 src={isData ? isData[0].img_url : ''}*/}
        <ul className="px-16 flex flex-nowrap min-w-[1280px]">
          {/* map 돌려서 사진 띄우기 */}
          {isData &&
            isData
              .map((obj, idx) => (
                <List
                  key={idx}
                  obj={obj}
                  bookmarkList={bookmarkList}
                  setBookmarkList={setBookmarkList}
                />
              ))
              .slice(0, 4)}
        </ul>
      </section>

      <section className="py-3">
        <span className="px-76 text-2xl font-bold">북마크 리스트</span>
        <ul className="px-16 flex flex-nowrap min-w-[1280px]">
          {/* map 돌려서 사진 띄우기 */}
          {bookmarkList
            .map((obj, idx) => (
              <List
                key={idx}
                obj={obj}
                bookmarkList={bookmarkList}
                setBookmarkList={setBookmarkList}
              />
            ))
            .slice(0, 4)}
        </ul>
      </section>
    </main>
  );
}
