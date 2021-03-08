import React from 'react'
import classes from './Input.module.css'

type Props = {
    id ?: string,
    name ?: String,
    type ?: string,
    placeHolder ?: string
  }

export default function Input( { id, name, type, placeHolder } : Props) {

    return(

        <div className={classes.Field}  >

          <input 
            id={id} 
            type={type} 
            className={classes.Input} 
            placeholder={placeHolder} />

          <label 
            className={classes.Label} 
            htmlFor={id}> {name} </label>

        </div>

    )

}
