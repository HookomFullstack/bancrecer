import React, { useState } from 'react'

export const EmailAndPhoneInput = ({correo, celular, touched, errors, handleChange, handleBlur}) => {
  
  return (
      <>
          <label htmlFor="correo">correo</label>
          <input 
            className='border-2'
            inputMode="email"
            name="correo"
            onBlur={handleBlur}
            onChange={handleChange}
            required
            type="email" 
            value={correo}

          />

          {
              touched.correo && errors.correo && (
              <p className="text-[#2c2c33] text-xs mt-1">{errors.correo}</p>
              )
          }
          <label htmlFor="celular">celular</label>
          <input 
            className='border-2'
            name='celular' 
            onBlur={handleBlur}
            onChange={handleChange}
            required
            type="tel" 
            value={celular}

          />
          {
            touched.celular && errors.celular && (
              <p className='text-[#2c2c33] text-xs mt-1'>{errors.celular}</p>
            )
          } 
      
      </>
  )
}
