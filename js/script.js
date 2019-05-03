
        $(document).ready(function () {
            $(".myslider").slick({
                slidesToSgow: 1,
                slidesToScroll: 1,
                dots: true
            })
            
        });

        $(document).ready(function () {
            $(".lightgallery").lightGallery();
        });
   
        $(document).ready(function () {
            $("#header-menu").on("click", "a", function (event) {
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({
                    scrollTop: top
                }, 1500);
            });
        });
        $(document).ready(function () {
             new WOW().init();
        });
       
   