class ThirdAnimation {
    constructor(animatedButton) {
        this.animatedButton = animatedButton
    }
    initialize() {
        this.clickHandler()
    }
    clickHandler() {
        this.animatedButton[0].addEventListener('click', () => {
            this.animatedButton[0].style.animationPlayState = 'running'
        })
        this.animatedButton[1].addEventListener('click', () => {
            this.animatedButton[1].style.animationPlayState = 'running'
        })
        this.animatedButton[2].addEventListener('click', () => {
            this.animatedButton[2].style.animationPlayState = 'running'
        })
        this.animatedButton[3].addEventListener('click', () => {
            this.animatedButton[3].style.animationPlayState = 'running'
        })
        console.log(animatedButton)
    }
}
class ModalAnimation {
    constructor(modal, expandButton, declineButton, deleteButton) {
        this.modal = modal
        this.expandButton = expandButton
        this.declineButton = declineButton
        this.deleteButton = deleteButton
    }

    initialize() {
        this.expandModal()
        this.closeModal()
    }

    expandModal() {
        this.expandButton.addEventListener('click', () => {
            this.modal.style.display = 'flex'
            this.expandButton.style.display = 'none'
        })
        console.log('click')
    }

    closeModal() {
        this.declineButton.addEventListener('click', () => {
            this.modal.style.display = 'none'
            this.expandButton.style.display = 'block'
        })
        this.deleteButton.addEventListener('click', () => {
            this.modal.style.display = 'none'
            this.expandButton.style.display = 'block'
        })
    }
}
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
        this.validateOnKeyDown()
    }

    validateOnSubmit() {
        let button = document.querySelector(".submit-button")
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.fields.forEach(field => {
                const input = document.querySelector(`#${field}`)
                input.value = input.value.trim()
                if (field === 'password') {
                    var validatePasswordError = this.validatePassword(input)

                }
                else if (field === 'name') {
                    var validateNameError = this.validateName(input)

                }
                else {
                    var validateSelectError = this.validateSelect(input)
                }

                if (validatePasswordError || validateNameError || validateSelectError) {
                    button.style.animation = "submitInvalid 1s"
                    button.style.animationPlayState = "running"
                }
                else {
                    button.style.animation = "submitValid 1s"
                    button.style.animationPlayState = "running"
                }
            })
        })

    }
    validateOnKeyDown() {
        this.form.onkeydown = () => this.validateOnSubmit()
    }

    validateOnEntry() {
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`)
            input.addEventListener('input', () => {
                input.id === 'password' ? this.validatePassword(input)
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
        let passwordError = false

        let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
        if (input.value.length < 1) {
            div.classList.add("with-errors")
            span.innerHTML = 'Required field'
            input.focus()
            passwordError = true
            return passwordError
        }
        else if (input.id === 'password' && !regex.test(input.value)) {
            span.innerHTML = 'Password must contain at least 8 characters, including uppercase, lowercase letter and a number.';
            div.classList.add("with-errors")
            input.focus()
            passwordError = true
            return passwordError
        } else if (input.id === 'password' && regex.test(input.value)) {
            span.innerHTML = '';
            div.classList.remove("with-errors")
            return passwordError
        }
    }

    validateName(input) {
        input.value = input.value.trimStart().replace(/\s{2,}/g, ' ')
        input.value = input.value.replace(/[^a-zA-ZА-я\s0-9]/g, '')

        let div = input.parentElement
        let span = input.parentElement.nextSibling
        let nameError = false

        if (input.value.length < 1) {
            div.classList.add("with-errors")
            span.innerHTML = 'Required field'
            nameError = true
            input.focus()
            return nameError
        }
        else if (input.value.length > 0 && input.id === 'name') {
            div.classList.remove("with-errors")
            span.innerHTML = ''
            return nameError
        }
    }
    validateSelect(input) {
        let span = input.parentElement.nextSibling
        let selectError = false

        if (input.value === 'country') {
            span.innerHTML = 'Required field'
            input.classList.add("with-errors")
            selectError = true
            return selectError
        }
        else {
            input.classList.remove("with-errors")
            span.innerHTML = ''
            document.querySelector('.submit-button').focus()
            return selectError
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

let modal = document.getElementById('expand-modal')
let expandButton = document.getElementById('expand-button')
let declineButton = document.getElementById('expand-button-decline')
let deleteButton = document.getElementById('expand-button-delete')
let animatedButton = document.getElementsByClassName('animated-button')

const animateFirst = new ModalAnimation(modal, expandButton, declineButton, deleteButton)
animateFirst.initialize()

const animateThird = new ThirdAnimation(animatedButton)
animateThird.initialize()






