var weatherObject = {
    _POSITIVEADVICE : ["Let's be cautious...", "Don't be a loser.", "Dry is better than wet!", "Don't want your hair to be all messed up!"],
    _NEGATIVEADVICE : ["You are good to go!", "Free to go!", "No hassle needed.", "Go outside, enjoy life!", "Life is better when it's not raining huh?"],
    
    plugin : function(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            unit: 'c',
            success : function(weather) {
                
                weatherObject.displayAdvice(weather.code);
                
//                console.log(weather);
            },
            error : function(e) {
                console.log(e);
            }
        });
    },
    
    
    displayAdvice : function(code) {
        var $advice = $("#advice");
        switch (code) {                
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6": 
                case "7": 
                case "8": 
                case "9": 
                case "10":
                case "11":
                case "12":
                case "37":
                case "38": 
                case "39":
                case "40":
                case "45":
                case "47":
                    weatherObject.fetchAdvice(true);
                    break;
               
                default : 
                    weatherObject.fetchAdvice(false);
                    break;
        }
          
    },
    
    fetchAdvice : function(bool) {
        var posLength = weatherObject._POSITIVEADVICE.length;
        var negLength = weatherObject._NEGATIVEADVICE.length;
        
        if (bool === true)
        {    
            $("#icon img").attr("src", "assets/fa-umbrella-open.svg");
            $("#advice").text("YES"); 
                $(".caption").text(weatherObject._POSITIVEADVICE[Math.floor(Math.random() * posLength)]);
            
        }
        else
        {
            
            $("#icon img").attr("src", "assets/fa-umbrella-closed.svg");
            $("#advice").text("NO");
            $(".caption").text(weatherObject._NEGATIVEADVICE[Math.floor(Math.random() * negLength)]);
            
        }        
    },
    
    init : function() {
        $("#result").fadeIn();
        
        function getRealLocation() {
            navigator.geolocation.getCurrentPosition(function(position) {
                weatherObject.plugin(position.coords.latitude + ',' + position.coords.longitude);
            }, function error(e) {
                weatherObject.plugin("Montreal", "");
            });
        };
        
        getRealLocation();
    }
}


$(document).ready(function() {
    $("#find").click(function() {
        $(this).parent().fadeOut("fast");
        weatherObject.init();
        
    });
});

