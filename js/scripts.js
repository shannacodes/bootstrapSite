$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

window.addEventListener("load", function(){ // Newsletter pop-up
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        30000 // Timer for 30 seconds -- I want to figure out a way to only send this once every week
    )
});

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});

