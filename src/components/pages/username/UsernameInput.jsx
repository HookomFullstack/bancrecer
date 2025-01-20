import React from 'react'
import { UsernameInputSelector } from './UsernameInputSelector'

export const UsernameInput = ({  
    username, handleChange, handleBlur, touched, errors, showTypeDocument,
    selectActive, setSelectActive, selectItem, setSelectItem, opciones
}) => {
  return (
    <>
        {
            showTypeDocument ? (
                <UsernameInputSelector 
                    selectActive={selectActive} 
                    setSelectActive={setSelectActive}
                    selectItem={selectItem}
                    setSelectItem={setSelectItem}
                    opciones={opciones}        
                />
            ) : null
        }

        <input 
            className="border-2"
            inputMode="text"
            name="username"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="ingresar nombre de usuario"
            required
            type="text" 
            value={username}
        />
        {/* 
            {
                touched.username && errors.username && (
                    <p>{errors.username}</p>
                )
            } 
        */}
  </>
  )
}
