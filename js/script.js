// what we do section
$(document).ready(function(){
    // event.preventDefault();

    $(".design,#hide1").click(function(){
        $(".design").toggle();
        $("#hide1").toggle();
    });
    $(".development,#hide2").click(function(){
        $(".development").toggle();
        $("#hide2").toggle();
    });
    $(".product,#hide3").click(function(){
        $(".product").toggle();
        $("#hide3").toggle();
    });
});


// toggle for the portfolio part.


// $("#port").hover(function(){
//     $("#hover1").slideToggle('slow');
// }, function(){
//     $("#hover1").slideToggle('slow');
// });

    
    // The feedback input form
    
    $(document).ready(function(){
    $("#messageus").submit(function() {
             
    var name = $("input#yourname").val();
    var email = $("input#email").val();
    var feedback = $("input#feedback").val();

    alert(name + " we have received your feedback.Thank you for reaching out to us.");
    event.preventDefault();
});
});



