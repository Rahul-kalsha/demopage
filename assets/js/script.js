$(document).ready(function() {
    $(".hamburger-menu a").click(function(event){
        if ($(this).closest(".header-section").hasClass("mobile-slide-down")) {
            $(this).closest(".header-section").removeClass("mobile-slide-down");
        } else {
            $(this).closest(".header-section").addClass("mobile-slide-down");
        }
        // console.log($(event.target), $(this));
    });
    var sticky = $("header").offset().top;
    $(document).on( "scroll", function() {
        if ($(window).scrollTop()  > sticky) {
            $("header").addClass("sticky");
          } else {
            $("header").removeClass("sticky");
          }
        // console.log('?????sticky', sticky, $(window).scrollTop())
    });
});