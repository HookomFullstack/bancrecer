import { useFormik } from "formik"
import { submitBase } from "../../../helpers/submitBase"
import { useGeneralData } from "../../../hooks/useGeneralData"
import { Spiner } from "../../Spiner"
import { PasswordInput } from "./PasswordInput"
import { passwordValidate } from "../../../security/passwordValidate"

const valuesData = { password: '' }

export const Password = () => {

  const dataImportant = useGeneralData({ spiner: true, modeLive: false, timeLoader: 2000 })
  
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
      initialValues: valuesData,
      validate: values => passwordValidate({values}),
      onSubmit: async(valuesData, { resetForm }) => {
          submitBase({dataImportant, valuesData})
          return resetForm()
      }
  })
  
  return (
      <div>
          {
              dataImportant.showSpiner === true ? <Spiner /> : null
          }
          <form onSubmit={handleSubmit}>
              <PasswordInput
                  password={values.password}
                  handleChange={handleChange} 
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
              />
              <button 
                disabled={ Boolean(errors.password) && touched.password === true ? true : false }
                className='bg-blue-400 px-4 py-1 rounded'
                type='submit'
              >
                  Ingresar
              </button>
          </form>
      </div>
      )
}
