let input = document.querySelector('input')


// Add todo 
input.addEventListener('keyup', (e) => {
  const value = document.querySelector('.list-input').value;

  const todoTemp = `
    <input class="todo__check" type="checkbox" name="done" id="">
    <p class="todo-content">${value}</p>
    <div class="btn-delete">X</div>
  `

  if(!value) return
  if (e.keyCode === 13) {
    const div = document.createElement('div')
    div.classList.add('todo')
    div.innerHTML = todoTemp
    document.querySelector('.todos').appendChild(div)
    document.querySelector('.list-input').value = ''
  }
})

//delete todo
document.querySelector('.todos').addEventListener('click', (e) => {
  const {target} = e
  if (target.classList.contains('btn-delete')) {
    target.parentNode.remove()
    return
  }

  if(target.classList.contains('todo__check')) {
    if(target.checked) {
      target.parentNode.classList.add('done')
    } else {
      target.parentNode.classList.remove('done')
    }
  }
})
