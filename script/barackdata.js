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
    }
};

var Projects = Object.create(Data, {
    entity_0 : {
        value : new Entity("Matchr ", "Projects/Matchr/template_thumb.png", "Projects/Matchr/index.html", "Matching colors made easy." ),
        enumerable : true
    },
    
    entity_1 : {
        value: new Entity("AdBlockr ", "Projects/Blockr/template_thumb.png", "https://github.com/hang-up/adblockr", "Why so selfish?"),
        enumerable: true
    },
    
    entity_2 : {
        value : new Entity("Solar ", "Projects/Solar/thumb.png", "Projects/Solar/index.html", "To the sky and beyond" ),
        enumerable : true
    },
    
    entity_3 : {
        value : new Entity("Trends Of2014", "Projects/Trends2014/thumb.jpg", "Projects/Trends2014/index.html", "2014 was a year of expectations. <br/> Here are its biggest trends." ),
        enumerable : true
    },

    entity_4 : {
        value: new Entity("Rainr ", "Projects/Rainr/thumb.png", "Projects/Rainr/index.html", "<br>Will you need an umbrella today?"),
        enumerable : true
    },
    
    entity_5 : {
        value : new Entity("Diamond ", "Projects/Art_Diamond/diamond_thumb.png", "Projects/Art_Diamond/diamond.png", "A diamond is forever. <br/> An essay made with Illustrator."),
        enumerable : true
    },

    entity_6 : {
        value : new Entity("Made InFrance", "Projects/Art_France/thumb.png", "Projects/Art_France/made_in_france.png", "Made in France on my way to Montreal."),
        enumerable : true
    },
    
    entity_7 : {
        value : new Entity("Hamburger ", "Projects/Icon_Hamburger/Hambuger_thumb.png", "Projects/Icon_Hamburger/Hambuger.png", "<br/>Who said burgers weren't sexy?" ),
        enumerable : true
    }
});
