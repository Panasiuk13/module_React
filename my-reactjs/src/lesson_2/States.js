import React, { useState } from 'react'


function States() {
    // Вариант 1
    // Лучше не использовать!
    // const state = useState(0);

    // const count = state[0];
    // const setCount = state[1];

    const [count, setCount] = useState(0)
    const [inUser, setInUser] = useState(false)

    function cube(number) {
        return number ** 3
    }

    function addCountState() {
        setCount(count + 1);
    }

    return (
        <div>
        <div>
        <p>State: { count }</p>
    <p>Cube {count}: { cube(count) }</p>
    <button onClick={addCountState}>Add</button>
        </div>
        <div>
        Hello, { inUser ? 'User !' : 'Guest !' }
    </div>

    <button onClick={() => { setInUser(!inUser) }}>
    { inUser ? 'Log out' : 'Log in' }
</button>
    </div>
)
}

export default States