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


