class FormValidator {
    constructor(form, fields) {
        this.form = form
        this.fields = fields
    }

    initialize() {
        this.validateOnSubmit()
        this.validateOnEntry()
        this.unlockButton()
        this.showPassword()
    }

    validateOnSubmit() {
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.fields.forEach(field => {
                const input = document.querySelector(`#${field}`)
                input.value = input.value.trim()
                this.validateFields(input)
            })
        })
    }

    validateOnEntry() {
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`)
            input.addEventListener('input', () => {
                this.validateFields(input)

            })
            input.addEventListener('select', () => {
                this.validateFields(input)
            })
        })
    }

    validateFields(input) {
        input.id === 'password' ? input.value = input.value.replace(/\s+/g, '') : input.value = input.value.trimStart().replace(/\s{2,}/g, ' ')

        let div = input.parentElement
        let span = input.parentElement.nextSibling
        let value = input.value
        let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

        if (value.length < 1) {
            div.classList.add("with-errors")
            span.innerHTML = 'Required field'
        } else if (value === 'country') {
            span.innerHTML = 'Required field'
            input.classList.add("with-errors")
        } else if (value !== 'country' && input.id === 'countries') {
            input.classList.remove("with-errors")
            span.innerHTML = ''
        } else if (value.length > 0 && input.id === 'name') {
            div.classList.remove("with-errors")
            span.innerHTML = ''
        } else if (input.id === 'password' && !regex.test(input.value)) {
            span.innerHTML = 'Password must contain at least 8 characters, including uppercase, lowercase letter and a number.';
            div.classList.add("with-errors")
        } else if (input.id === 'password' && regex.test(input.value)) {
            span.innerHTML = '';
            div.classList.remove("with-errors")
        }
    }

    unlockButton() {
        let terms = document.getElementById('terms')
        let button = document.querySelector('button')

        terms.addEventListener('change', () => {
            if (terms.checked) {
                button.disabled = false
                button.style.backgroundColor = 'dodgerblue'
            } else {
                button.disabled = false
                button.style.backgroundColor = 'silver'
            }
        })
    }

    showPassword() {
        let eye = document.getElementById("eye")
        let eye_slashed = document.getElementById("eye-slashed")
        let password = document.getElementById("password")

        eye.addEventListener('click', () => {
            password.attributes["type"].value = 'text'
            eye.style.display = 'none'
            eye_slashed.style.display = 'block'
        })
        eye_slashed.addEventListener('click', () => {
            password.attributes["type"].value = 'password'
            eye.style.display = 'block'
            eye_slashed.style.display = 'none'
        })
    }
}



const form = document.querySelector('#form')
const fields = ['name', 'password', 'countries']


const validator = new FormValidator(form, fields)
validator.initialize()


