var scrolled = 0;
$(document).ready(function(){
 window.onscroll = function() {scrollFunction()};

 function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
    $('.borderBot > li > a').not(':first').hover(function(){
      $('#home').css('border-color','transparent');
    },function(){
      $('#home').css('border-color','#ffc107');
    })

    // When the user clicks on the button, scroll to the top of the document
    $("#myBtn").on("click" ,function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1000);

    });

    $(function(){
      $('.nav-link').addClass('text-secondary');
    })

    $("#textTop > h1:gt(0)").hide();
    setInterval(function() {
      $('#textTop > h1:first')
      .fadeOut(1000)
      .next()
      .slideDown(1000, "linear")
      .end()
      .appendTo('#textTop');
    }, 2000);


    $("#downClick").on("click" ,function(){
      $('html, body').animate({
        scrollTop: $(".section1").offset().top
      }, 1000);

    });

    $(document).ready(function() {
      $('.counter').counterUp({
        delay: 10,
        time: 3000
      });
    })
    $('.ulGallery > li').addClass('btn liGallery');
    $('.ulGallery > li').click(function(){
      $('.ulGallery > li').removeClass('liActive')
      $(this).addClass('liActive')
    })
    $('.imgGallery > div').addClass('sizeGallery');
    $('.imgGallery > div').addClass('col-md-6 col-sm-12');
    // $('.allBut').click(function(){

    //   $('.imgGallery > div').removeClass('hideImg')
    //   $('.imgGallery > div').addClass('showImg wow rollIn');
  

    // })
    // $('.archBut').click(function(){

    //   $('.imgGallery > div').removeClass('showImg')
    //   $('.imgGallery > div').addClass('hideImg');
    //   $('.arch').addClass('showImg wow zoomIn');
    //   new WOW().init();
    // })
    // $('.buildBut').click(function(){

    //   $('.imgGallery > div').removeClass('showImg')
    //   $('.imgGallery > div').addClass('hideImg');
    //   $('.build').addClass('showImg wow jackInTheBox');
    //   new WOW().init();
    // })
    // $('.gardenBut').click(function(){

    //   $('.imgGallery > div').removeClass('showImg')
    //   $('.imgGallery > div').addClass('hideImg');
    //   $('.garden').addClass('showImg wow zoomInRight');
    //   new WOW().init(); 
    // })
    // $('.inteBut').click(function(){

    //   $('.imgGallery > div').removeClass('showImg')
    //   $('.imgGallery > div').addClass('hideImg');
    //   $('.inte').addClass('showImg wow swing');
    //   new WOW().init(); 
    // })
    // $('.officeBut').click(function(){

    //   $('.imgGallery > div').removeClass('showImg')
    //   $('.imgGallery > div').addClass('hideImg');
    //   $('.office').addClass('showImg wow swing');
    //   new WOW().init(); 
    // })
    // $('.workBut').click(function(){

    //   $('.imgGallery > div').removeClass('showImg')
    //   $('.imgGallery > div').addClass('hideImg');
    //   $('.work').addClass('showImg wow swing');
    //   new WOW().init(); 
    // })
    
    // Process filter slides
    $('.imgGallery').children().addClass('filtr-item');
    var filterizd = $('.filtr-container').filterizr({
   //options object
    });
    



     // Process icon hover Effect
     $('.iconSec > div').addClass('marginBot');
     $('.h3Icon').hover(function(){
      $(this).parent().prev().children().children().addClass('hoverIcon');
      $(this).parent().prev().children().addClass('hoverIcon1');
    },function(){
      $(this).parent().prev().children().children().removeClass('hoverIcon');
      $(this).parent().prev().children().removeClass('hoverIcon1');
    })
     
     $('.setBg').addClass('col-md-2 col-sm-4');
     $('.textOffer').addClass('col-md-10 col-sm-8');


    // Process Accordition
    $('#myCollapsible').on('hidden.bs.collapse', function () {
      $(this).addClass('bg-warning')
    })
    $('.card-header').addClass('resizeArc');
     // add icon after and set color
     $('.mb-0').append('<i class="fas fa-angle-down float-right paddingIcon icon1 align-self-center"></i>');
    // add icon before and set color
    $('.mb-0').prepend('<i class="fas fa-check paddingIcon icon2 align-self-center"></i>');
    $('.mb-0').addClass('d-inline-flex w-100');
    $('.mb-0 > button').addClass('mr-auto')

    $('.card-header').click(function(){
      $(this).next().collapse('toggle')  
      if ($(this).find('addColor').length == 0) {
        $(this).toggleClass('addColor');
        $(this).children().children().last().toggleClass('addColorIcon')
        $(this).children().children().eq(1).toggleClass('addColorIcon')
        $(this).children().children().first().toggleClass('addColorIcon')
      }
      $('.card-header').not($(this)).removeClass('addColor');
      $('.icon1').not( $(this).children().children().last()).removeClass('addColorIcon');
      $('.icon2').not( $(this).children().children().first()).removeClass('addColorIcon');
      $('.btn-link').not( $(this).children().children().eq(1)).removeClass('addColorIcon');
    });
    $('.setImg').addClass('d-flex');
    $('.setImg > img').addClass('mx-auto');
    $('.hovereffect4 > img').addClass('w-100');
    $('.overlay4 >h2').empty();
    $("#example, .slideTop").vegas({
      slides: [
      { src: "../project/img/1(1).jpg" },
      { src: "../project/img/2(1).jpg" },
      { src: "../project/img/3(1).jpg" },
      ]
    })
    // slide multi
    
    $('.oneSlide').addClass('item');
    $('.slide1 > .owl-carousel').owlCarousel({
      items:3,
      loop:true,
      center:true,
      margin:10,
      URLhashListener:false,
      autoplayHoverPause:true,
      startPosition: 'URLHash',
      responsiveClass:false,
      responsive:{
        0:{
          items:1,
          nav:true,
          center:false
        },
        768:{
          items:2,
          nav:true,
          center:true
        },
        992:{
          items:3,
          nav:true,
          loop:false
        }
      }
    });
    $('.setSize > .owl-carousel').owlCarousel({
      items:4,
      loop:true,
      autoWidth:true,
      margin:10,
      URLhashListener:false,
      autoplayHoverPause:true,
      startPosition: 'URLHash',
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true,
          center:false
        },
        768:{
          items:2,
          nav:true,
          center:true
        },
        992:{
          items:4,
          nav:true,
          loop:false
        }
      }
    });


    $(document).ready(function() {
 
            //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
            $("#formContact").validate({
                rules: {
                    ho: "required",
                    ten: "required",
                    diachi: {
                        required: true,
                        email: true
                    },
                    sub: "required",
                    text: "required"
                },
                messages: {
                    ho: "This field is required",
                    ten: "This field is required",
                    diachi: {
                        required: "This field is required",
                        email: "Email Address in invalid format"
                    },
                    sub: "This field is required",
                    text: "This field is required"

                }
            });
        });

    $('.butSubmit').click(function(){
      $("#formContact").valid();
      $('.formLabel').addClass('fixPostion');
    })
  }) 
