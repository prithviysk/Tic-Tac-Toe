import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import TicTacToe from './components/TicTacToe'

function App() {

  return (
    <>
      <Header/>
      <TicTacToe />
    </>
  )
}

export default App
