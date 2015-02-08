/*
    Class Star to create X and Y coordinates of each star
*/

function Star(coordX, coordY) {
    this.coordX = coordX;
    this.coordY = coordY;
}

/*
    starsObject regroups an array of all stars generated,
    generateStars creates "max" number of stars randomly positionned,
    displaysStars display the stars from the array (called in draw())
    
*/
var starsObject = {
    starsCoordinates : [],
    
    generateStars : function(max) {
        for(var i=0; i<max; i++) {
            starsObject.starsCoordinates.push(new Star(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight)));
        }
    },
    
    displayStars : function(ctx) {
       for(var key in starsObject.starsCoordinates) {
           ctx.fillRect(starsObject.starsCoordinates[key].coordX, starsObject.starsCoordinates[key].coordY, 1,1);        
        } 
    }
}
starsObject.generateStars(300);

/*
    Main function : draw all the elements on the canvas.
*/
function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    
    grd = ctx.createRadialGradient(ctx.canvas.width/2, ctx.canvas.height/2, 0.000, ctx.canvas.width/2 + 5, ctx.canvas.height/2 - 100, 450.000);
      
    grd.addColorStop(0.000, 'rgba(28, 40, 55, 1.000)');
    grd.addColorStop(1.000, 'rgba(5, 6, 8, 1.000)');
    
    
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height); // clear canvas
    
    
    //BACKGROUND
    ctx.fillStyle = grd;
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    
    ctx.fillStyle = "#fff";
    starsObject.displayStars(ctx);
    
    ctx.fillStyle = 'rgba(255, 215, 107, 0.97)';
    ctx.strokeStyle = 'rgba(0,0,0,0.4)';
    ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

  // Sun
    ctx.arc(0,0,20,0,Math.PI*2,true);
    ctx.shadowColor= "rgba(255, 186, 0, 0.97)";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 30;
    ctx.fill();
    
    
    //Earth orbit
    ctx.beginPath();
    ctx.strokeStyle = "#1C2A39";
    ctx.shadowBlur = 0;
    ctx.translate(-ctx.canvas.width/2, -ctx.canvas.height/2);
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,85,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    //Mercury orbit
    ctx.beginPath();
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,40,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    //Venus orbit
    ctx.beginPath();
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,60,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    //Mars orbit
    ctx.beginPath();
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,105,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    //Jupiter orbit
    ctx.beginPath();
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,165,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    //Saturn orbit
    ctx.beginPath();
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,200,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    //Uranus orbit
    ctx.beginPath();
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,255,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    //Neptune orbit
    ctx.beginPath();
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2,290,0,Math.PI*2,false);
    ctx.stroke();
    ctx.closePath();
    
    ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);
    
    /*
    Revolution of planets in earth days (from Wikipedia)
      Mercury : ~87,5 days
      Venus : ~224,7 days
      Earth : ~365,2563 days
      Mars : ~687 days (~1,8 year)
      Jupiter : ~4 331 days (~12 years)
      Saturn : ~10 747 days (~30 years)
      Uranus : ~30 589 days (~84 years)
      Neptune : ~59 802 days (~165 years)
        
    */
    var time = new Date();
    
    ctx.save();
    
    //Neptune
    ctx.rotate( ((2*Math.PI)/6000)*time.getSeconds() + ((2*Math.PI)/6000000)*time.getMilliseconds() );
    ctx.beginPath();
    ctx.arc(290,0,4,0,Math.PI*2,true);
    ctx.fillStyle = "#175E9E";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    
    //Uranus
    ctx.rotate( ((2*Math.PI)/3068)*time.getSeconds() + ((2*Math.PI)/3068000)*time.getMilliseconds() );
    ctx.beginPath();
    ctx.arc(255,0,4,0,Math.PI*2,true);
    ctx.fillStyle = "#B5E3E3";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    
    //Saturn
    ctx.rotate( ((2*Math.PI)/1077)*time.getSeconds() + ((2*Math.PI)/1077000)*time.getMilliseconds() );
    ctx.beginPath();
    ctx.arc(200,0,7,0,Math.PI*2,true);
    ctx.fillStyle = "#E7C194";
    ctx.fill();
    ctx.closePath();  
    ctx.restore();
    
    //Jupiter
    ctx.rotate( ((2*Math.PI)/433)*time.getSeconds() + ((2*Math.PI)/433000)*time.getMilliseconds() );
    ctx.beginPath();
    ctx.arc(165,0,10,0,Math.PI*2,true);
    ctx.fillStyle = "#C76E2A";
    ctx.fill();
    ctx.closePath(); 
    ctx.restore();
    
    //Mars
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.beginPath();
    ctx.arc(105,0,3,0,Math.PI*2,true);
    ctx.fillStyle = "#B1311D";
    ctx.fill();
    ctx.closePath(); 
    ctx.restore();
    
    //Earth
    ctx.rotate( ((2*Math.PI)/30)*time.getSeconds() + ((2*Math.PI)/30000)*time.getMilliseconds() );
    ctx.beginPath();
    ctx.arc(85,0,4,0,Math.PI*2,true);
    ctx.fillStyle = "#0D87B7";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    
    //Venus
    ctx.rotate( ((2*Math.PI)/20)*time.getSeconds() + ((2*Math.PI)/20000)*time.getMilliseconds() );
    ctx.beginPath();
    ctx.arc(60,0,3,0,Math.PI*2,true);
    ctx.fillStyle = "#5f965b";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    
    //Mercury
    ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
    ctx.beginPath();
    ctx.arc(40,0,2,0,Math.PI*2,true);
    ctx.fillStyle = "#775700";
    ctx.fill();
    ctx.closePath();
    ctx.restore();    
    
    window.requestAnimationFrame(draw);

}

function init(){
      window.requestAnimationFrame(draw);
}
init();
