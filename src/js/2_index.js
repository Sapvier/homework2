
let modal = document.getElementById('expand-modal')
let expandButton = document.getElementById('expand-button')
let declineButton = document.getElementById('expand-button-decline')
let deleteButton = document.getElementById('expand-button-delete')
let animatedButton = document.getElementsByClassName('animated-button')

const animateFirst = new ModalAnimation(modal, expandButton, declineButton, deleteButton)
animateFirst.initialize()

const animateThird = new ThirdAnimation(animatedButton)
animateThird.initialize()