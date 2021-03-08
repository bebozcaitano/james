
import React from 'react'

import classes from './Button.module.css'

export enum ColorType {
    primary
}

export enum ButtonType {
    Contained,
    Outlined
}

export enum ButtonFloatType {
    right,
    left
 }

type Props = {
    id ?: string,
    name ?: String,
    color?: ColorType,
    type ?: ButtonType,
    icon ?: string,
    float ?: ButtonFloatType
  }

export function Button( props : Props) {

    let buttonColor = classes.Primary;
    let buttonType = classes.Contained;
    let buttonFloat = classes.Float_Right;

    if (props.color === ColorType.primary){
        buttonColor = classes.Primary;   
    }

    if (props.type === ButtonType.Contained){
        buttonType = classes.Contained;

    } else if (props.type === ButtonType.Outlined){
        buttonType = classes.Outlined;
    }

    if (props.float === ButtonFloatType.right){
        buttonFloat = classes.Float_Right;

    } else if (props.float === ButtonFloatType.left){
        buttonFloat = classes.Float_Left;
    }
    
    const buttonClasses = [classes.Button , classes.Root, buttonType, buttonColor, buttonFloat ];

    return (
        <button 
            id={props.id}
            className={buttonClasses.join(' ')}>

            <label>
                {props.name}
            </label>   

        </button>
    );

}
   
