const commentButton = document.getElementById('commentButton');

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
  $('#commentButton').on("click", function (){
    dialog.dialog("open")
  })
});