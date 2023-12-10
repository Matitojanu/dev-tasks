import React from 'react';
import {list, listElements} from './DynamicList.module.scss'

export function DynamicList(){
    const elements = [];

        for(let i=1; i<2+1; i++){
            elements.push(<li className={listElements}>List element {i}</li>)
        }
    return <ul className={list}>{elements}</ul>
}