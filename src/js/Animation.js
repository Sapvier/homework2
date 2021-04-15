class Animation {
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