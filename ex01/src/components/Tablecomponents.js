import React from 'react'
import Column from './Column'

export const Tablecomponents = () => {
  return (
    <div className="flex">
    <table>
      <tbody>
        <tr>
          <Column/>
        </tr>
        <tr>
        <Column/>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Tablecomponents;