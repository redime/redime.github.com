/**
 * This script uses yepnope.js to load the site javascript files,
 * including all the libraries used.
 *
 * @autor   Carlos Eduardo Melo
 * @version 23/06/2011, 0.1
 */

Modernizr.load([
  {
    // jQuery
    load: '//ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js',
    complete: function() {
      if (!window.jQuery) {
        Modernizr.load('/js/libs/jquery.js');
      }

      $(document).ready(function() {
        
      });
    }
  },
  {
    // Flexie
    test: Modernizr.flexbox,
    load: ['/js/libs/flexie.js'],
    complete: function() {
      $(document).ready(function() {
        if (!Modernizr.flexbox) {
          $('body > *').hide();
          $('body > *').css('visibility', 'visible');
          $('body > *').fadeIn(250);
        }
      });
    }
  },
  {
    load: ['/js/slidedeck.jquery.lite.js'],
    complete: function() {
      $(document).ready(function() {
        $('#slider').wrap('<div id="slider-wrapper" />');
        $('#slider').fadeIn(250);
        $('.slidedeck').slidedeck({
          autoPlay: false,
          cycle: true,
          autoPlayInterval: 2500,
          hideSpines: true
        });
      });
    }
  },
  {
    // jQuery Menu
    load: '/js/jquery.menu.js',
    complete: function() {
      jQuery(function() {
        $('nav').createMenu();
      });
    }
  },
  {
    test: Modernizr.csstransitions,
    nope: ['/js/jquery.color.js'],
    complete: function() {
      if (!Modernizr.csstransitions) {
        $(document).ready(function() {
          $('footer > #navigation-path a').css('color', '#626266');
          $('footer > #navigation-path a').mouseenter(function() {
            $(this).animate({ color: '#00304F' }, 250, 'linear');
          });

          if (Modernizr.rgba) {
            $('nav > ul > li > a').mouseenter(function() {
              $(this).css('background-color', 'rgba(240,240,240,0)')
                .animate({ backgroundColor: '#F4F4FF' }, 250, 'linear');
            });

            $('nav > ul > li > a').mouseleave(function() {
              $(this).animate({ backgroundColor: 'rgba(240,240,240,0)' }, 250, 'linear')
                .wait(250)
                .css('background-color', null);
            });
          }

          $('footer > #navigation-path a').mouseleave(function() {
            $(this).animate({ color: '#626266' }, 250, 'linear');
          });

          $('footer .vcard a').css('color', '#817E7A');
          $('footer .vcard a').mouseenter(function() {
            $(this).animate({ color: '#F4F4FF' }, 250, 'linear');
          });

          $('footer .vcard a').mouseleave(function() {
            $(this).animate({ color: '#817E7A' }, 250, 'linear');
          });

          $('footer #stay-tune a').css('opacity', 0.5);
          $('footer #stay-tune a').mouseenter(function() {
            $(this).animate({ opacity: 1 }, 250, 'linear');
          });

          $('footer #stay-tune a').mouseleave(function() {
            $(this).animate({ opacity: 0.5 }, 250, 'linear');
          });
        });
      }
    }
  }
]);

// Google Web Fonts Loader
if (Modernizr.fontface) {
  WebFontConfig = {
    google: { families: [ 'Open Sans:regular,600,bold' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
}