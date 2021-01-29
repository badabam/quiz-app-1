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

// bookmark on off WORKS

const bookmarkBtn1 = getElement('bookmarkBtn1')
const bookmarkBtn2 = getElement('bookmarkBtn2')
const bookmarkBtn3 = getElement('bookmarkBtn3')
const bookmarkOnOff1 = getElement('bookmarkOnOff1')
const bookmarkOnOff2 = getElement('bookmarkOnOff2')
const bookmarkOnOff3 = getElement('bookmarkOnOff3')

bookmarkBtn1.addEventListener('click', () => {
  bookmarkOnOff1.classList.toggle('quiz_card__bookmark--background')
})

bookmarkBtn2.addEventListener('click', () => {
  bookmarkOnOff2.classList.toggle('quiz_card__bookmark--background')
})

bookmarkBtn3.addEventListener('click', () => {
  bookmarkOnOff3.classList.toggle('quiz_card__bookmark--background')
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}

/* DOES NOT WORK
const bookmarkBtns = getElement('bookmarkBtn')

bookmarkBtns.forEach(btn => {
  const bookmarkOnOff = btn.querySelector('[data-js="bookmarkOnOff"]')

  bookmarkOnOff.addEventListener('click', () => {
    bookmarkOnOff.classList.toggle('quiz_card__bookmark--background')
  })
})

function getElement(dataJsName) {
  return document.querySelector(`[data-js="${dataJsName}"]`)
}
*/

// Show answer on/off
