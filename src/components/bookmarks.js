import getByDataJs from '../components/getByDataJs'

export default function bookmarks() {
  const bookmarkBtn1 = getByDataJs('bookmarkBtn1')
  const bookmarkBtn2 = getByDataJs('bookmarkBtn2')
  const bookmarkBtn3 = getByDataJs('bookmarkBtn3')
  const bookmarkOnOff1 = getByDataJs('bookmarkOnOff1')
  const bookmarkOnOff2 = getByDataJs('bookmarkOnOff2')
  const bookmarkOnOff3 = getByDataJs('bookmarkOnOff3')

  bookmarkBtn1.addEventListener('click', () => {
    bookmarkOnOff1.classList.toggle('quiz_card__bookmark--background')
  })

  bookmarkBtn2.addEventListener('click', () => {
    bookmarkOnOff2.classList.toggle('quiz_card__bookmark--background')
  })

  bookmarkBtn3.addEventListener('click', () => {
    bookmarkOnOff3.classList.toggle('quiz_card__bookmark--background')
  })
}

/* DOES NOT WORK
const bookmarkBtns = getByDataJs('bookmarkBtn')

bookmarkBtns.forEach(btn => {
  const bookmarkOnOff = btn.querySelector('[data-js="bookmarkOnOff"]')

  bookmarkOnOff.addEventListener('click', () => {
    bookmarkOnOff.classList.toggle('quiz_card__bookmark--background')
  })
})

function getElement(dataJsName) {
  return getByDataJs(`[data-js="${dataJsName}"]`)
}
*/
