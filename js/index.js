var Speed = 500;
var Drift = 500;
var enemySpeed =300; randomIntFromInterval(45,68);
var enemyDrift =400; randomIntFromInterval(48,55);

var bullet = 100;

$(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
        $('#chara').animate({
        'left' : '-='+Speed+"px" //moves right
        }, 'fast', 'linear');

        $('#boss').animate({
        'left' : '-='+enemySpeed+"px"
        }, 'fast', 'linear');
      
        $('#boss2').animate({
        'left' : '-='+enemySpeed+"px"
        }, 'fast', 'linear');
        
        $('#boss3').animate({
        'left' : '-='+enemySpeed+"px"
        }, 'fast', 'linear');

        $('#boss4').animate({
        'left' : '-='+enemySpeed+"px"
        }, 'fast', 'linear');
      
      $('#boss5').animate({
        'left' : '+='+enemySpeed+"px"
        }, 'fast', 'linear');
     
       $('#bullet').animate({
        'left' : '+='+Speed+"px" 
        }, 'fast', 'linear');
        break;
      
      case 38: // up
        $('#chara').animate({
        'top' : '-='+Drift+"px"
        }, 'fast', 'linear');
        
        $('#boss').animate({
        'top' : '-='+enemyDrift+"px"
        }, 'fast', 'linear');

        
       $('#boss2').animate({
        'top' : '-='+enemyDrift+"px"
        }, 'fast', 'linear');
   
        $('#boss3').animate({
        'top' : '-='+enemyDrift+"px"
        }, 'fast', 'linear');
        
       $('#boss4').animate({
        'top' : '-='+enemyDrift+"px"
        }, 'fast', 'linear'); 
        
        $('#boss5').animate({
        'top' : '-='+enemyDrift+"px"
        }, 'fast', 'linear');
     
         $('#bullet').animate({
        'top' : '-='+Drift+"px"
        }, 'fast', 'linear');
        break;
        
        case 39: // right
        $('#chara').animate({
        'left' : '+='+Speed+"px" //moves right
        }, 'fast', 'linear');
        
        $('#boss').animate({
        'left' : '+='+enemySpeed+"px"
        }, 'fast', 'linear');
      

        $('#boss2').animate({
        'left' : '+='+enemySpeed+"px"
        }, 'fast', 'linear');
        
        $('#boss3').animate({
        'left' : '+='+enemySpeed+"px"
        }, 'fast', 'linear');
        
        $('#boss4').animate({
        'left' : '+='+enemySpeed+"px"
        }, 'fast', 'linear');
        
       $('#boss5').animate({
        'left' : '+='+enemySpeed+"px"
        }, 'fast', 'linear');
        break;
      
      case 40: // down
        $('#chara').animate({
        'top' : '+='+Drift+"px"
        }, 'fast', 'linear');
        
        $('#boss').animate({
        'top' : '+='+enemyDrift+"px"
        }, 'fast', 'linear');

      $('#boss2').animate({
        'top' : '+='+enemyDrift+"px"
        }, 'fast', 'linear');
  
        $('#boss3').animate({
        'top' : '+='+enemyDrift+"px"
        }, 'fast', 'linear');

        $('#boss4').animate({
        'top' : '+='+enemyDrift+"px"
        }, 'fast', 'linear');

        $('#boss5').animate({
        'top' : '+='+enemyDrift+"px"
        }, 'fast', 'linear');
     
        $('#bullet').animate({
        'top' : '+='+Drift+"px"
        }, 'fast', 'linear');

        break;
        
      case 32: //change to SPACe
        $('#bullet').animate({
        'top' : '+='+bullet+"px"
        }, 'fast', 'linear');
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$("body").click(function() {  
  $("#bullet").css("opacity", "1");
  $("#bullet").css("top", "-150px");
});

setInterval(function(){ 
  $("#bullet").css("opacity", "0");;
  $("#bullet").css("top", "80%");
}, 800);

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}