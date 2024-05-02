$(document).ready(function() {
  $(".draggable").draggable({
    revert: true,
    revertDuration: 0,
    zIndex: 100,
    cursor: "move"
  });

  $(".draggable").droppable({
    drop: function(event, ui) {
      var dragId = ui.draggable.attr("id");
      var droppableId = $(this).attr("id");
      
      // Swap background images
      var draggableImage = $("#" + dragId + " img").attr("src");
      var droppableImage = $("#" + droppableId + " img").attr("src");
      $("#" + dragId + " img").attr("src", droppableImage);
      $("#" + droppableId + " img").attr("src", draggableImage);
    }
  });
});