class FormValidator {
    constructor(form, fields) {
        this.form = form
        this.fields = fields
    }
    initialize() {
        this.validateOnSubmit()
        this.validateOnEntry()
    }

    validateOnSubmit() {
        let self = this
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            self.fields.forEach(field => {
                const input = document.querySelector(`#${field}`)
                self.validateFields(input)
            })
        })
    }

    validateOnEntry() {
        let self = this
        this.fields.forEach(field => {
            const input = document.querySelector(`#${field}`)
            input.addEventListener('input', e => {
               self.validateFields(input)
            })
        })
    }

    validateFields(input) {
        console.log(input.parentElement.nextSibling.innerHTML = 'it works!')
        // input.nextSibling.textContent = 'it works!'
        // if (input.value === '') {
        //     console.log(document.getElementById(`${input}`))
        //     // document.getElementById(`${field}`).label.innerText = 'Look ma this works!';
        // }
        // else console.log("not empty")
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
