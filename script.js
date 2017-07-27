var min = 0 ;
var max = 7 ;

var targetX = getRandomIntInclusive( min , max );
var targetY = getRandomIntInclusive( min , max );

var loserX = getRandomIntInclusive( min , max );
var loserY = getRandomIntInclusive( min , max );

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function myFunction(x, y) {
	var clickElements = document.getElementById(x + "-" + y);
    console.log(targetX, targetY, loserX, loserY)

  if ( targetX === x && targetY === y){
  	console.log("you won have a beer");
  	setBackroundImage(clickElements, "beer")  
  }

  else if ( loserX === x && loserY === y){
  	console.log("loser");
  	setBackroundImage(clickElements, "skull")
  }
  else {
    console.log("missed " + x + " " + y);
    if ( x < targetX){
	setBackroundImage(clickElements, "east")
    }
    if ( x > targetX){
    setBackroundImage(clickElements, "west")	
    }
    if ( y > targetY){
    setBackroundImage(clickElements, "north")
    }
    if ( y < targetY){
    setBackroundImage(clickElements, "south")
    }
  }

}

function setBackroundImage(clickElements, backgroundImage) {

clickElements.setAttribute("style", "background-image:url('./assets/images/"+ backgroundImage + ".png')");

}
 
//var rows = document.getElementsByClassName("row")[0].children

//for (var i = 0; i < rows.length; i++){
//  rows[i].setAttribute("style", "background-image:url('./assets/images/"+ "east" + ".png')")
//} 
//console.log(rows)

