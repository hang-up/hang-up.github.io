/*
** morphObject is responsible for bringing the morphing ability to buttons.

elem is an object caching useful elements for later use.

morph is the main function.
It basically works like that :

- Putting an absolute div container on top of the appropriate button (called trigger) and hiding it behind
- When clicked on the trigger, add the class open responsible for bringing all the morphing effect (inspired from codrops), then changing the css to fill the entire screen on top of everything else (z-index working here)
- When clicked on the close-cross, delay the opacity change (css transition for smooth effect), then either remove the children (workshop) or hide the container (about)

*/

var morphObject = {
    elem : {
        $grid_content : $(".grid-content"),
        $footer_main : $("#footer-main"),
        $slim : $(".slim"),
        $caption : $(".caption_out"),
        
        workshop_object : {
            $trigger : $("#workshop_trigger"),
            $container : $(".EXPworkshop-container"),
            $button : $("#workshop_button"),
            height: 50,
            width: 158
        },
        
        about_object : {
            $trigger : $("#about_trigger"),
            $container : $(".EXPabout-container"),
            $button : $("#about_button"),
            height: 52,
            width: 128
        }
    },
    
    morph : function() {
        // - 7 and - 22 are arbitrary.
        var total_offset_left_workshop = parseInt($(".intro").css("padding-left").replace("px", "")) + morphObject.elem.workshop_object.$trigger.offset().left - 7,
            total_offset_left_about = parseInt($(".intro").css("padding-left").replace("px", "")) + morphObject.elem.about_object.$trigger.offset().left - 22;
        
        //setting up the workshop and about container
        //REF 1
        Utils.setupContainer(morphObject.elem.workshop_object.$container, morphObject.elem.workshop_object.$trigger, morphObject.elem.workshop_object.height, morphObject.elem.workshop_object.width, total_offset_left_workshop);
        
        Utils.setupContainer(morphObject.elem.about_object.$container, morphObject.elem.about_object.$trigger, morphObject.elem.about_object.height, morphObject.elem.about_object.width, total_offset_left_about);
        
        
        //Click on trigger events : workshop then about
        morphObject.elem.workshop_object.$trigger.click(function() {
            morphObject.elem.workshop_object.$container.addClass("open");
            $(".close-cross").css("opacity", 1);
            displayProjects.init();
            
            //REF 2
            Utils.morphOn(morphObject.elem.workshop_object.$container, morphObject.elem.workshop_object.$button, morphObject.elem.workshop_object.$trigger);
                        
            //REF 3
            Utils.setBackgroundWhite(morphObject.elem.workshop_object.$container)
            
            morphObject.elem.$grid_content.css("opacity", 1);
            morphObject.elem.$caption.css("opacity", 1);
        })
        
        morphObject.elem.about_object.$trigger.click(function() {
            morphObject.elem.about_object.$container.addClass("open");
            morphObject.elem.$slim.css( {
                "-moz-transform" : "scale(1)",
                "-webkit-transform" : "scale(1)",
                "-ms-transform" : "scale(1)",
                "transform" : "scale(1)",
                "opacity" : 1
            });
            $(".close-cross").css("opacity", 1);
            morphObject.elem.$footer_main.hide();
            
            
            Utils.morphOn(morphObject.elem.about_object.$container, morphObject.elem.about_object.$button, morphObject.elem.about_object.$trigger);
            
            //specific style applied here when morphOn is called
            morphObject.elem.about_object.$button.css( {
                "padding-top" : "4px",
                "letter-spacing" : "1px",
                "margin-left" : "-6px"
            });

            
            Utils.setBackgroundWhite(morphObject.elem.about_object.$container);
            
            morphObject.elem.$caption.css("opacity", 1);
        })
        
        //Closing events : each cross has a data-target attributes referring to the element it should close
        $(".close-cross").on("click", function() { 
            var _parent = $(this).parent();
            
            if($(this).data("target") === "workshop") {                
                morphObject.elem.$grid_content.css("opacity", 0);
                morphObject.elem.$caption.css("opacity", 0);
                $(this).css("opacity", 0);
                
                //REF 4
                Utils.morphOff(_parent, morphObject.elem.workshop_object, total_offset_left_workshop);
            
                //This has not been refactored
                setTimeout(function() {
                    _parent.css( {
                        "z-index" : -10,
                        "background" : "rgba(0,0,0,0)"
                    });
                    
                    $(".grid").children().remove();
                }, 1200);
                //END
                                
            }
            else {                
                morphObject.elem.$slim.css("opacity", 0);
                morphObject.elem.$caption.css("opacity", 0);
                morphObject.elem.$footer_main.show();
                $(this).css("opacity", 0);
                
                Utils.morphOff(_parent, morphObject.elem.about_object, total_offset_left_about);
                                                
                setTimeout(function() {
                    _parent.css( {
                        "z-index" : -10,
                        "background" : "rgba(0,0,0,0)"
                    });
                    
                    morphObject.elem.$slim.css( {
                        "-moz-transform" : "scale(0)",
                        "-webkit-transform" : "scale(0)",
                        "-ms-transform" : "scale(0)",
                        "transform" : "scale(0)"
                    });
                }, 1200);    
            }
            
            //changes the background every time we close a panel.
            var p_length = particlesSection.palette.length,
                i = Math.floor(Math.random() * p_length);
            particlesSection.setGradient(particlesSection.palette[i]);
        });
    },
    
    init: function() {
        morphObject.morph();
    }
};


var displayProjects = {
    createNodes : function(array) {
        var _length = array.length,
            _count = 1;
        
        for (var i = 0; i<_length; i++)
        {
            var domElement = '<figure class="effect-romeo">' +
          '    <img src="' + array[i].thumbnail + '"/>' +
          '        <figcaption>' + 
          '            <h2>' + array[i].name.substring(0, array[i].name.indexOf(" ")) + '<span>' + Utils.splitString(array[i].name) + '</span></h2> ' + 
          '            <p>' + array[i].description + '</p>' +
          '            <a href=' + array[i].imagePath + '>View More</a>' +       
          '        </figcaption>' +
          '</figure>';
            
            $("#" + _count).append(domElement);
            
            _count++;
            
            if (_count == 4) _count = 1;
        }
    },
    
    init : function() {
        displayProjects.createNodes(Projects.countEntity());
    } 
}

var particlesSection = {
    palette : [["31827C","95C68F","F7E9AA","FC8A80","FD4E6D"],["582770","773D94","943D8A","C22760","E81764"],["2F2C2B","413726","79451D","D7621A","FD8D32"],["F26B7A","F0F2DC","D9EB52","8AC7DE","87796F"],["47465A","B99195","DBBDAE","F1DBB6","C9CBB4"],["E4FFD4","EBE7A7","EDC68E","A49E7E","6E8F85"],["48404B","40745D","97B174","F1D768","F74541"],["D8D3AB","B0B19F","784D5F","BA456A","D04969"],["22806B","A89F1D","FACB4B","FCAF14","ED7615"],["46294A","AD4C6B","E07767","E0AE67","D4E067"],["471754","991D5D","F2445E","F07951","DEC87A"],["CFE1D2","FBF1D8","FCE4C1","F9BDB4","F58CA0"],["73C5AA","C6C085","F9A177","F76157","4C1B05"],["420B58","FC036C","F1A20B","8D9C09","08807B"],["E2D5B6","91B5A8","337E8D","34426C","372146"],["2F395B","FD013D","F97890","F6ABB4","ECD9CF"],["F9F6EC","88A1A8","502940","790614","0D0C0C"],["4E3150","C7777F","B6DEC1","D6ECDF","FBF6B5"],["B7B09E","493443","EB6077","F0B49E","F0E2BE"],["E9E2C0","D16B5A","61190F","DED3AA","6A6A5F"],["2F2E30","E84B2C","E6D839","7CD164","2EB8AC"],["24434B","FC325B","FA7F4B","BFBC84","63997A"],["E1EDD1","AAB69B","9E906E","B47941","CF391D"],["CC8F60","B7A075","9EB48E","8CC2A0","77D4B6"],["DACDAC","F39708","F85741","0E9094","1E1801"],["E5E6B8","C6D4B8","6CA6A3","856A6A","9C325C"],["EC6363","EC7963","ECB163","DFD487","BDEBCA"],["942222","BD3737","D4CDAD","98C3A1","25857D"],["9AEDB5","AB9A89","A3606D","4F2D4B","291E40"],["615C5C","E30075","FF4A4A","FFB319","EBE8E8"],["6EA49B","D9D0AC","6B8F0B","7D3F60","372B2E"],["2EB3A1","4FB37C","79B36B","A2AB5E","BCA95B"],["30182B","F0F1BC","60F0C0","FF360E","191F04"],["F6B149","F8572D","DF2A33","A22543","6B312D"],["96958A","76877D","88B8A9","B2CBAE","DBDDB4"],["FFFEC7","E1F5C4","9DC9AC","919167","FF4E50"],["FFA398","FFC48C","FCE5C0","9AD9D2","D0F7A6"],["4AEDD7","705647","ED6D4A","FFCA64","3FD97F"],["B4305B","ED9050","EFBA6B","559589","3F3050"],["4B3B52","895C69","D29570","F5C487","FCDAA5"],["C3AAA5","D76483","EF9CA4","FFC2BB","F6E5CB"],["3E3742","825E65","CC8383","EBC4A9","E6E0C5"],["594747","6743A5","7345D6","2E2E2E","BFAB93"],["966C80","96BDA8","BFD4AD","F7D3A3","ECA36C"],["FD6E4E","FFBE81","FFE9BA","E0D6B2","ABBEA8"],["000000","A69682","7E9991","737373","D8770C"]],
        
    setGradient : function(colorTab) {        
        $("#particles").css( {
            background : "linear-gradient(to right,#" +  colorTab[0] + ",#" + colorTab[1] + ",#" + colorTab[2] + ",#" + colorTab[3] + ",#" + colorTab[4] +")"
        });
    },
    
    init: function() {        
        $('#particles').particleground({
            dotColor: '#fff8e3',
            lineColor: '#fff8e3', 
            density: 19000,
            particleRadius: 5,
            curvedLines: true,
            parallaxMultiplier: 10
        });
    }
}

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
    }, 
    
    setupContainer : function(container, trigger, height, width, left) {
        container.css( {
            top : trigger.offset().top,
            left : left + "px",
            height : height + "px",
            width : width
        });
    },
    
    morphOn : function(container, button, trigger) {
        container.css( {
            top: 0,
            left: 0,
            height: "200%",
            width: "100%",
            "z-index": 100
        });

        //basic style to be applied : if more be specific when invoking the function
        button.css( {
            "letter-spacing" : "0.015em",
            "font-size" : "35px",
            "font-weight" : "bold",
            "line-height" : "35px"
        });

        trigger.addClass("transparent");

    },
    
    morphOff : function(parent, container_object, left ) {
        setTimeout(function() {
            parent.css( {
                top : container_object.$trigger.offset().top,
                left: left,
                height : container_object.height + "px",
                width : container_object.width + "px"
            });

            container_object.$trigger.focus();

            container_object.$button.css( {
                "letter-spacing" : "0.015em",
                "font-size" : "18px",
                "font-weight" : 700,
                "line-height" : 1
            })
        }, 1000);

        setTimeout(function() {
            container_object.$trigger.removeClass("transparent");
        }, 1700);
        
    },
    
    setBackgroundWhite : function(container) {
        setTimeout(function() {
            container.css( {
                background : "white"
            })
        }, 300);
    }
}

$(document).ready(function() {
    morphObject.init();
    particlesSection.init();
})

