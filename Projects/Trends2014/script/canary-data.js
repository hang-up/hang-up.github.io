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
        value : new Entity("All of me", "John Legend", 'ressource/me.jpg', "www.youtube.com/watch?v=450p7goxZqg"),
        enumerable: true
    },
    
    entity_1 : {
        value : new Entity("Happy", "Pharrell Williams", "ressource/happy.png", "http://www.youtube.com/watch?v=y6Sxv-sUYtM"),
        enumerable : true
    },
    
    entity_2 : {
        value: new Entity("Shake it off", "Taylor Swift", "ressource/shake.jpg", "http://www.youtube.com/watch?v=nfWlot6h_JM"),
        enumerable: true
    },
    
    entity_3 : {
        value: new Entity("Fancy feat Charli XCX", "Iggy Azalea", "ressource/fancy.jpg", "http://www.youtube.com/watch?v=O-zpOMYRi0w"),
        enumerable: true
    },
    
    entity_4 : {
        value: new Entity("Blame", "Calvin Harris FT John Newman", "ressource/blame.jpg", "http://www.youtube.com/watch?v=6ACl8s_tBzE"),
        enumerable: true
    },
    
    entity_5 : {
        value: new Entity("Rather Be", "Clean Bandit FT Jess Glynne", "ressource/rather.jpg", "http://www.youtube.com/watch?v=m-M1AtrxztU"),
        enumerable: true
    }
});


var Movies = Object.create(Data, {
    entity_0 : {
        value: new Entity("House of Cards", "Kevin Spacey, Robin Wright", "ressource/cards.jpg", "http://www.imdb.com/title/tt1856010/"),
        enumerable: true
    },
    
    entity_1 : {
        value : new Entity("True Detective ", "Matthew McConaughey, Colin Farrell", "ressource/detective.jpg", "http://www.imdb.com/title/tt2356777/"),
        enumerable : true
    },
    
    entity_2 : {
        value: new Entity("Guardians of the Galaxy", "Chris Pratt, Zoe Saldana", "ressource/galaxy.jpg", "http://www.imdb.com/title/tt2015381/"),
        enumerable: true
    },
    
    entity_3 : {
        value: new Entity("Edge of Tomorrow", "Tom Cruise, Emily Blunt", "ressource/edge.jpg", "http://www.imdb.com/title/tt1631867/"),
        enumerable : true
    },
    
    entity_4 : {
        value: new Entity("Whiplash", "Miles Teller, J.K. Simmons", "ressource/whiplash.jpg", "http://www.imdb.com/title/tt2582802/"),
        enumerable: true
    },
    
    entity_5 : {
        value : new Entity("Interstellar ", "Matthew McConaughey, Anne Hathaway, Jessica Chastain", "ressource/interstellar.jpg", "www.imdb.com/title/tt0816692/"),
        enumerable : true
    },
    
    entity_6 : {
        value : new Entity("The Interview", "Seth Rogen, James Franco", "ressource/interview.jpg", "http://www.imdb.com/title/tt2788710/"),
        enumerable : true
    }
});


var Things = Object.create(Data, {
    entity_0 : {
        value: new Entity("Selfie", " ", "ressource/selfie.jpg", "http://www.youtube.com/watch?v=kdemFfbS5H0"),
        enumerable: true
    },
    
    entity_1 : {
        value : new Entity("FIFA World Cup", "Germany earned it.", "ressource/fifa.jpg", "http://www.fifa.com/worldcup/"),
        enumerable : true
    },
    
    entity_2 : {
        value: new Entity("ALS", "Ice Bucket Challenge", "ressource/als.jpg", "http://www.alsa.org/fight-als/ice-bucket-challenge.html"),
        enumerable: true
    } 
});

