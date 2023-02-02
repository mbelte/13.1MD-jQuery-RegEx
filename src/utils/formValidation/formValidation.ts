const isValidName = (input: string) => {
    return /^[a-zāčēģīķļņšūž]{2,50}$/i.test(input)
}

const isValidEmail = (input: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)
}

const isValidPassword = (input: string) => {
    return /^(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,}$/i.test(input)
}

export {isValidName, isValidEmail, isValidPassword}