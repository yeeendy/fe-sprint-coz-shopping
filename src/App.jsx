import React, { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import MainPage from './pages/mainPage'
import ProductsPage from './pages/ProductsPage'
import BookmarkPage from './pages/BookmarkPage'

//api데이터 컴포넌트 가져오기
//props로 내려받기

function App() {
  // 2. api get요청 후 받아온 데이터를 저장해두려고 
  // + 활용하기 위해 useState 사용
  const [isData, setIsData] = useState(null)

  // 3. 조회한 데이터를 활용하기 위해 getData 함수에 담았다
  const getData = () => {

    // 1. 서버에 요청 중(axios)
    return axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
      //어떻게 쓸까?
      //isData에 저장
      .then((res) => setIsData(res.data))
      //에러가 나면?
      .catch((err) => console.log(err))
  }
  // 4. getData함수를 발동시켜라! -> useEffect!
  //수단일 뿐
  //()=>{} 활용한 이유: getData말고 다른 것도 쓰고싶을 수도 있으니까
  useEffect(() => {
    //로딩창
    getData()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage isData={isData} />} />
          <Route path='/products/list' element={<ProductsPage isData={isData} />} />
          <Route path='/bookmark' element={<BookmarkPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
