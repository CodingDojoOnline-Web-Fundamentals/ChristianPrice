$(document).ready(function(){
	var world = [
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
		[2,1,1,1,2,3,1,1,1,1,1,1,1,1,2,3,1,1,1,2],
		[2,1,1,1,2,2,2,2,1,2,2,2,1,2,2,1,2,2,1,2],
		[2,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2],
		[2,1,2,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2],
		[2,1,2,1,1,1,2,2,2,2,1,1,2,2,2,2,2,1,1,2],
		[2,1,1,1,2,1,1,2,1,1,1,2,1,3,2,1,1,1,1,2],
		[2,1,2,1,2,1,1,2,1,1,1,1,1,1,2,1,1,2,1,2],
		[2,1,1,1,2,1,1,2,2,2,1,2,2,2,1,1,1,1,1,2],
		[2,1,1,2,1,1,1,1,2,4,5,6,2,1,1,1,2,1,1,2],
		[2,1,2,3,1,1,2,1,2,2,2,2,2,1,2,1,2,3,2,2],
		[2,1,3,2,2,2,1,1,2,1,1,1,2,3,2,1,1,2,1,2],
		[2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
		[2,1,1,2,1,1,1,1,1,1,2,1,2,1,2,1,1,1,1,2],
		[2,1,1,1,1,2,2,1,1,2,1,1,2,2,2,1,1,1,1,2],
		[2,1,1,2,1,1,1,1,1,2,2,1,3,2,1,1,1,2,1,2],
		[2,1,2,2,2,1,2,1,1,2,1,1,2,2,1,1,2,3,2,2],
		[2,1,1,3,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,2],
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]	
	];

	var score = 0;

	var lives = 3;

	var pacman = {
		x: 1, 
		y: 1
	};
	var secondpacman = {
		x: 18,
		y: 17
	};
	

	function displayWorld(){
		var output ='';

		for(var i=0; i<world.length; i++){
			output += "\n<div class='row'>\n";
			for(var j=0; j<world[i].length; j++){
				if(world[i][j] == 2)
					output += "<div class='brick'></div>";
				else if(world[i][j] ==1)
					output += "<div class='coin'></div>";
				else if (world [i][j] == 0)
					output += "<div class='empty'></div>";
				else if(world [i][j] == 3)
					output += "<div class='cherry'></div>";
				else if(world [i][j] == 4)
					output += "<div class='ghost1'></div>";
				else if(world [i][j] == 5)
					output += "<div class='ghost2'></div>";
				else if(world [i][j] == 6)
					output += "<div class='ghost3'></div>";

			}

			output += "\n</div>";
		}
		document.getElementById('world').innerHTML = output;
	}
	function displayPacman(){
		document.getElementById('pacman').style.top = pacman.y*20+"px";
		document.getElementById('pacman').style.left = pacman.x*20+"px";
	}
	function displaySecondPacman(){
		document.getElementById('secondpacman').style.top = secondpacman.y*20+"px";
		document.getElementById('secondpacman').style.left = secondpacman.x*20+"px";
	}
	function displayScore(){
		document.getElementById('score').innerHTML = score;
	}
	function displayLives(){
		document.getElementById('lives').innerHTML = lives;
	}
	displayLives();
	displayWorld();
	displayPacman();
	displaySecondPacman();
	displayScore();


	document.onkeydown = function(e){
		if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
			pacman.x --;
			$("#pacman").css("transform", "rotate(180deg)"); //37 = left
		}
		else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
			pacman.x ++;
			$("#pacman").css("transform", "rotate(0deg)"); //39 = right
		}
		else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] !=2){
			pacman.y --;
			$("#pacman").css("transform", "rotate(270deg)"); //38 = up
		}
		else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] !=2){
			pacman.y ++;
			$("#pacman").css("transform", "rotate(90deg)"); //40 = down
		}
		if(world[pacman.y][pacman.x] == 1){
			world[pacman.y][pacman.x] = 0;
			score+=10;
			displayWorld();
			displayScore();
		}
		if(world[pacman.y][pacman.x] == 3){
			world[pacman.y][pacman.x] = 0;
			score+=50;
			displayWorld();
			displayScore();
		}
		if(world[pacman.y][pacman.x]== 4){
			lives-=1
			displayWorld();
			displayLives();
		}
		if(world[pacman.y][pacman.x]== 5){
			lives-=1
			displayWorld();
			displayLives();
		}
		if(world[pacman.y][pacman.x]== 6){
			lives-=1
			displayWorld();
			displayLives();
		}
		displayPacman();
		displaySecondPacman;
	}
});