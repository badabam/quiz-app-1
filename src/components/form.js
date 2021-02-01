import getAllByDataJs from '../components/getAllByDataJs'

export default function form() {
  const forms = getAllByDataJs('formInput')

  forms.forEach(formInput => {
    const textarea = formInput.querySelector('[data-js="textarea"]')
    const counter = formInput.querySelector('[data-js="counter"]')

    textarea.addEventListener('input', () => {
      const textLength = textarea.value.length
      counter.innerHTML =
        textarea.maxLength - textLength + '/' + textarea.maxLength
    })
  })
}

/* WORKS for one input area
const textarea = document.querySelector('[data-js="formInput"]')
const counter = document.querySelector('[data-js="counter"]')

textarea.addEventListener('input', () => {
  const textLength = textarea.value.length
  counter.textContent = textarea.maxLength - textLength + '/100'
  console.log(counter.textContent)
})


/* ANOTHER WAY WITH IF
const formInput = getElement('formInput')

formInput.addEventListener('input', event => {
const target = event.currentTarget;
const maxLength = target.getAttribute('maxlenght');
const currentLength = target.value.length;

if (currentLength >= maxLength) {
  return console.log ("max reached");
}

console.log(`${maxLength - currentLength + " chars left"});
})
})
*/
