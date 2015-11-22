import HomepageContainer from './components/homepageContainer.js';
import WorkshopGrid from './components/workshopGrid.js';

/**
* Google Analytics Tracking script
*
*/
var gae = {
  workshop: function() {
    $("#homepage-workshop-trigger").on("click", function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Global',
        eventAction: 'Workshop Trigger',
      });
    });
  },

  about: function() {
    $("#homepage-about-trigger").on("click", function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Global',
        eventAction: 'About Trigger',
      });
    });
  },

  projectView: function() {
    $(".view-project").on("click", function() {
      ga('send', {
        hitType: 'event',
        eventCategory: 'Global',
        eventAction: 'Project View',
        eventLabel: $(this).data("title")
      });
    });
  },

  init: function() {
    var self = gae;
    self.workshop();
    self.about();
    self.projectView();
  }
};


/**
* Valet 1.5
* http://hang-up.github.io
*
*  Date: 2015-11-12
*
*/
var valet = {

  meta: {
    version: 1.5
  },

  /**
  * Array of projects to be displayed in the workshop.
  *
  */
  data : [
    {
      name: 'Matchr',
      caption: 'Matching colors made easy.',
      link: 'https://github.com/hang-up/matchr',
      thumbnail: '/Projects/Matchr/thumbnail_matchr.png'
    },

    {
      name: 'Duka',
      caption: 'An open source e-commerce application.',
      link: 'https://bitbucket.org/kemsolutions/duka',
      thumbnail: '/Projects/Duka/duka-logo.png'
    },

    {
      name: 'Solar',
      caption: 'To the sky and beyond.',
      link: '/Projects/Solar/index.html',
      thumbnail: '/Projects/Solar/thumbnail_solar.png'
    },

    {
      name: 'The Mile End Cococa Collective',
      caption: 'Coming soon...',
      link: '',
      thumbnail: '/Projects/Cocoa/thumbnail_cocoa.png'
    },

    {
      name: 'Made in France',
      caption: '"Artwork" on my way to Montreal.',
      link: '/Projects/Art_France/made_in_france.png',
      thumbnail: '/Projects/Art_France/made_in_france.png'
    },

    {
      name: 'Hang-up',
      caption: 'The redesign.',
      link: 'https://github.com/hang-up/hang-up.github.io',
      thumbnail: '/Projects/HangUp/thumbnail_hangup.png'
    },

    {
      name: 'Adblockr',
      caption: 'Why so selfish?',
      link: 'https://github.com/hang-up/adblockr',
      thumbnail: '/Projects/Adblockr/template_blockr.png'
    }
  ],


  /**
  * Boostrap various elements when first loading / resizing.
  *
  * @return {[type]} [description]
  */
  bootstrap: function() {
    $(window).on("load resize", function(){
      $(".homepage-container").css({
        width: window.innerWidth,
        height: window.outerHeight
      });

      console.log("Bootstrapped!");

      $(this).width() < 820 ?
      $("#homepage-content-logo").removeClass("large").addClass("medium") :
      $("#homepage-content-logo").removeClass("medium").addClass("large");

    });
  },


  /**
  * Shift container's origin based on the appropriate trigger.
  *
  * @param {[type]} trigger   [description]
  * @param {[type]} container [description]
  */
  setTransformOrigin: function(trigger, container) {
    var left = trigger.offset().left + trigger.width(),
    top = trigger.offset().top + trigger.width()/2 - $(window).scrollTop(),
    percentLeft = (left / ($(window).width())) * 100,
    percentTop = (top / ($(window).height())) * 100;

    container.css({
      "transform-origin" : percentLeft + "% " + percentTop + "%"
    });

  },


  /**
  * Initialize semantic's dimmer module.
  *
  *
  */
  initDimmer: function() {
    $('.preview').dimmer({
      on: 'hover'
    });
  },

  setOverflow(element, property){
    element.css("overflow", property);
  },

  /**
  * Fade and Scale the modals.
  *
  * The core logic is the same for both of the triggers, only difference happens during the first load of worskhop container,
  * the content fades in with a bit more delay.
  *
  *
  */
  openModals: function() {
    $("#homepage-workshop-trigger, #homepage-about-trigger").on("click", function() {

      // Sets the html overflow to hidden to avoid double scroll.
      valet.setOverflow($("html"), "hidden");

      var container = $($(this).data("container")),
      content = $($(this).data("content")),
      trigger = $(this);

      // Makes the trigger white and empty
      $(this).addClass("active transparent");

      // Scale and display the appropriate container once the trigger has finished its transition.
      $(this).one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){

        // Scale and fade in the container.
        container.delay(300).transition({
          opacity: 1,
          scale: 1,
          duration: 300,
          easing: 'in-out',
          complete: function() {

            // Fade in the content...
            content.delay(100).transition({ opacity: 1});

            // ... and for the workshop section, fade in the grid with a bit of delay.
            trigger.attr("id") === "homepage-workshop-trigger" ? new Function("$('.workshop-content .grid').each(function(i, e){ $(e).delay(300 + i * 500).transition({ opacity: 1 })})")() : "";

          }
        });
      });
    });
  },


  /**
  * Fade and scale out the modals.
  *
  *
  */
  closeModals: function() {
    $(".close-cross").on("click", function() {

      // Sets the html overflow to auto to allow scroll on main page.
      valet.setOverflow($("html"), "auto");

      var container =  $($(this).data("container")),
      content = $($(this).data("content")),
      trigger = $($(this).data("trigger"));

      // Fade out the content.
      content.transition({
        opacity: 0,
        duration: 300,
        easing: 'in-out',
        complete: function() {

          // Fade out and scale out the container.
          container.delay(300).transition({
            opacity: 0,
            scale: 0,
            duration: 300,
            easing: 'in-out',
            complete: function() {

              // Resets the text on trigger button...
              trigger.delay(300).removeClass("active");

              // ... When the texts is finally there, remove the .transparent class.
              trigger.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                $(this).removeClass("transparent");
              });
            }
          });
        }
      });
    });
  },


  init: function() {
    var self = valet;

    self.bootstrap();
    self.initDimmer();
    self.openModals();
    self.closeModals();
  }
}

; (function(window, document, $) {
  $(document).ready(function() {

    /**
    * Render react components.
    *
    */
    ReactDOM.render(<HomepageContainer/>, document.getElementsByClassName('homepage-container')[0]);
    ReactDOM.render(<WorkshopGrid data={valet.data} />, document.getElementById("workshop-grid"));

    /**
    * This is hackish I'll admit it... We render everything with React and wait
    * 100ms just to be sure all components are at their right place. Then we set
    * the transform origin of both containers.
    * I'll probably improve this in the future...
    *
    */
    window.setTimeout(function() {
      valet.setTransformOrigin($("#homepage-workshop-trigger"), $(".workshop-container"));
      valet.setTransformOrigin($("#homepage-about-trigger"), $(".about-container"));
    }, 100);

    /**
    * Initialize valet
    *
    */
    valet.init();

    /**
    * Initialize google analytics
    *
    */
    gae.init();
  });

})(window, window.document, jQuery, undefined);
