import React, { useState } from 'react'

const RadioButton = () => {
  // Day-5:component For RadioButton
  const [selectedGender, setSelectedGender] = useState('');

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div>
      Gender:
      <label>
        <input type='radio' value="Male" checked={selectedGender === 'Male'} onChange={handleChange}></input>Male
      </label>
      <label>
        <input type='radio' value="Female" checked={selectedGender === 'Female'} onChange={handleChange}></input>Female
      </label>

    </div>

  )
}

export default RadioButton
