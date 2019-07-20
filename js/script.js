// what we do section
$(document).ready(function(){

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
    
    // The feedback input form
//     $(document).ready(function(){
             
//     var name = $("input#yourname").val();
//     var email = $("input#email").val();
//     var feedback = $("input#feedback").val();

//     alert(name + " we have received your feedback.Thank you for reaching out to us.");
// });


