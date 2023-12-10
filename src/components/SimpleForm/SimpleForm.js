import React from 'react';

import { inputField, submitButton, formContainer } from './SimpleForm.module.scss';
export function SimpleForm(){

    function submit(){
        console.log(document.getElementById('name').getValue())
        console.log(document.getElementById('e-mail').getValue())
    }

    return (
        <div className={formContainer}>
            <form className="form">
                <input id={'name'} className={inputField} type="text" placeholder="Name"></input>
                <input id={'e-mail'} className={inputField} type="email" placeholder="E-mail"></input>
                <button className={submitButton} type="submit" id="login-button" onClick={submit}>Submit</button>
            </form>
        </div>
    );
}

