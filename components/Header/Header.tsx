import React from 'react'
import Image from 'next/image'
import classes from './Header.module.css'
import Nav from '../Nav/Nav'

function Header() {
  
  return (
    <div className={classes.Header}>

      <Nav/>

      <Image
        alt="James Liberato"
        src="/header2.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="32% 10%"
        quality={100}
      />    
    </div>
  )
}

export default Header