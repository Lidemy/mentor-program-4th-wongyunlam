/* eslint-disable prefer-destructuring */


function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.querySelector('.btn-create').addEventListener('click', () => {
  const value = document.querySelector('.todo__input').value;
  if (!value) return;
  const div = document.createElement('div');
  div.classList.add('todo');
  div.innerHTML = `
      <input class='todo__check' type="checkbox"/>
      <div class="todo__title">${escapeHtml(value)}</div>
      <button class="btn-delete">delete</button>
    `;
  document.querySelector('.todos').appendChild(div);
  document.querySelector('.todo__input').value = '';
});

document.querySelector('.todos').addEventListener('click', (e) => {
  const { target } = e;
  // delete todo
  console.log(target);
  if (target.classList.contains('btn-delete')) {
    target.parentNode.remove();
    return;
  }
  // check/uncheck todo
  if (target.classList.contains('todo__check')) {
    if (target.checked) {
      target.parentNode.classList.add('done');
    } else {
      target.parentNode.classList.remove('done');
    }
  }
});
