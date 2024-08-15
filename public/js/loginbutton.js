const login = async (event) => {
  event.preventDefault();
  
  console.log('HI');
  document.location.replace('/login')
}

document.querySelector('#login').addEventListener('click', login);