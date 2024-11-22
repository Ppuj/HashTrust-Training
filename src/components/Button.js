import React from 'react'

const Button=({label,onClick})=> {
  return (
    <div>
        {/* Day-2,task-3:Create a “Button” Component that accepts, labels (string) and onClick(function) as
        props. onClick function to be called when you click on the button. */}
      <button onClick={onClick}>{label}</button>
    </div>
  )
}
export default Button
