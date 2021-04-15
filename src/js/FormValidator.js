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
                this.validateFields(input)
            })
        })
    }

    validateOnEntry() {
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`)
            input.addEventListener('input', e => {
                this.validateFields(input)

            })
            input.addEventListener('select', e => {
                this.validateFields(input)
            })
        })
    }

    validateFields(input) {
        input.type === 'password' ? input.value = input.value.trim().replace(/\s+/g, '') : input.value = input.value.trimStart().replace(/\s{2,}/g, ' ')

        let div = input.parentElement
        let span = input.parentElement.nextSibling
        let value = input.value

        if (value.length < 1) {
            span.innerHTML = 'Required field'
            div.style.border = '1px solid red';
            div.style.marginBottom = '9px';
            div.style.borderRadius = '7px'
        } else if (value === 'country') {
            span.innerHTML = 'Required field'
            div.style.border = '1px solid red';
            div.style.marginBottom = '9px';
            div.style.borderRadius = '7px';
        } else if (value !== 'country' && input.id === 'countries') {
            div.removeAttribute('style')
            span.innerHTML = ''
        } else if (value.length > 0 && input.id === 'name') {
            div.removeAttribute('style')
            span.innerHTML = ''
        } else if (input.id === 'password' && input.value.length < 8) {
            span.innerHTML = 'Password should be at least 8 symbols long'
            div.style.border = '1px solid red';
            div.style.marginBottom = '9px';
            div.style.borderRadius = '7px'
        } else if ((input.id === 'password' && input.value.length > 7)) {
            span.innerHTML = ''
            div.removeAttribute('style')
        }
    }

    unlockButton() {
        let terms = document.getElementById('terms')
        let button = document.querySelector('button')

        terms.addEventListener('change', e => {
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


