console.clear()

const page1 = document.querySelector('[data-js=page1]')
const page2 = document.querySelector('[data-js=page2]')
const page3 = document.querySelector('[data-js=page3]')
const page4 = document.querySelector('[data-js=page4]')

const navBtn1 = document.querySelector('[data-js=nav-btn-1]')
const navBtn2 = document.querySelector('[data-js=nav-btn-2]')
const navBtn3 = document.querySelector('[data-js=nav-btn-3]')
const navBtn4 = document.querySelector('[data-js=nav-btn-4]')

navBtn1.addEventListener('click', () => {
  page1.hidden = false
  page2.hidden = true
  page3.hidden = true
  page4.hidden = true

  navBtn1.classList.add('navigation__link--active')
  navBtn2.classList.remove('navigation__link--active')
  navBtn3.classList.remove('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn2.addEventListener('click', () => {
  page1.hidden = true
  page2.hidden = false
  page3.hidden = true
  page4.hidden = true

  navBtn1.classList.remove('navigation__link--active')
  navBtn2.classList.add('navigation__link--active')
  navBtn3.classList.remove('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn3.addEventListener('click', () => {
  page1.hidden = true
  page2.hidden = true
  page3.hidden = false
  page4.hidden = true

  navBtn1.classList.remove('navigation__link--active')
  navBtn2.classList.remove('navigation__link--active')
  navBtn3.classList.add('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn4.addEventListener('click', () => {
  page1.hidden = true
  page2.hidden = true
  page3.hidden = true
  page4.hidden = false

  navBtn1.classList.remove('navigation__link--active')
  navBtn2.classList.remove('navigation__link--active')
  navBtn3.classList.remove('navigation__link--active')
  navBtn4.classList.add('navigation__link--active')
})

/* navBtn1.addEventListener('click', () => {
  page1.classList.remove('hidden')
  page2.classList.add('hidden')
  page3.classList.add('hidden')
  page4.classList.add('hidden')

  navBtn1.classList.add('navigation__link--active')
  navBtn2.classList.remove('navigation__link--active')
  navBtn3.classList.remove('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn2.addEventListener('click', () => {
  page1.cla
  page2.classList.remove('hidden')
  page3.classList.add('hidden')
  page4.classList.add('hidden')

  navBtn1.classList.remove('navigation__link--active')
  navBtn2.classList.add('navigation__link--active')
  navBtn3.classList.remove('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn3.addEventListener('click', () => {
  page1.classList.add('hidden')
  page2.classList.add('hidden')
  page3.classList.remove('hidden')
  page4.classList.add('hidden')

  navBtn1.classList.remove('navigation__link--active')
  navBtn2.classList.remove('navigation__link--active')
  navBtn3.classList.add('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn4.addEventListener('click', () => {
  page1.classList.add('hidden')
  page2.classList.add('hidden')
  page3.classList.add('hidden')
  page4.classList.remove('hidden')

  navBtn1.classList.remove('navigation__link--active')
  navBtn2.classList.remove('navigation__link--active')
  navBtn3.classList.remove('navigation__link--active')
  navBtn4.classList.add('navigation__link--active')
})
*/
