
const form = document.querySelector('#form')
const fields = ['name', 'password', 'countries']


const validator = new FormValidator(form, fields)
validator.initialize()



let modal = document.getElementById('expand-modal')
let expandButton = document.getElementById('expand-button')
let declineButton = document.getElementById('expand-button-decline')
let deleteButton = document.getElementById('expand-button-delete')

const animate = new CardsAnimation(modal, expandButton, declineButton, deleteButton)
animate.initialize()


