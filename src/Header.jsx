import { useState } from 'react'
import "./index.css"

const Peader = ({title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  )
}

export default Peader