

$(document).ready(function () {
  const dialog =
$("#comments-dialog").dialog({
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
  
  $('.commentButtons').on("click", function (event, req){
    dialog.dialog("open")
    console.log(event.target.getAttribute('data-id'))

  })
});

const comments = async (event, req) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  localStorage.setItem(`comment_id`,id);
  
  // document.location.replace('/')
}


const commentButton = document.querySelectorAll('.commentButtons')

// Loop through each button and add a click event listener
commentButton.forEach(commentButton => {
    commentButton.addEventListener('click', comments);
    });
