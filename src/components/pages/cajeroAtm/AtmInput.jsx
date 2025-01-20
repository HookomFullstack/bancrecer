import React from 'react'

export const AtmInput = ({
    atmPassword, handleChange, handleBlur, touched, errors,
}) => {
  return (
  <>
      <input 
          className="border-2"
          inputMode='numeric' 
          name="atmPassword"
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Digita tu clave de cajero automático"
          required
          type="text" 
          value={atmPassword.slice(0, 4).replace(/[^0-9]*$/, '')}
      />
      {/* 
        {
          touched.atmPassword && errors.atmPassword && (
          <p>{errors.atmPassword}</p>
          )
        } 
      */}
    </>
  )
}
