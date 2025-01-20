export const emailAndPhoneValidate = ({values}) => {

    let errors = {}
    
    if (values.correo == false) {
        errors.correo = 'El campo correo es requerido'
    }

    if (values.celular == false) {
        errors.celular = 'El campo del numuero celular es requerido'
    }
    if (values.celular.length <= 9) {
        errors.celular = 'El numero telefonico debe tener 10 digitos'
    }

    return errors

}