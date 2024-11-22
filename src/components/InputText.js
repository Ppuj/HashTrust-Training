import React from 'react'

const InputText=({placeholder,value,handleChange})=> {
  return (
    <div>
   {/* Day2:-Task4:Create an “InputText” component. This component will take Placeholder, value and handleChange as props.
  The placeholder will be shown when there is no value. Value Props is the value that needs to be displayed in the input component.
   handleChange will call the function whenever the value of the input field is changed */}
   <input placeholder={placeholder} value={value} onChange={(e)=>handleChange(e.target.value)}></input>
    </div>
  )
}
export default  InputText
