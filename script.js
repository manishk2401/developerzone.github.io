$(document).ready(function(){

    $('#menu-btn').click(changeNav);

    function changeNav(){
        $('#menu-btn i').toggleClass('menu-btn')
    }

    // init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});


// accordion
$("#accordion").accordion(); 


//progressbar
$( "#data-1" ).progressbar({
    value: 35
  });
$( "#data-2" ).progressbar({
    value: 70
  });
$( "#data-3" ).progressbar({
    value: 54
  });
$( "#data-4" ).progressbar({
    value: 86
  });

//owl corosal
$('.owl-carousel').owlCarousel({
  loop:true,
  smartSpeed:2000,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});



})
