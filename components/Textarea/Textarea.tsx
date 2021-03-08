import React, { useState } from 'react'
import classes from './Textarea.module.css'

type Props = {
    id ?: string,
    name ?: String,
    placeHolder ?: string,
    changeEvent ?: React.ChangeEventHandler
  }

export default function Textarea( { id, name,  placeHolder, changeEvent } : Props) {
  const [stateRows, setStateRows] = useState(1)
  //const [stateValue, setStateValue] = useState('')

  const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 19;

    const previousRows = event.target.rows;
    event.target.rows = 1;

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }      
      
    //setStateValue(event.target.value)
    setStateRows(currentRows)

    changeEvent
  }

  return(
      <div className={classes.Field}  >

        <textarea 
          id={id}
          rows={stateRows}
         //value={stateValue}
          className={classes.TextArea} 
          placeholder={placeHolder}  
          onChange={handleChange}></textarea>

        <label 
          className={classes.Label} 
          htmlFor={id}> {name} </label>

      </div>
  )
}