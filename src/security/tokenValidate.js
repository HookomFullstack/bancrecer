export const tokenValidate = ({
    values,
    tokenMode,
    errorToken = 'El campo del token es requerido',
}) => {

    let errors = {}
    
    // if (values.token == false && tokenMode !== 'method') { errors.token = errorToken }
    // if (values.token.lentgh <= 7 ) { errors.token = 'El token debe contener 8 digitos' }
    return errors

}