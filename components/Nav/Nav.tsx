import React, { useState, useEffect } from 'react'
import classes from './Nav.module.css'

function Nav() {
  const [stateNav, setStateNav] = useState(false)

  useEffect(() => {
    function handlerChangeNav() {
      if (window.scrollY >= 80) {
        setStateNav(true)
      } else {
        setStateNav(false)
      }
    }

    window.addEventListener('scroll',handlerChangeNav)
  });
  
  return (

      <div className={ stateNav ? classes.Toolbar__background : classes.Toolbar}>

        <nav className={stateNav ? classes.Toolbar__navigation__background : classes.Toolbar__navigation}>
          <div></div>

          <div className={classes.Toolbar__logo}>
            <a href="/">James Liberato</a>
          </div>

          <div className={classes.Spacer}></div>

          <div className={classes.Toolbar__navigation_items}>
            <ul>
              <li>
                <a href="/">
                  <i className="fab fa-spotify"></i>
                </a>
              </li>

              <li>
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>

              <li>
                <a>
                  <i className="fab fa-instagram"></i>
                </a>
              </li>

            </ul>

          </div>
       </nav>
      </div>
  )
}

export default Nav