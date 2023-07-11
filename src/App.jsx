import React from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import Header from './components/header'
import './App.css'


function App() {

  return (
    <RecoilRoot>
      <Header />
    </RecoilRoot>
  )
}

export default App
