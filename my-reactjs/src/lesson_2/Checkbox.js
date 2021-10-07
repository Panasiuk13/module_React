import './style.css'
import { useState } from 'react'

function Checkbox() {
  const [checked, setChecked] = useState(true)

  function handleChecked() {
    setChecked(!checked);
  }

  return(
      <div className="wrapper">
      <input type="checkbox" checked={checked} onChange={handleChecked} />

  <p>Состояние: { checked ? 'отмечен' : 'не отмечен' }</p>
  </div>
)
}

export default Checkbox