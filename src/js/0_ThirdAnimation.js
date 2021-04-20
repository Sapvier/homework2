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