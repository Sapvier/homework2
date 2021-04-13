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
