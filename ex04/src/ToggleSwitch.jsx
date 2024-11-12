import React from 'react'
import {useState} from 'react'

export const ToggleSwitch = () => {
  const [Ison, setIson] = useState(false)
  return (
    <div>
      <button onClick={() => setIson(!Ison)}>
        {Ison ? 'Turn Off' : 'Turn ON'}
      </button>
    </div>
  )
}
export default ToggleSwitch