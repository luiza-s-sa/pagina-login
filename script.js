// seleção dos elementos
const loginContainer = document.querySelector('[data-container="login"]')
const registerBtn = document.querySelectorAll('[data-register]')
const loginBtn = document.querySelectorAll('[data-login]')

// definição das funções que vão
// adicionar e remover classe de active
function addActive(e) {
  e.preventDefault();
  loginContainer.classList.add('active');
}

function removeActive(e) {
  e.preventDefault();
  loginContainer.classList.remove('active');
}


// adicionar o evento aos botões
registerBtn.forEach((btn) => {
  btn.addEventListener('click', addActive)
})

loginBtn.forEach((btn) => {
  btn.addEventListener('click', removeActive)
})
