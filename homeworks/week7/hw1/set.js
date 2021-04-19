const el = document.querySelector('form')
el.addEventListener('submit', (e) => {
  e.preventDefault();
  let hasError = false
  let values = {};

  const elements = document.querySelectorAll('.required')
  for(element of elements) {
    const radios = element.querySelectorAll('input[type=radio]')
    const input = element.querySelector('input[type=text]')
    let isValid = true
    if (input) {
      values[input.name] = input.value
      if (!input.value) {
        isValid = false
      }
    } else if (radios.length) {
      isValid = [...radios].some(radio => radio.checked)
      if (isValid) {
        let r = element.querySelector('input[type=radio]:checked')
        values[r.name] = r.value
      }
    } else {
      continue
    }
    
    if (!isValid) {
      element.classList.remove('hide-error')
      hasError = true
    } else {
      element.classList.add('hide-error')
    }
  }

  if (!hasError) {
    alert(JSON.stringify(values))
  }
})

