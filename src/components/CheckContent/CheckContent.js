import React from 'react';

import { states, container, updateButton } from './CheckContent.module.scss';
import { useState } from "react";

export function CheckContent() {
    const [state, setState] = useState('turned off');
    const [buttonState, setButton] = useState('turn on');
    const [border, setBorderColor] = useState('red')

    const updateState = () => {
        if (state === "turned off"){
            setState("turned on")
            setButton("turn off")
            setBorderColor('green')
        }else{
            setState("turned off")
            setButton("turn on")
            setBorderColor('red')
        }
    }

    return(
        <div className={container}>
            <p className={states} style={{borderColor: border}}>{state}</p>
            <button className={updateButton} onClick={updateState}>{buttonState}</button>
        </div>
    );
}