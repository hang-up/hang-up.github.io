function Entity(name, thumbnail, imagePath, description) {
    this.name = name;
    this.thumbnail = thumbnail;
    this.imagePath = imagePath;
    this.description = description;
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

var Projects = Object.create(Data, {
    entity_0 : {
        value : new Entity("Diamond ", "Projects/Art_Diamond/diamond_thumb.png", "Projects/Art_Diamond/diamond.png", "A diamond is forever. <br/> An essay made with Illustrator."),
        enumerable : true
    },
    
    entity_1 : {
        value : new Entity("Made InFrance", "Projects/Art_France/thumb.png", "Projects/Art_France/made_In_france.png", "Another work with Illustrator. <br />Made in France on my way to Montreal."),
        enumerable : true
    },
    
    entity_2 : {
        value : new Entity("Hamburger ", "Projects/Icon_Hamburger/Hambuger_thumb.png", "Projects/Icon_Hamburger/Hambuger.png", "Who said burgers weren't sexy? <br> Here's my attempt to prove them wrong." ),
        enumerable : true
    },
    
    entity_3 : {
        value: new Entity("Rainr ", "Projects/Rainr/thumb.png", "Projects/Rainr/index.html", "Will you need an umbrella today?"),
        enumerable : true
    },
    
    entity_4 : {
        value : new Entity("Matchr ", "Projects/Matchr/template_thumb.png", "Projects/Matchr/index.html", "Matching colors made easy." ),
        enumerable : true
    },
    
    entity_5 : {
        value : new Entity("Web TrendsOf2014", "Projects/Trends/thumb.jpg", "Projects/Trends/index.html", "2014 is a year of expectations. <br/> Here are some of its biggest trends displayed in a fashion way." ),
        enumerable : true
    }    
});