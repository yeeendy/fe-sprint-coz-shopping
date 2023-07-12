import React from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'


function App() {

  return (
    <RecoilRoot>
      <Header />
      <Footer />
    </RecoilRoot>
  )
}

export default App
