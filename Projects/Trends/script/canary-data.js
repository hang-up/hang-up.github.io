function Entity(name, caption, imagePath, link) {
    this.name = name;
    this.caption = caption;
    this.imagePath = imagePath;
    this.link = link;
}

var Data = {
    countEntity : function () {
        var array = [];
        
        for (var index in this) { 
            var attr = this[index]; 
            if (typeof attr !== "function")            
                array.push(attr);                    
        }        
        return array;
    },
};


var Music = Object.create(Data, {
    entity_0 : {
        value : new Entity("Ariana Grande", "Problem feat Iggy Azalea", 'ressource/grande.jpg', "http://www.youtube.com/watch?v=SoJ8s90NLc4"),
        enumerable: true
    },
    
    entity_1 : {
        value : new Entity("Pharrell Williams", "Happy", "ressource/happy.jpg", "http://www.youtube.com/watch?v=y6Sxv-sUYtM"),
        enumerable : true
    },
    
    entity_2 : {
        value: new Entity("One Republic", "Counting Stars", "ressource/one.jpg", "http://www.youtube.com/watch?v=hT_nvWreIhg"),
        enumerable: true
    },
    
    entity_3 : {
        value: new Entity("Iggy Azalea", "Fancy feat Charli XCX", "ressource/fancy.jpg", "http://www.youtube.com/watch?v=O-zpOMYRi0w"),
        enumerable: true
    },
    
    entity_4 : {
        value: new Entity("AJR ", "I'm ready", "ressource/ajr.jpg", "http://www.youtube.com/watch?v=f2dJxFIV28Y"),
        enumerable: true
    },
    
    entity_5 : {
        value: new Entity("Clean Bandit", "Rather Be (feat. Jess Glynne)", "ressource/rather.jpg", "http://www.youtube.com/watch?v=m-M1AtrxztU"),
        enumerable: true
    }
});


var Movies = Object.create(Data, {
    entity_0 : {
        value: new Entity("House ofCards", "Kevin Spacey, Robin Wright", "ressource/cards.jpg", "http://www.imdb.com/title/tt1856010/"),
        enumerable: true
    },
    
    entity_1 : {
        value : new Entity("Frozen ", "Idina Menzel, Kristen Bell", "ressource/frozen.jpg", "http://www.imdb.com/title/tt2294629/"),
        enumerable : true
    },
    
    entity_2 : {
        value: new Entity("The LegoMovie", "Release Date : February 1, 2014", "ressource/lego.jpg", "www.imdb.com/title/tt1490017/"),
        enumerable: true
    }    
});


var Gadgets = Object.create(Data, {
    entity_0 : {
        value: new Entity("Moto 360", "It's time.", "ressource/moto.jpg", "https://moto360.motorola.com/"),
        enumerable: true
    },
    
    entity_1 : {
        value : new Entity("Google Glass", "Your third eye to real world.", "ressource/glass.jpg", "http://www.google.com/glass/start/"),
        enumerable : true
    },
    
    entity_2 : {
        value: new Entity("GoPro ", "Capture the world.", "ressource/gopro.jpg", "http://www.gopro.com/"),
        enumerable: true
    } 
});



var Things = Object.create(Data, {
    entity_0 : {
        value: new Entity("Hashtags ", "#MyLifeIsAwesome", "ressource/1.jpg", "http://www.hashtags.org/"),
        enumerable: true
    },
    
    entity_1 : {
        value : new Entity("Food Trucks", "Fine cuisine everywhere. Or burger on the go.", "ressource/truck.jpg", "http://roaminghunger.com/"),
        enumerable : true
    }, 
    
    entity_2 : {
        value: new Entity("Twerk ", "Miley Cyrus is not the only one.", "ressource/twerk.jpg", "https://www.youtube.com/watch?v=LrUvu1mlWco"),
        enumerable: true
    }
    
});


