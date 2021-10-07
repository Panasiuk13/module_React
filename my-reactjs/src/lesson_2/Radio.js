import './style.css';
import { useState } from 'react';

function Radio() {
    const [value, setValue] = useState(1)

    function handleChange(event) {
        setValue(event.target.value)
    }

    return(
        <div className="wrapper">
        <input type="radio" name="radio" value="1" checked={value === '1' ? true : false} onChange={handleChange} />
    <input type="radio" name="radio" value="2" checked={value === '2' ? true : false} onChange={handleChange} />
    <input type="radio" name="radio" value="3" checked={value === '3' ? true : false} onChange={handleChange} />

    <p>Value radio: { value }</p>
    </div>
)
}

export default Radio