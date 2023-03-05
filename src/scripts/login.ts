const container = document.querySelector('.container')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnLogin = document.querySelector('.btn-login')
const closePopup = document.querySelector('.close-popup')

registerLink?.addEventListener('click', () => {
  container?.classList.add('active')
})

loginLink?.addEventListener('click', () => {
  container?.classList.remove('active')
})

btnLogin?.addEventListener('click', () => {
  container?.classList.add('active-popup')
})

closePopup?.addEventListener('click', () => {
  container?.classList.remove('active-popup')
})
