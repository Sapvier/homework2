class FormValidator {
    constructor(form, fields) {
        this.form = form
        this.fields = fields
    }

    initialize() {
        this.validateOnSubmit()
        this.validateOnEntry()
        this.unlockButton()
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
        let div = input.parentElement
        let span = input.parentElement.nextSibling

        if (input.value.length < 1) {
            span.innerHTML = 'Required field'
            div.style.border = '1px solid red';
            div.style.marginBottom = '9px';
            div.style.borderRadius = '7px'

        } else if (input.value === 'country') {
            span.innerHTML = 'Required field'
            div.style.border = '1px solid red';
            div.style.marginBottom = '9px';
            div.style.borderRadius = '7px'
        }
        else if (input.value !== 'country' && input.id === 'countries') {
            div.removeAttribute('style')
            span.innerHTML = ''
        }
        else if (input.value.length > 0 && input.id === 'name') {
            div.removeAttribute('style')
            span.innerHTML = ''
        } else if (input.id === 'password' && input.length < 8) {
            span.innerHTML = 'Password should be at least 8 symbols long'
            div.style.border = '1px solid red';
            div.style.marginBottom = '9px';
            div.style.borderRadius = '7px'
        } else if (input.id === 'password' && input.value.trim().length < 8) {
            span.innerHTML = 'Password should be at least 8 symbols long'
            div.style.border = '1px solid red';
            div.style.marginBottom = '9px';
            div.style.borderRadius = '7px'
        } else if ((input.id === 'password' && input.value.trim().length > 7)) {
            span.innerHTML = ''
            div.removeAttribute('style')
        }
    }

    unlockButton() {
        let terms = document.getElementById('terms')
        let button =  document.querySelector('button')

        terms.addEventListener('change', e => {
            if (terms.checked) {
                button.disabled = false
                button.style.backgroundColor = 'dodgerblue'
            }
            else {
                button.disabled = false
                button.style.backgroundColor = 'silver'
            }
        })
    }
}



const form = document.querySelector('#form')
const fields = ['name', 'password', 'countries']


const validator = new FormValidator(form, fields)
validator.initialize()


document.getElementById("eye").onclick = () => {
    document.getElementById("password").attributes["type"].value = 'text'
    document.getElementById('eye').style.display = 'none'
    document.getElementById('eye-slashed').style.display = 'block'

}
document.getElementById("eye-slashed").onclick = () => {
    document.getElementById("password").attributes["type"].value = 'password'
    document.getElementById('eye-slashed').style.display = 'none'
    document.getElementById('eye').style.display = 'block'

}
