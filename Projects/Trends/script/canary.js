//MENU borrowed from  : http://codepen.io/icutpeople/pen/Kcxdp
var Menu = {
    el: {
        ham: $('.menu'),
        menuGlobal: $('.menu-global'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom'),
        menuCaption: $("#menu-caption"),
        menuTab: $(".menu-tab"),
        menuExpanded: $("#menu-expanded")
    },
  
    init: function() {
        Menu.bindUIactions();
    },
  
    bindUIactions: function() {
        Menu.el.ham
            .on(
                'click',
            function(event) {
                Menu.activateMenu(event);
                event.preventDefault();
            }
            );
    },
  
    activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');  
        
        if (Menu.el.menuTop.hasClass('menu-top-click'))
        {
            Menu.el.menuCaption.html("CLOSE");
            Menu.el.ham.animate( {
                "margin-left" : "59px"
            });
            Menu.el.menuGlobal.animate( {
                "border-top" : "5px solid black"
            });
            Menu.el.menuExpanded.animate( {
                "margin-left" : "0px"
            }, 600);
            
        }
        else
        {
            Menu.el.menuCaption.html("MENU");
            Menu.el.ham.animate( {
                "margin-left" : "0px"
            });
            Menu.el.menuGlobal.animate( {
                "border-top" : "5px solid white"
            });
            Menu.el.menuExpanded.animate( {
                "margin-left" : "-280px"
            }, 600);
        }
    }
};

//inspired from : http://tympanus.net/codrops/2013/05/21/natural-language-form-with-custom-input-elements/
var nlForm = {
    el: {
        overlay: $(".nl-overlay"),
        toggle: $(".nl-field-toggle"),
        listElement: $(".nl-field li"),
        container: $(".nl-field")
    },
    
    bindAction: function() {
        nlForm.el.toggle.on("click", function(e) {
            nlForm.el.container.addClass("nl-field-open");
            e.preventDefault();
        });
        
        nlForm.el.listElement.on("click", function(e) {
            nlForm.changeToggle.call(this, e);
            e.preventDefault();
        });
    },
    
    changeToggle : function() {
        var context = $(this);
        var data = context.data("val");
        var value1 = $(this).html();
        
        nlForm.el.toggle.text(value1);            
        nlForm.el.container.removeClass("nl-field-open");
        
        switch (data) {
            case "music" :
                nlForm.createHtml(Music.countEntity());
                break;
            case "movies" :
                nlForm.createHtml(Movies.countEntity());
                break;
            case "gadgets" :
                nlForm.createHtml(Gadgets.countEntity());
                break;
            case "things" :
                nlForm.createHtml(Things.countEntity());
                break;                
        }        
    },
    
    createHtml : function(array) {
        var _length = array.length;
        
        $(".effect-lily").remove();
        
        for (var i = 0; i<_length; i++)
        {
//            console.log(array[i].caption);
            
            var domElement = '<figure class="effect-lily">' +
          '    <img src="' + array[i].imagePath + '"/>' +
          '        <figcaption>' + 
          '            <h2>' + array[i].name.substring(0, array[i].name.indexOf(" ")) + '<span>' + Utils.splitString(array[i].name) + '</span></h2> ' + 
          '            <p>' + array[i].caption + '</p>' +
          '            <a href=' + array[i].link + ' target="_blank">View More</a>' +       
          '        </figcaption>' +
          '</figure>';
            
            $(".grid").hide().append(domElement).fadeIn("slow");           
        }        
    },
    
    init : function() {
        nlForm.bindAction();
    }
};

var Utils = {
    splitString : function(str) {
        res = str.split(" ").reverse();
        res.pop();
        res.reverse().join(" ");
       
        return res.toString();
    },
    
    //from : http://stackoverflow.com/a/6680877
    trailingSlash : function(link) {
        return link.replace(/\/$/, "");
    }
}


$(document).ready(function() {
    Menu.init();
    nlForm.init();
    
    //Hover workaround for touch device : http://stackoverflow.com/a/2891155
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
    
    //smooth scrolling : http://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
})

