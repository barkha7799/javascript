import React, { useState } from "react"; '8.3k' (gzipped , '3.5k')
import "./App.css";

export default() => {
    const [count, setCount] = useState(0);

    return (
        <div classname="App">
        <div>count: {count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};