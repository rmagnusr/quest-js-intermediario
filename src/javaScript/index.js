const form = document.getElementById('formulario')
const campos = document.querySelectorAll('.campo')
const alertas = document.querySelectorAll('.alerta')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  campos.forEach((campos, index) => {

  if (campos.value == ""){
    alertas[index].classList.add('visivel')
  campos.classList.add('invalid')
}else {
  campos.classList.remove('invalid')
    campos.classList.add('valid')
    alertas[index].classList.remove('visivel')
   
}
  })
})

  campos.forEach((input, index) => {
input.addEventListener('input', function (event){
  if (input.value == ""){
    
    input.classList.add("invalid")
    input.classList.remove("valid")
    alertas[index].classList.add('visivel')
  } else {
    input.classList.remove("invalid")
    input.classList.add("valid")
    alertas[index].classList.remove('visivel')
  }
})})