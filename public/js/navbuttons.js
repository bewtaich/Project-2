



$(document).ready(function () {
    const dialog =
  $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    minHeight:0.5*(window.innerHeight),
    minWidth:0.5*(window.innerWidth),
    maxHeight: 0.8*(window.innerHeight),
    maxWidth: 0.8*(window.innerWidth),
    draggable:false,
    buttons: {
      Close: function () {
        dialog.dialog("close");
      }
    }
  })
  
  $("#postButton").on("click", function () {
    dialog.dialog("open");
  });
});

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