console.clear()

const home = document.querySelector('[data-js=home]')
const bookmarks = document.querySelector('[data-js=bookmarks]')
const create = document.querySelector('[data-js=create]')
const profile = document.querySelector('[data-js=profile]')

const navBtn1 = document.querySelector('[data-js=nav-btn-1]')
const navBtn2 = document.querySelector('[data-js=nav-btn-2]')
const navBtn3 = document.querySelector('[data-js=nav-btn-3]')
const navBtn4 = document.querySelector('[data-js=nav-btn-4]')

navBtn1.addEventListener('click', () => {
  home.hidden = false
  bookmarks.hidden = true
  create.hidden = true
  profile.hidden = true

  navBtn1.classList.add('navigation__link--active')
  navBtn2.classList.remove('navigation__link--active')
  navBtn3.classList.remove('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn2.addEventListener('click', () => {
  home.hidden = true
  bookmarks.hidden = false
  create.hidden = true
  profile.hidden = true

  navBtn1.classList.remove('navigation__link--active')
  navBtn2.classList.add('navigation__link--active')
  navBtn3.classList.remove('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn3.addEventListener('click', () => {
  home.hidden = true
  bookmarks.hidden = true
  create.hidden = false
  profile.hidden = true

  navBtn1.classList.remove('navigation__link--active')
  navBtn2.classList.remove('navigation__link--active')
  navBtn3.classList.add('navigation__link--active')
  navBtn4.classList.remove('navigation__link--active')
})

navBtn4.addEventListener('click', () => {
  home.hidden = true
  bookmarks.hidden = true
  create.hidden = true
  profile.hidden = false

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
