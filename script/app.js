const triger = document.querySelector('#triger')
const lineTwo = document.querySelector('.line-2')
const active = document.querySelector('.active')

for (const active of lineTwo) {
  active.addEventListener('click', () => {
    clear()
    active.classList.add('active')
  })
}

function clear() {
  lineTwo.forEach((active) => {
    active.classList.remove('active')
  });
}