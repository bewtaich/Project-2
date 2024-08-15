const home = async (event) => {
    event.preventDefault();
    document.location.replace('/')
  }
  
  document.querySelector('#home').addEventListener('click', home);