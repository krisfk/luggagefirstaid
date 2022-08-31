/*	Menu START */
jQuery(function(){
	"use strict";
	// main navigation init
	jQuery('.sf-menu').superfish({
		delay:	300,	// one second delay on mouseout 
		animation:   {opacity:'show',height:'show'}, // fade-in and slide-down animation
		speed:       'fast',  // faster animation speed 
		autoArrows:  true,   // generation of arrow mark-up (for submenu) 
		dropShadows: false
	});
});
 /*	Menu END */
 
 /* scrolling START */

jQuery(window).load(function($) {
	var topMenuHeight = jQuery("#header-wrapper").outerHeight();
	jQuery('.main-menu').localScroll({
		offset: -130
	});
	jQuery('.mobile-menu').localScroll({
		offset: 0
	});
	jQuery('.vc_three_column_text').localScroll({
		offset: -130
	});
	jQuery('.pego-link').localScroll({
		offset: -130
	});
	jQuery('.tp-caption').localScroll({
		offset: -130
	});
});	

/* scrolling END */
 
 
/* menu effect START */
 jQuery(document).ready(function($){
	var menustate = false;
	$(".menu-icons").click(function() {
		if (menustate == false) {
			jQuery(this).parent().find(".main-menu").addClass("showmenu");
			menustate = true;
			jQuery(".menu-icon-open").fadeOut();
			jQuery(".menu-icon-close").fadeIn();
		}
		else {
			jQuery(this).parent().find(".main-menu").removeClass("showmenu");
			menustate = false;
			jQuery(".menu-icon-open").fadeIn();
			jQuery(".menu-icon-close").fadeOut();
		}
  	});
});
/* menu effect END */

 
 
 
 
 /*	Comments START */
jQuery(document).ready(function() {
	// Get #comment-section div
	var commentsDiv = jQuery('.comment-respond');
	// Only do this work if that div isn't empty
	if (commentsDiv.length) {
	// Hide #comment-section div by default
	jQuery(commentsDiv).hide();
	// Append a link to show/hide
	jQuery('<a>')
		.attr('class', 'toggle-comments')
		.attr('href', '#')
		.html('<span class="icon-bubbles"></span>'+write_a_commment)
		.insertBefore(commentsDiv);
	// Encase button in #toggle-comments-container div
	jQuery('.toggle-comments').wrap(jQuery('<div/>', {
		id: 'toggle-comments-container'
	}))
	// When show/hide is clicked
	jQuery('.toggle-comments').on('click', function(e) {
		e.preventDefault();
	// Show/hide the div using jQuery's toggle()
	jQuery(commentsDiv).slideToggle('slow', function() {
	// change the text of the anchor
		var anchor = jQuery('.toggle-comments');
		//var anchorText = anchor.html() == 'Show Comments ('+post_comments_count+')' ? 'Hide Comments ('+post_comments_count+')' : 'Show Comments ('+post_comments_count+')';
		//jQuery(anchor).html(anchorText);
	});
	});
 
	} // End of commentsDiv.length
}); 
/*	Comments END */


/*	Share socials START */
jQuery(document).ready(function($) {
 jQuery(".share-post-wrapper")
  .mouseenter(function() {
  	jQuery(this).parent().find(".socials-wrap-post").addClass("showit");
  })
  .mouseleave(function() {
    jQuery(this).parent().find(".socials-wrap-post").removeClass("showit");
  });
});
/*	Share socials END */

/*	Tags  START */
jQuery(document).ready(function($) {
 jQuery(".tags-post-wrapper")
  .mouseenter(function() {
  	jQuery(this).parent().find(".tags-wrap-post").addClass("showit");
  })
  .mouseleave(function() {
    jQuery(this).parent().find(".tags-wrap-post").removeClass("showit");
  });
});
/*	Tags  END */
 
 
  jQuery(window).scroll(function () //Binds to the window's scroll event
        { 
        var orgElementPos = jQuery('body').offset();
  		orgElementTop = orgElementPos.top; 
  		var scrollFromTop = jQuery(window).scrollTop();
			if (scrollFromTop > 84) {
				jQuery('.header-wrapper').addClass('sticky-header');
				
			} else {
				jQuery('.header-wrapper').removeClass('sticky-header');
			}
  		
        }
        );
 
 
 /* mobile menu START */

jQuery(document).ready(function($){
	var slide = false;
	$(".mobile-menu-opening").click(function(){
	
		if (slide == false) {
			$(".mobile-menu-wrapper").slideDown("slow");
			slide = true;
		}
		else {
			$(".mobile-menu-wrapper").slideUp("slow");
			slide = false;
		}
  	});
});

 /* mobile menu END */
 
 
 /* pretty photo START */
jQuery(window).load(function(){
	if (jQuery("a[data-gal^='prettyPhoto']").length > 0) {
		jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});
	}
});
/* pretty photo END */	





/* about me slider START  */
if (jQuery(".about-me-slide").length > 0) {	
jQuery(document).ready(function($) {
 
  var owl = $(".about-me-slide");
 
  owl.owlCarousel({
    navigation : false,
    pagination : false,
    stopOnHover: true,
    singleItem : true,
    transitionStyle : "fadeUp",
    autoPlay : 5000
  });
 
});
}
/* about me slider END  */	

/* post socials START */
jQuery( document ).ready(function($) {
$('.social-item').hover(function () {
    $('.icon', this).toggleClass('active');
    $('.icon', this).css({'display':'block'});
});
});
/* post socials END */

/* Circle progress bar START */
function easyCharts() {
	   jQuery('.easyPieChart').each(function () {
			var $this, $parent_width, $chart_size;
			$this =jQuery(this);
			$parent_width = jQuery(this).parent().width();
			$chart_size = $this.attr('data-barSize');
			if (!$this.hasClass('chart-animated')) {
				$this.easyPieChart({
					animate: 3000,
					lineCap: 'round',
					lineWidth: $this.attr('data-lineWidth'),
					size: $chart_size,
					barColor: $this.attr('data-barColor'),
					trackColor: $this.attr('data-trackColor'),
					scaleColor: 'transparent',
					onStep: function (value) {
						this.$el.find('.chart-percent span').text(Math.ceil(value));
					}
				});
			}
		});
 }

jQuery(document).ready(function () {
	easyCharts();
});

/* Circle progress bar END */

/*	Share socials START */
jQuery(document).ready(function($) {
 jQuery(".share-post-wrapper")
  .mouseenter(function() {
  	jQuery(this).parent().find(".socials-wrap").addClass("showit");
  })
  .mouseleave(function() {
    jQuery(this).parent().find(".socials-wrap").removeClass("showit");
  });
  
 jQuery(".aboutme-socials-wrapper")
  .mouseenter(function() {
  	jQuery(this).parent().find(".aboutme-socials-list").addClass("showit");
  })
  .mouseleave(function() {
    jQuery(this).parent().find(".aboutme-socials-list").removeClass("showit");
  });
});
/*	Share socials END */


/*	Comments START */
jQuery(document).ready(function() {
	// Get #comment-section div
	var commentsDiv = jQuery('.comments-wrapper');
	// Only do this work if that div isn't empty
	if (commentsDiv.length) {
	// Hide #comment-section div by default
	//jQuery(commentsDiv).hide();
	// Append a link to show/hide
	jQuery('<a>')
		.attr('class', 'toggle-comments')
		.attr('href', '#')
		.html('Hide Comments ('+post_comments_count+')')
		.insertBefore(commentsDiv);
	// Encase button in #toggle-comments-container div
	jQuery('.toggle-comments').wrap(jQuery('<div/>', {
		id: 'toggle-comments-container'
	}))
	// When show/hide is clicked
	jQuery('.toggle-comments').on('click', function(e) {
		e.preventDefault();
	// Show/hide the div using jQuery's toggle()
	jQuery(commentsDiv).slideToggle('slow', function() {
	// change the text of the anchor
		var anchor = jQuery('.toggle-comments');
		var anchorText = anchor.html() == 'Show Comments ('+post_comments_count+')' ? 'Hide Comments ('+post_comments_count+')' : 'Show Comments ('+post_comments_count+')';
		jQuery(anchor).html(anchorText);
	});
	});
 
	} // End of commentsDiv.length
}); 
/*	Comments END */

/*	Testimonials START */
if (jQuery(".owl-carousel.testimonials-wrapper").length > 0) {
jQuery(document).ready(function() {
  var owl = jQuery(".owl-carousel.testimonials-wrapper");
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
      ],
      navigation : false,
      pagination : true,
      autoPlay: 5000
  });
});
}
if (jQuery(".owl-carousel.testimonials2-wrapper").length > 0) {
jQuery(document).ready(function() {
  var owl = jQuery(".owl-carousel.testimonials2-wrapper");
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1],
        [1200, 1],
        [1400, 1],
        [1600, 1]
      ],
      navigation : false,
      pagination : true,
      autoPlay: 5000
  });
});
}
/*	Testimonials END */
	
	
/* Post filter START */	
if (jQuery(".pego-isotope-wrapper").length > 0) {	
jQuery(document).ready(function(){

 jQuery(function() {
	var container = jQuery(".pego-isotope-wrapper");
	      container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "masonry",
			transitionDuration: "0.7s"	
      });
      var optionSets = jQuery(".option-set"),
          optionLinks = optionSets.find("a");

      optionLinks.click(function(){
        var $this = jQuery(this);
        
        if ( $this.hasClass("selected") ) {
          return false;
        }
        var optionSet = $this.parents(".option-set");
        optionSet.find(".selected").removeClass("selected");
        $this.addClass("selected");
  
        var options = {},
            key = optionSet.attr("data-option-key"),
            value = $this.attr("data-option-value");
     
        value = value === "false" ? false : value;
        options[ key ] = value;
        if ( key === "layoutMode" && typeof changeLayoutMode === "function" ) {
         
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          container.isotope( options );
        }
        
        return false;
      });
	
	
 });
});  

jQuery(window).load(function(){
	var container = jQuery(".pego-isotope-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });
});

jQuery(window).load(function(){
 	setTimeout(function(){
		var container = jQuery(".pego-isotope-wrapper");
	        container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "masonry",
			transitionDuration: "0.7s"	
      });
	  },700);
});

jQuery(window).load(function(){
	var currentItemWidth = jQuery(".portfolio-items-single").innerWidth();
	if (currentItemWidth < 200) {
		jQuery(".pego-isotope-wrapper").addClass("portfolio-items-smaller");
	} else {
		jQuery(".pego-isotope-wrapper").removeClass("portfolio-items-smaller");
	}
});


(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


jQuery(window).smartresize(function(){
	"use strict";
  	var container = jQuery(".pego-isotope-wrapper");
	    container.isotope({
		itemSelector : ".isotope-item",
		layoutMode: "masonry",
		transitionDuration: "0.7s"	
    });
    
  
	var currentItemWidth = jQuery(".portfolio-items-single").innerWidth();
	if (currentItemWidth < 200) {
		jQuery(".pego-isotope-wrapper").addClass("portfolio-items-smaller");
	} else {
		jQuery(".pego-isotope-wrapper").removeClass("portfolio-items-smaller");
	}
	
});
}

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

if (jQuery(".pego-isotope-wrapper-fitrows").length > 0) {	
	jQuery(document).ready(function(){

	 jQuery(function() {
		var container = jQuery(".pego-isotope-wrapper-fitrows");
			  container.isotope({
				itemSelector : ".isotope-item",
				layoutMode: "fitRows",
				transitionDuration: "0.7s"	
		  });
		  var optionSets = jQuery(".option-set"),
			  optionLinks = optionSets.find("a");

		  optionLinks.click(function(){
			var $this = jQuery(this);
		
			if ( $this.hasClass("selected") ) {
			  return false;
			}
			var optionSet = $this.parents(".option-set");
			optionSet.find(".selected").removeClass("selected");
			$this.addClass("selected");
  
			var options = {},
				key = optionSet.attr("data-option-key"),
				value = $this.attr("data-option-value");
	 
			value = value === "false" ? false : value;
			options[ key ] = value;
			if ( key === "layoutMode" && typeof changeLayoutMode === "function" ) {
		 
			  changeLayoutMode( $this, options )
			} else {
			  // otherwise, apply new options
			  container.isotope( options );
			}
		
			return false;
		  });
	
	
	 });
	});  

	jQuery(window).load(function(){
		var container = jQuery(".pego-isotope-wrapper-fitrows");
			container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "fitRows",
			transitionDuration: "0.7s"	
		});
	});

	jQuery(window).load(function(){
		setTimeout(function(){
			var container = jQuery(".pego-isotope-wrapper-fitrows");
				container.isotope({
				itemSelector : ".isotope-item",
				layoutMode: "fitRows",
				transitionDuration: "0.7s"	
		  });
		  },700);
	});


	jQuery(window).smartresize(function(){
		"use strict";
		var container = jQuery(".pego-isotope-wrapper-fitrows");
			container.isotope({
			itemSelector : ".isotope-item",
			layoutMode: "fitRows",
			transitionDuration: "0.7s"	
		});
	
	});
	
	
	
}

/* loading animation START */
 
 jQuery(document).ready(function($) {
  
  $(".animsition").animsition({
  
    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    
    overlay               :   false,
    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});

/* loading animation START */

jQuery(document).ready(function($){
	$(function() {
		$(' .portfolio-items-wrapper .portfolio-items-single ').each( function() { $(this).hoverdir(); } );
	});
});





/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
if (jQuery("#open-button").length > 0) {
	(function() {

		var bodyEl = document.body,
			content = document.querySelector( '.container-wrapper' ),
			openbtn = document.getElementById( 'open-button' ),
			closebtn = document.getElementById( 'close-button' ),
			isOpen = false;

		function init() {
			initEvents();
		}

		function initEvents() {
			openbtn.addEventListener( 'click', toggleMenu );
			if( closebtn ) {
				closebtn.addEventListener( 'click', toggleMenu );
			}

			// close the menu element if the target it´s not the menu element or one of its descendants..
			content.addEventListener( 'click', function(ev) {
				var target = ev.target;
				if( isOpen && target !== openbtn ) {
					toggleMenu();
				}
			} );
		}

		function toggleMenu() {
			if( isOpen ) {
				classie.remove( bodyEl, 'show-sidebar' );
			}
			else {
				classie.add( bodyEl, 'show-sidebar' );
			}
			isOpen = !isOpen;
		}

		init();

	})();
}


if (jQuery("#trigger-overlay").length > 0) {
	(function() {
		var container = document.querySelector( 'div.global-wrapper' ),
			triggerBttn = document.getElementById( 'trigger-overlay' ),
			overlay = document.querySelector( 'div.fulloverlay' ),
			closeBttn = overlay.querySelector( 'button.overlay-close' );
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
			support = { transitions : Modernizr.csstransitions };

		function toggleOverlay() {
			if( classie.has( overlay, 'open' ) ) {
				classie.remove( overlay, 'open' );
				classie.remove( container, 'overlay-open' );
				classie.add( overlay, 'close' );
				var onEndTransitionFn = function( ev ) {
					if( support.transitions ) {
						if( ev.propertyName !== 'visibility' ) return;
						this.removeEventListener( transEndEventName, onEndTransitionFn );
					}
					classie.remove( overlay, 'close' );
				};
				if( support.transitions ) {
					overlay.addEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					onEndTransitionFn();
				}
			}
			else if( !classie.has( overlay, 'close' ) ) {
				classie.add( overlay, 'open' );
				classie.add( container, 'overlay-open' );
			}
		}

		triggerBttn.addEventListener( 'click', toggleOverlay );
		closeBttn.addEventListener( 'click', toggleOverlay );
	})();
}


/* Sticky header START */	

if (jQuery(".main-menu").length > 0) {
	jQuery(document).ready(function(){ 
		pego_sticky_nav();
	});

	var orgElementPos = jQuery('.main-menu').offset();
	orgElementTop = orgElementPos.top + 60;  
	jQuery(window).scroll(function() {
		pego_sticky_nav();
	});

	function pego_sticky_nav() {
	  if (jQuery(window).scrollTop() >= (orgElementTop)) { 
		jQuery('.sticky-header').slideDown(400);
	   } else {
		jQuery('.sticky-header').slideUp(400);
	   }
	}
}
/* Sticky header END */	

/* Scroll to top START */	
jQuery(document).ready(function(){
	jQuery('.scrollup').click(function () {
		jQuery('body,html').animate({ scrollTop: 0 }, 800);
		return false;
	});
});
/* Scroll to top END */	

/*	Post Carousel START */
if (jQuery(".owl-carousel.post-carousel").length > 0) {
jQuery(window).load(function() {
  var owl = jQuery(".owl-carousel.post-carousel");
  owl.owlCarousel({
     
	itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 2],
        [1000, 3],
        [1200, 4],
        [1400, 4],
        [1600, 4]
      ],
      navigation : true,
      navigationText : false
  });
});
}
/*	Post Carousel END */

/*	Post Section START */
if (jQuery(".owl-carousel.post-section").length > 0) {
jQuery(document).ready(function() {
  var owl = jQuery(".owl-carousel.post-section");
  owl.owlCarousel({
	itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 2],
        [1200, 2],
        [1400, 2],
        [1600, 3]
      ],
      navigation : true,
      navigationText : false
  });
});
jQuery(window).load(function() {
  var owl = jQuery(".owl-carousel.post-section");
  owl.owlCarousel({
	itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1],
        [1200, 2],
        [1400, 2],
        [1600, 3]
      ],
      navigation : true,
      navigationText : false
  });
});
}
/*	Post Section END */


/*	Post Slideshow START */
if (jQuery(".owl-carousel.post-slideshow").length > 0) {
jQuery(document).ready(function() {
  var owl = jQuery(".owl-carousel.post-slideshow");
  owl.owlCarousel({
   	 navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText : false
  });
});
}
/*	Post Slideshow END */
