import React, { ReactNode } from 'react'
import classes from './Session.module.css'

type Props = {
  children?: ReactNode
}

const Session = ({ children }: Props) => (
  <div className={classes.Session}>
   {children}
  </div>
)

export default Session
