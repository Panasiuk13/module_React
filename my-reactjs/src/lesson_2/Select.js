import './style.css';
import { useState } from 'react';

function Select() {

    const texts = ['text1', 'text2', 'text3', 'text4', 'text5']

    const [value, setValue] = useState(texts[2])

    const options = texts.map((text, index) => {
        return <option value={text} key={index}>Option: { text }</option>
    })

    function handleChange(event) {
        setValue(event.target.value)
    }

    return(
        <div className="wrapper">
        <select value={value} onChange={handleChange}>
        { options }
        </select>

        <p>
        Выбор: { value }
</p>
    </div>
)
}

export default Select