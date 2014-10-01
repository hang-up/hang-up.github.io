var panelObject = {
//    _width : Math.round($("body").width()/2) - 20,
//    
//    leftPanel : function() {
//        var $leftPanel = $("#left-panel");
//        $leftPanel.width(presentationObject._width);
//    }, 
//    
//    rightPanel : function() {
//        var $rightPanel = $("#right-panel");
//        $rightPanel.width(presentationObject._width);
//    },
    
    panel : function() {
        var $titles = $(".narrowHover");
        
        $titles.hover(function() {
            $(this).next(".title-caption").fadeIn();            
        }, function() {
            $(this).next(".title-caption").fadeOut();
        })
        
    },
    
    init: function() {
//        presentationObject.leftPanel();
//        presentationObject.rightPanel();
        panelObject.panel();
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
    
    console.log(Projects.countEntity());
    
//    
//    $.ajax( {
//        url : "script/barack.json",
//        dataType : "jsonp",
//        
//        success: function(data) {
//            console.log($.parseJSON(data));
//        }
//        
//    })
    
})




















