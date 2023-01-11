//(- •‿• -)
//HELLO!!!  (^▽^)
//Thanks for checking out me epic game!
//here is the source code, if you wanna make a mod.

//Most of the code here is essential to make the game work, exept the self promo at the end.(￣︶￣)
//If you make a mod just be sure to credit me for the base game (∩_∩)
//If you make a mod be sure to @ me on Twitter, my handle is (- ●◡●)- [ @ParaMattYT ] -(●◡● -)

//Also, don't steal my stuff and say you made it.  I will not be happy. (ㆆ_ㆆ)  Gerald and Harold are my characters, don't steal them.

//Have fun checking out the code (*^▽^*)

//o(≧▽≦)o 

//Current Game Version: 1.0
//idk if i'll do updates
//maybe some bugfixes
//Maybe make a highscore feature and a leaderboard
//maybe i'll make a new gamemode someday >:)


playSound("assets/Title.mp3", true);  //da title moosic 😎
var Gerald_X = getXPosition("Gerald");
var Gerald_Y = getYPosition("Gerald");
var GeraldWidth = getProperty("Gerald", "width");
var GeraldHight = getProperty("Gerald", "height");
var distance = 5;
var points = 0;
var lives = 3;

onEvent("screen1", "keydown", function(event) {
	if (event.key == "Up") {
	  Gerald_Y = Gerald_Y - distance;
	}
	if (event.key == "Down") {
	  Gerald_Y = Gerald_Y + distance;
	}
	if (event.key == "Right") {
	  Gerald_X = Gerald_X + distance;
	}
	if (event.key == "Left") {
	  Gerald_X = Gerald_X - distance;
	}
	setPosition("Gerald", Gerald_X, Gerald_Y);
	if (Gerald_X < 0) {
	  Gerald_X = 0;
	}
	if (Gerald_X > 320-GeraldWidth) {
	  Gerald_X = 320-GeraldWidth;
	}
	if (Gerald_Y < 0) {
	  Gerald_Y = 0;
	}
	if (Gerald_Y > 450-GeraldHight) {
	  Gerald_Y = 450-GeraldHight;
	}
});
//code for the movement 👍
function move(object,xStep,yStep){
  var newX = getXPosition(object) + xStep;
  var newY = getYPosition(object) + yStep;
  setPosition(object, newX,newY);
  wrapAround(object);
  var objectWidth = getProperty(object, "width");
  var objectHeight = getProperty(object, "height");
  if (newX <= Gerald_X+GeraldWidth && newX+objectWidth >= Gerald_X){
   if (newY <= Gerald_Y+GeraldHight && newY+objectHeight >= Gerald_Y){
    setPosition(object, randomNumber(0, 295), randomNumber(0, 425));
    points = points + 1;
   setNumber("SCORELABL", points);
   setNumber("itsa-your-score-numb", points);
   }
  }
}

//the wrap around 👍
function wrapAround (object) {
  var object_X = getXPosition(object);
  var object_Y = getYPosition(object);
  if (object_X < -25) {
    object_X <= 295;
  } else if ((object_X > 295)) {
    object_X = -25;
  } else if ((object_Y < -25)) {
    object_Y = 425;
  } else if ((object_Y >425)) {
    object_Y = 0; 
  }
}

//starts the game 
onEvent("button_start", "click", function( ) {
   hideElement("button_start");
   
timedLoop(50, function() {
    move("happcoin1",randomNumber(-2, 2),randomNumber(-3, 3));
    move("happcoin2",randomNumber(-2, 2),randomNumber(-3, 3));
    move("happcoin3",randomNumber(-2, 2),randomNumber(-3, 3));
    move("happcoin4",randomNumber(-2, 2),randomNumber(-3, 3));
    move("happcoin5",randomNumber(-2, 2),randomNumber(-3, 3));
    move("happcoin6",randomNumber(-2, 2),randomNumber(-3, 3));
    //makes da happcoins move RANDOMLY (._.)
   });
      
});

var randXHarMove; //keeps track of HarMovement on x-axis
var randYHarMove; //keeps track of HarMovement on y-axis
var switchCountdown = 0;  //USELESS
var HarMoveSTART = false;
var Gerald_X = getXPosition("Gerald");
var Gerald_Y = getYPosition("Gerald");
var GeraldWidth = getProperty("Gerald", "width");
var GeraldHight = getProperty("Gerald", "height");
var points = 0;
  
//starts HarMovement
onEvent("button_start", "click", function( ) {
   hideElement("button_start");
   HarMoveSTART = true;
   lives = 3;
   setNumber("LIVESNUMBER", 3);
   setNumber("SCORELABL", 0);
  setPosition("Gerald", 0, 0);
	setPosition("Harold", 125, 370);
Gerald_X = getXPosition("Gerald");
Gerald_Y = getYPosition("Gerald");
GeraldWidth = getProperty("Gerald", "width");
GeraldHight = getProperty("Gerald", "height");
   
timedLoop(50, function() {
    HarMove(); 
    collisionDetection ("Harold", true);
    collisionDetection ("Gerald", true);
    //makes gerald lose a life when him and harold collide (.___.')
   });
      
});

//code for the Harold Movement :)
function HarMove(){
  var HaroldXLocation = getXPosition("Harold");
  var HaroldYLocation = getYPosition("Harold");
  
  HaroldXLocation = HaroldXLocation + randXHarMove;
  HaroldYLocation = HaroldYLocation + randYHarMove;
  
  setPosition("Harold", HaroldXLocation, HaroldYLocation);
  
  switchCountdown--; //switch countdown = switch countdown -1;
  
  if(switchCountdown <= 0)
  {
    assignDirection();
  
  
  }
  checkBounce();
}
//Chooses a direction
function assignDirection(){
  randXHarMove = randomNumber(-5, 5);
  randYHarMove = randomNumber(-5, 5);
  switchCountdown = randomNumber(10, 50);
  
  if(randXHarMove ==0 && randYHarMove ==0)
 {
   assignDirection();
 }
}

//checks to see if the image is on screen
function checkBounce()
{
  var HaroldWidth = getProperty("Harold", "width");
  var HaroldHeight = getProperty("Harold", "height");
  
  var HaroldXLocation = getXPosition("Harold");
  var HaroldYLocation = getYPosition("Harold");
  
  if(HaroldYLocation >= 450 - HaroldHeight)
  {
   randYHarMove = -5; 
  }
  
  if(HaroldYLocation <= 0)
  {
    randYHarMove = 5;
  }
  
if (HaroldXLocation >= 320 - HaroldWidth)
  {
   randXHarMove = -5;
}

if (HaroldXLocation <=0)
{
   randXHarMove = 5; 
}
}


//hello peoples reading my code 😎





//defines objects touching (- ●◡●)--(●◡● -)
function collisionDetection(){
  var HaroldXLocation = getXPosition("Harold");
  var HaroldYLocation = getYPosition("Harold");
  var HaroldWidth = getProperty("Harold", "width");
  var HaroldHeight = getProperty("Harold", "height");
  if (HaroldXLocation <= Gerald_X+GeraldWidth && HaroldXLocation+HaroldWidth >= Gerald_X){
   if (HaroldYLocation <= Gerald_Y+GeraldHight && HaroldYLocation+HaroldHeight >= Gerald_Y){
    setPosition("Harold", 145, 380);
    lives = lives - 1;
    setNumber("LIVESNUMBER", lives);
    if (lives == 0) {
 endGame();
}

   }
        
        
   }
 }
 function endGame() {  //u are die ( x_x)
  stopTimedLoop();
  setText("itsa-your-score-numb", points);
  setScreen("gameoverscreen");
  stopSound();
  playSound("assets/Gameover-lol.mp3", true);  //MOOSIC \( ●◡●)/
  setPosition("Gerald", 0, 0);
	setPosition("Harold", 125, 370);
	lives = 3;
	points = 0;
	showElement("button_start");
	lives = 3;
	
}
if (lives <= 0) {
 endGame();
}


onEvent("mainmenufrominstruct", "click", function( ) {
	setScreen("title");
});
onEvent("title", "keydown", function(event) {
 if (event.key == "1") {
  setScreen("howtoplay");
  } else if (event.key == "Enter") {
   setScreen("screen1");
   stopSound();
   playSound("assets/Collect-The-HappCoins!.mp3", true);
  setPosition("Gerald", 0, 0);
	setPosition("Harold", 125, 370);
  }
});
onEvent("button2", "click", function( ) {
	setScreen("title");
	stopSound();
	playSound("assets/Title.mp3", true);
	lives = 3;
	points = 0;
	setPosition("Gerald", 0, 0);
	setPosition("Harold", 125, 370);
});
onEvent("button3", "click", function( ) {
	setScreen("aboutdacreator");
});
onEvent("leaveabout", "click", function( ) {
	setScreen("title");
});

//hehe totally NOT self-promo ( ｀ ▽´ )

onEvent("PlayQuizDemo", "click", function( ) {
	console.log("PlayQuizDemo clicked!");
	open("https://aquiz.paramattinc.com");
	
});
onEvent("ListenSpotfie", "click", function( ) {
	console.log("ListenSpotfie clicked!");
	open("https://open.spotify.com/artist/3UlmNa1DXYDh5jhOp0UOgG");
	
});
onEvent("MoosicVids", "click", function( ) {
	console.log("MoosicVids clicked!");
	open("https://youtube.com/playlist?list=PLayAk_oZwZ9bs5NSs1foMPIu0hWcV0Qyd");
	
});
onEvent("EyeTunes", "click", function( ) {
	console.log("EyeTunes clicked!");
	open("https://music.apple.com/us/artist/paramattkoopa-lolking/1632208453");
	
});

//THIS PART IS FOR ALL THE SECRETS. IF YOU HAVEN'T DISCOVERED THEM YET GO BACK UP.  (╯°▽°)╯ ┻━┻
//                                                                                     you   secrets

onEvent("screen1", "keydown", function(event) {
	if (event.key == ",") {
	  lives = 9999;
	  playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
	  setNumber("LIVESNUMBER", 9999);
	  
	}
});
