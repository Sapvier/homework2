class CardsAnimation {
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

const animate = new CardsAnimation(modal, expandButton, declineButton, deleteButton)
animate.initialize()


class Animation {
    constructor(modal, expandButton, declineButton, deleteButton) {
        this.modal = modal
        this.expandButton = expandButton
        this.declineButton = declineButton
        this.deleteButton = deleteButton
    }
    initialize() {

    }
}