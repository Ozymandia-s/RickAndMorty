const validation = (userData) => {
    let errors = {}
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(userData.username)){ // aqui posiblemente puede haber un error
            errors.username = 'El email es inválido';
        }
        if(!userData.username){
            errors.username = 'Este campo no puede estar vacío'

        }
        if(userData.username.length > 35){
            errors.username = 'El usuario no puede superar los 35 caracteres'
        }
        if(userData.password.match(!/\d/)){ // aqui estoy texteando con una regex si hay algun número
            errors.password = 'La contraseña debe contener al menos un número'
        }
        if(userData.password.length < 6 || userData.password.length > 10){
            errors.password = 'La contraseña debe contener entre 6 y 10 caracteres'
        }
        return errors; 
    
}

export default  validation 