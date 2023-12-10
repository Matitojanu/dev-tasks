import React from 'react';

import {listElement, listStyle, buttonStyle, Checkbox} from './TaskList.module.scss'
export function TaskList(){
    const tasks = [{ id: 1, text: 'Task 1', completed: false }, { id: 2, text: 'Task 2', completed: false }];

    const listTasks = tasks.map(task =>
        <li className={listElement}><input type="checkbox" className={Checkbox}></input>{' '+task.id+'. '+task.text+' '}<button className={buttonStyle}>Remove</button></li>)


    return <div>
        <ul className={listStyle}>{listTasks}</ul>
    </div>
}