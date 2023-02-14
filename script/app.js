const triger = document.querySelectorAll('.triger')
const text = document.querySelectorAll('.accordion__text')
const textaActive = document.querySelectorAll('.accordion__text-active')
const accordions = document.querySelectorAll('.accordion')
const accordionActive = document.querySelectorAll('.accordion__item-active')
const menu = document.querySelector('.menu')
const body = document.querySelector('.body')
const ham = document.querySelector('.hamburger')

for (const accordion of accordions) {
  accordion.addEventListener('click', () => {
    clearActiveClasses()
    accordion.classList.remove('accordion')
    accordion.classList.add('accordion__active')
    // accordion.classList.toggle('accordion__active')
  })
}

function clearActiveClasses() {
  accordions.forEach((accordion) => {
    accordion.classList.add('accordion')
    accordion.classList.remove('accordion__active')
  }
)}

function hamburger() {
  ham.classList.toggle('.hamburger-active')
  menu.classList.toggle('menu__active')
  body.classList.toggle('body__active')
}