import getAllByDataJs from './getAllByDataJs'

export default function navigation() {
  const pages = getAllByDataJs('page')
  const navButtons = getAllByDataJs('nav')
  const foo = 'bar'

  navButtons.forEach(button => {
    const clickedButtonName = button.dataset.name
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })
      navButtons.forEach(button => {
        button.classList.toggle(
          'navigation__link--active',
          clickedButtonName === button.dataset.name
        )
      })
    })
  })
}

/*
  const home = getByDataJs('home')
  const bookmarks = getByDataJs('bookmarks')
  const create = getByDataJs('create')
  const profile = getByDataJs('profile')

  const navBtn1 = getByDataJs('nav-btn-1')
  const navBtn2 = getByDataJs('nav-btn-2')
  const navBtn3 = getByDataJs('nav-btn-3')
  const navBtn4 = getByDataJs('nav-btn-4')

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
}
*/
