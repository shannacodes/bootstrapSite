$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    
    // When blueSmall-button is clicked, it collapses everything that is not set to the data-target.
    $(".blueSmall-button").click(function() {
      let target = $(this).data("target");
      $(".collapse").not(target).collapse("hide");
    });
});

