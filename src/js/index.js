
document.querySelector('button').onclick = (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let country = document.getElementById("countries").value
    let gender = document.querySelector(
        'input[name="gender"]:checked').value;
    let terms = document.getElementById("terms").checked

}



document.getElementById("eye").onclick = () => {
    if (document.getElementById("password").attributes["type"].value === "text") {
        document.getElementById("password").attributes["type"].value = 'password'
    }
    else document.getElementById("password").attributes["type"].value = 'text'
}
