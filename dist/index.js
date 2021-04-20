class Progress {
    constructor() {
    }

    initialize() {
        this.changeProgress()
        this.inputHandler()
    }

    changeProgress() {
        let input = document.querySelector('.form-svg__input')
        let progress = document.querySelector('.progress-indicator')
        let progressBar = document.querySelector('.progress-bar')
        let radius = progressBar.getAttribute('r')
        let square = Math.PI * (radius * 2);

        input.addEventListener('input', () => this.inputHandler(input, progress, square, progressBar))

    }

    inputHandler(input, progress, square, progressBar) {
        setTimeout(() => {
            (input.value > -1 && input.value < 101) ? console.log('works') : input.value = ''
            let pct = (((100 - input.value) / 100) * square);
            progress.innerHTML = input.value + '%'
            progressBar.setAttribute('stroke-dashoffset', pct.toString())
            }, 600)
        }

}

const progressBar = new Progress()
progressBar.initialize()