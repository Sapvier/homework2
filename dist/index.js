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

let modal = document.getElementById('expand-modal')
let expandButton = document.getElementById('expand-button')
let declineButton = document.getElementById('expand-button-decline')
let deleteButton = document.getElementById('expand-button-delete')
let animatedButton = document.getElementsByClassName('animated-button')

const animateFirst = new ModalAnimation(modal, expandButton, declineButton, deleteButton)
animateFirst.initialize()

const animateThird = new ThirdAnimation(animatedButton)
animateThird.initialize()