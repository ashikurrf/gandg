
//login page passaward show and hide//
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});
$(document).ready(function() {
    $("#confirm_show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#confirm_show_hide_password input').attr("type") == "text"){
            $('#confirm_show_hide_password input').attr('type', 'password');
            $('#confirm_show_hide_password i').addClass( "fa-eye-slash" );
            $('#confirm_show_hide_password i').removeClass( "fa-eye" );
        }else if($('#confirm_show_hide_password input').attr("type") == "password"){
            $('#confirm_show_hide_password input').attr('type', 'text');
            $('#confirm_show_hide_password i').removeClass( "fa-eye-slash" );
            $('#confirm_show_hide_password i').addClass( "fa-eye" );
        }
    });
});
//login page passaward show and hide  END//

//HOME PAGE SLIDER //
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true
        }
    }
});
//HOME PAGE SLIDER END