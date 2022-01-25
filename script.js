const form = document.getElementById("myform")
const name = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("pass")


function submitForm(e) {
    e.preventDefault()
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3000/login')
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function(e) { 
        console.log(e)
    }
    xhr.send(`name=${name.value}`)
}
form.onsubmit = submitForm
