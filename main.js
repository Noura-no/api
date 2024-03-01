const Form = document.getElementById('myform')
const myTitle = document.getElementById('title')
const text = document.getElementById('post')
const Btn = document.getElementById('btn')
const users = document.getElementById('user')
const msg = document.getElementById('messa')

Form.addEventListener('submit', function (e) {
  e.preventDefault()

  const firstTitle = myTitle.value
  const firstText = text.value
  if (firstTitle == '' || firstText == '') {
    showMessageError('please Enter all values')
    return;
  }
  users.innerHTML += `<li><b> <h2>${firstTitle}</h2> <h3>${firstText}</h3> </b> </li>`
  myTitle.value = ''
  text.value = ''

  function showMessageError(message) {
    msg.innerHTML = message
    msg.classList.add('error')

    setTimeout(() => {
      msg.innerHTML = ''
      msg.classList.remove('error')
    }, 2000);
    
  }

  const payload = new FormData(Form)
  
  console.log([payload])
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: payload,
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


})



  /*-----------------------------------------------------------------------*/

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json()
  })
  .then(data => {
    const el = document.getElementById('users')

    data.forEach(users => {
      const item = document.getElementById('n')
      item.innerHTML += `<h1><b>${users.id}</b></h1>`
      item.innerHTML += `<h1><b>${users.userId}</b></h1>`
      item.innerHTML += `<h2><b>${users.title}</b></h2>`
      item.innerHTML += `<h3><b>${users.body}</b></h3>`


    })

  });

(error => console.error('error', error))
