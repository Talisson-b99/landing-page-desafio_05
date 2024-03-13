// accordion
document.querySelectorAll('.button-accordion').forEach((button) => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling
    const h4Element = button.querySelector('h4')
    accordionContent.classList.toggle('active')
    h4Element.classList.toggle('active')

    if(accordionContent.classList.contains('active')) {
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
    } else {
      accordionContent.style.height = 0
    }
  })
})

// menu mobile
const btnOpenMenu = document.querySelector('.btn-menu')
const btnCloseMenu = document.querySelector('.btn-close')
const menu = document.querySelector('.menu-mobile')

btnOpenMenu.addEventListener('click', () => {
  menu.classList.add('menu-active')
})

btnCloseMenu.addEventListener('click', () => {
  if(menu.classList.contains('menu-active')) {
    menu.classList.remove('menu-active')
  }
})