import getAllByDataJs from '../components/getAllByDataJs'

export default function cards() {
  const cards = getAllByDataJs('quizCard')

  cards.forEach(card => {
    const button = card.querySelector('[data-js="quizBtnAnswer"]')
    const answer = card.querySelector('[data-js="quizAnswer"]')

    button.addEventListener('click', () => {
      answer.classList.toggle('hidden')
    })
  })
}
