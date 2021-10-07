import { useState } from 'react'
import './style.css'

function Textarea() {
    const [value, setValue] = useState('')

    function lowerCase(){
        return value.toUpperCase()
    }

    return (
        <div className="wrapper">
        <textarea
    value={value}
    onChange={(event) => {
        setValue(event.target.value)
    }}
    />

    <p>{ lowerCase() }</p>
    </div>
)
}

export default Textarea