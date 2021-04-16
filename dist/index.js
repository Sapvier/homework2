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
        this.validateName()
        this.validatePassword()
        this.validateSelect()
    }

    validateOnSubmit() {
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.fields.forEach(field => {
                const input = document.querySelector(`#${field}`)
                input.value = input.value.trim()
                if (field === 'password') {
                    this.validatePassword(input)
                }
                else if (field === 'name') {
                    this.validateName(input)
                }
                else this.validateSelect(input)
            })

        })
    }

    validateOnEntry() {
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`)
            input.addEventListener('input', () => {
                input.type === 'password' ? this.validatePassword(input)
                                          : this.validateName(input)
            })
            input.addEventListener('change', () => {
                this.validateSelect(input)
            })

        })
    }

    validatePassword(input) {
        let div = input.parentElement
        let span = input.parentElement.nextSibling

        let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
        if (input.value.length < 1) {
            div.classList.add("with-errors")
            span.innerHTML = 'Required field'
        }
        else if (input.id === 'password' && !regex.test(input.value)) {
            span.innerHTML = 'Password must contain at least 8 characters, including uppercase, lowercase letter and a number.';
            div.classList.add("with-errors")
        } else if (input.id === 'password' && regex.test(input.value)) {
            span.innerHTML = '';
            div.classList.remove("with-errors")
        }
    }

    validateName(input) {
        input.value = input.value.trimStart().replace(/\s{2,}/g, ' ')
        input.value = input.value.replace(/[^a-zA-ZА-я\s0-9]/g, '')

        let div = input.parentElement
        let span = input.parentElement.nextSibling

        if (input.value.length < 1) {
            div.classList.add("with-errors")
            span.innerHTML = 'Required field'
        }
        else if (input.value.length > 0 && input.id === 'name') {
            div.classList.remove("with-errors")
            span.innerHTML = ''
        }
    }
    validateSelect(input) {
        let span = input.parentElement.nextSibling

        if (input.value === 'country') {
            span.innerHTML = 'Required field'
            input.classList.add("with-errors")
        }
        else {
            input.classList.remove("with-errors")
            span.innerHTML = ''
        }
    }


    unlockButton() {
        let terms = document.getElementById('terms')
        let button = document.querySelector('.submit-button')

        terms.addEventListener('change', () => {
            if (terms.checked) {
                button.disabled = false
                button.classList.add('active')
            } else {
                button.disabled = true
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


