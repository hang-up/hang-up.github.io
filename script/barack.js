var panelObject = {
    panel : function() {
        var $footerMain = $("#footer-main");
                
        $("#home").on("click", "#workshop_trigger", function() {
            $(".workshop").removeClass("zoomOut").addClass("open zoomIn");            
            panelObject.displayMenu(); 
            $footerMain.hide();
            
            setTimeout(function() {
                $("#particles").remove();
            }, 1000);
        });
        
        $("#home").on("click", "#about_trigger", function() {
            $(".about").removeClass("zoomOut").addClass("open zoomIn");
            panelObject.displayMenu();                   
            $footerMain.hide();
            
            setTimeout(function() {
                $("#particles").remove();
            }, 1000);
        });
    },
    
    displayMenu : function() {
        Menu.activate();
    },
    
    init: function() {
        panelObject.panel();
    }
};

var Menu = {
    domInserted : '<div id="particles"><div class="intro">              <h1 class="title1 big white">Hang Up <span class="animated bounce infinite">!</span></h1>            <p class="caption xsmall white">A workshop for ideas.</p>            <a class="btn" href="#" id="workshop_trigger">Workshop</a>            <a class="btn" href="#" id="about_trigger">About me</a>        </div>    </div>',
    
    el: {
        ham: $('.menu'),
        menuTop: $('.menu-top'),
        menuBottom: $('.menu-bottom'),
        footerMain : $("#footer-main"),
        body: $("body")
    },
  
    activate: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');    
    },
    
    /*
    Once clicked on the ham, toggle the click class on top and bottom.
    Then add .zoomOut to .open and remove .zoomIn (fade out transition)
    remove .open 1s after zoomOut transition is over (no blink)
    
    Initialize the particlesSection (create particles + update background)
    
    Show main footer.    
    */
    action: function() {
        Menu.el.ham.click(function() {
            Menu.activate();
            
            $(".open").addClass("zoomOut").removeClass("zoomIn");
            Menu.el.body.prepend(Menu.domInserted);
            
            setTimeout(function(){
                $('.open').removeClass("open");
            },500);
            
            particlesSection.init();

            Menu.el.footerMain.show();
        })
    },
    
    init: function() {
        Menu.activate();
        Menu.action();
    }
};

var displayProjects = {
    createNodes : function(array) {
        var _length = array.length;
        
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
            
            $(".grid").hide().append(domElement).fadeIn();
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
        var p_length = particlesSection.palette.length;
        var i = Math.floor(Math.random() * p_length);
        particlesSection.setGradient(particlesSection.palette[i]);
        
        $('#particles').particleground({
            dotColor: '#fff8e3',
            lineColor: '#fff8e3', 
            density: 15000,
            particleRadius: 5,
            curvedLines: true,
            parallaxMultiplier: 10
        });
        
        $('.intro').css({
            'margin-top': -($('.intro').height() / 2)
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
    } 
}

$(document).ready(function() {
    panelObject.init();
    displayProjects.init();   
    particlesSection.init();
    Menu.init();
})

