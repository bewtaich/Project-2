const home = async (event, req) => {
    event.preventDefault();
    document.location.replace('/')
}

const profile = async (event, req) => {
    event.preventDefault();
    document.location.replace('/profile')
}
   document.querySelector('#home').addEventListener('click', home);
  document.querySelector('#profile').addEventListener('click', profile);