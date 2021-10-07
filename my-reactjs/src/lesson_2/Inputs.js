import { useState } from 'react'
import './style.css'

function Inputs() {
    const [value, setValue] = useState(0)
    const [value2, setValue2] = useState(0)
    const [result, setResult] = useState(0)

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleChange2(event) {
        setValue2(event.target.value);
    }

    function resultNumber() {
        setResult(Number(value) + Number(value2))
    }

    return(
        <div className="wrapper">
        <input
    value={value}
    onChange={handleChange}
    placeholder="Enter to number 1"
        />
        +
        <input
    value={value2}
    onChange={handleChange2}
    placeholder="Enter to number 2"
        />

        <button onClick={resultNumber}>Result</button>

        <p>
        Total: { result }
</p>
    </div>
)
}

export default Inputs