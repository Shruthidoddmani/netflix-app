export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if (!isEmailValid) return 'Email Id is not valid'
    else if (!isPasswordValid) return 'Password is not valid'
    // else if(name.trim() == '') return 'Name is not valid'
    else return null;
}

