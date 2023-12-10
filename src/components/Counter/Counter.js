import React from 'react';

import { container, counterDisplay, counterButtons } from './Counter.module.scss'
import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);

    return(
      <div>
          <h1 className={counterDisplay}>{counter}</h1>
          <div className={container}>
              <button className={counterButtons} onClick={() => setCounter(counter-1) }>Decrease</button>
              <button className={counterButtons} onClick={() => setCounter(counter+1)}>Increase</button>
          </div>
      </div>
    );
}