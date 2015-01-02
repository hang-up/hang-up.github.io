(function() {    
    //choose what data to load   
    var moviesData = Movies.countEntity();
    var musicData = Music.countEntity();
    var thingsData = Things.countEntity();
    var length = musicData.length;
    
    var $progress = $("#progress_circles");
    
    //Create the appropriate number of dots and apply .white for the first child
    function initBullets (data) {
        $("#progress_circles").empty();
        for (var i = 0; i<data.length; i++) {
            $progress.append("<li id='" + data[i].link +"'></li>");       
        }
        $progress.children().eq(0).addClass("white");
    }
    
    function initData(data) {
        $("#main-content").css("background-image", "url(" + data[0].imagePath + ")");
        $("#main-content link-content").attr("href", data[0].link);
        $("#main-content-title").hide().text(data[0].name).fadeIn();
        $("#main-content-caption").hide().text(data[0].caption).fadeIn();
    }
    
    function setData(data) {
        $("#progress_circles li").on("click", function() {
            var askedRessources = data[$(this).index()];
            
            console.log(askedRessources.link);

            $("#main-content .link-content").attr("href", askedRessources.link);
            $("#main-content").css("background-image", "url(" + askedRessources.imagePath + ")");
            $("#main-content-title").hide().text(askedRessources.name).fadeIn();
            $("#main-content-caption").hide().text(askedRessources.caption).fadeIn();

            $("#progress_circles .white").removeClass("white");
            $(this).addClass("white");

        });
    }
    
    initBullets(moviesData);
    initData(moviesData);
    setData(moviesData);
    
    $(".menu li").on("click", function() {
        if ($(this).data("action") === "Movies")
        {
            initBullets(moviesData);
            initData(moviesData);
            setData(moviesData);
            
        }
        else if ($(this).data("action") === "Music")
        {
            initBullets(musicData);
            initData(musicData);
            setData(musicData);
        }
        else {
            initBullets(thingsData);
            initData(thingsData);
            setData(thingsData);
        }     
        
        $("html, body").animate( {
            scrollTop : $("#main-content").offset().top
        }, 1000);
    });
    
    
        
})();
    

        
        
        
        
        
        
        