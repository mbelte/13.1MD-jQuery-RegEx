import $ from 'jquery';
import { IndexKind, IndexType } from 'typescript';
import { isValidName, isValidEmail, isValidPassword } from './utils/formValidation/formValidation';

const displayError = (input: JQuery<HTMLInputElement>, field: string) => {
    const errorMessages = {
        name: 'The name must have at least 2 characters and can only contain letters. Max 50 characters.',
        email: 'The email must be in a valid format (e.g. example@example.com).',
        password: 'The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *).'
    }

    if(!input.hasClass('form__input--error')) {
        const   msg = errorMessages[field as keyof typeof errorMessages],
                msgHtml = $(
                    `<div class="form__error-msg-wrap">
                        <span class="form__error-msg">
                            ${ msg }
                        </span>
                    </div>
                `)

        input.addClass('form__input--error')
            .parent()
            .append(msgHtml)

        msgHtml.slideDown(350)
    }
}

const clearError = (input: JQuery<HTMLInputElement>) => {
    if (input.hasClass('form__input--error')) {
        input.removeClass('form__input--error')
            .next('.form__error-msg-wrap')
            .slideUp(350, function() {
                $(this).remove()
            })
    }
}

const displaySuccess = () => {
    $('.form__sub-heading')
        .addClass('form__sub-heading--success')
        .html('Form sumbmission successful.')
}

$<HTMLFormElement>('.form').submit(function(event) {
    event.preventDefault()
    const   name = $(this).find<HTMLInputElement>('.js-input-name > .form__input'),
            email = $(this).find<HTMLInputElement>('.js-input-email > .form__input'),
            password = $(this).find<HTMLInputElement>('.js-input-psw > .form__input')
    let errors = 0

    if (!isValidName(String(name.val()))) {
        displayError(name, 'name')
        errors++
    } else {
        clearError(name)
    }

    if (!isValidEmail(String(email.val()))) {
        displayError(email, 'email')
        errors++
    } else {
        clearError(name)
    }

    if (!isValidPassword(String(password.val()))) {
        displayError(password, 'password')
        errors++
    } else {
        clearError(name)
    }

    if (!errors) {
        $(this).find('.form__input').removeClass('form__input--error')
        displaySuccess()
    }
})