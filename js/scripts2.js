$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    // Shows the full menu when the "Full Menu" button is clicked
    $(".full-menu-btn").click(function() {
      $(".collapse").collapse("show");
    });

    // Shows only the corresponding menu section when a specific button is clicked
    $(".menu-btn").click(function() {
      let target = $(this).data("target");
      $(".collapse").collapse("hide");
      $(target).collapse("show");
    });
});

