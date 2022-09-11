// Initialize AOS
AOS.init();


/*=============================================
  =                 Preloader                 =
  =============================================*/
$(window).on('load', function()
{
  setTimeout(function()
  {
    $('#preloader').fadeOut('slow',function(){
      $(this).hide();
    });
  }, 3000);
});


/*=============================================
  =                [ Scroll action ]          =
  =    Menu sticky & Highlight active link    =
  =============================================*/
var screenSize = $(window).width();
  
$(window).on('scroll', function() 
{
  //Menu sticky
  var scroll = $(window).scrollTop();
  var headerHeight = $('.header-sticky').height();
  if (screenSize >= 320) 
  {
    if (scroll < headerHeight) 
    {
      $('.header-sticky').removeClass('is-sticky');
    } 
    else 
    {
      $('.header-sticky').addClass('is-sticky');
    }
  }

  //Hightlight active link
  var position = window.pageYOffset;
  $('section').each(function () {
    var target = $(this).offset().top - 100;
    var id = $(this).attr('id');
    var navLinks = $('.header-area nav ul li a');
    if (position >= target) {
      navLinks.removeClass('active');
      $('.header-area nav ul li a[href="#' + id + '"]').addClass('active');
    }
  });
});


/*=============================================
  =                 PROJECTS                  =
  =============================================*/
// init Isotope
var $grid = $('#project-list').isotope(
{
  // options
  itemsSelector: '.project-item',
  layoutMode: 'fitRows'
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function()
{
  var filterValue = $(this).attr('data-filter');

  $grid.isotope({ filter: filterValue });

  $('.filter-button-group .tab-btn').removeClass('active');
  $(this).addClass('active');

});


/*=====================================================
  =                [ Click action ]                   =
  =    mobile menu active & navigation link active    =
  =====================================================*/
$("#menu-trigger").on('click', function()
{
  $("#menu-overlay").addClass("active");
  $("#menu-close").addClass("active");
});

$(".navbar-list").on('click', function()
{
  $("#menu-overlay").removeClass("active");
});

$("#menu-close").on('click', function()
{
  $("#menu-overlay").removeClass("active");
});


$('.header-area nav ul li a').on('click', function()
{
  $('.header-area nav ul li a').removeClass('active');
  $(this).addClass('active');

  thisAttrHref = $(this).attr('href');

  thisAttrHrefOffset = $(thisAttrHref).offset().top - 50;

  $('html,body').animate({scrollTop: thisAttrHrefOffset});

  event.preventDefault();
});


