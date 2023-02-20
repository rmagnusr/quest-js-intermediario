//coletando os elementos

const form = document.getElementById('formulario')
const campo = document.getElementById('campo')
const alerta = document.getElementById('alerta')

form.addEventListener('submit', function (event) {

  if (campo.value == ""){
  event.preventDefault()
  campo.classList.add('invalid')
  alerta.innerHTML = "Campo obrigatório!"}
  
})


form.addEventListener('change', function (event) {
  if (campo.value !== ""){
    campo.classList.remove('invalid')
    campo.classList.add('valid')
  }
})