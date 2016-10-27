$(document).ready(function(){
	var world = [
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
		[2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2],
		[2,1,1,1,1,2,2,2,2,1,2,1,2,2,2,2,1,1,1,1,2],
		[2,2,2,2,1,2,1,3,2,1,2,1,2,3,1,2,1,2,2,2,2],
		[2,1,1,1,1,2,1,2,2,1,1,1,2,2,1,2,1,1,1,1,2],
		[2,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2],
		[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
		[2,1,2,1,1,1,2,2,2,1,1,1,2,2,2,1,1,1,2,1,2],
		[2,2,1,1,1,2,3,2,0,0,0,0,0,2,3,2,1,1,1,2,2],
		[2,3,1,1,2,1,1,2,0,0,0,0,0,2,1,1,2,1,1,3,2],
		[2,2,1,1,1,1,1,2,2,2,2,2,2,2,1,1,1,1,1,2,2],
		[2,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,2],
		[2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
		[2,1,1,1,1,2,1,2,1,2,2,2,1,2,1,2,1,1,1,1,2],
		[2,1,2,1,1,2,2,2,1,1,1,1,1,2,2,2,1,1,2,1,2],
		[2,1,2,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
		[2,1,2,2,2,1,2,1,2,1,1,1,2,1,2,1,2,2,2,1,2],
		[2,1,1,3,2,1,2,3,2,1,1,1,2,3,2,1,2,3,1,1,2],
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]	
	];

	var score = 0;

	var lives = 3 || 3;

	var pacman = {
		x: 1, 
		y: 1
	};
	var ghost1 ={
		x: 9, 
		y: 9
	};
	var ghost2 = {
		x: 10, 
		y: 9
	};
	var ghost3 = {
		x: 11, 
		y: 9
	};
	var secondpacman = {
		x: 19,
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
			}

			output += "\n</div>";
		}
		document.getElementById('world').innerHTML = output;
	}

	function displayPacman(){
		document.getElementById('pacman').style.top = pacman.y*20+"px";
		document.getElementById('pacman').style.left = pacman.x*20+"px";
	}

	function displayGhost1(){
		document.getElementById('ghost1').style.top = ghost1.y*20+"px";
		document.getElementById('ghost1').style.left = ghost1.x*20+"px";
	}

	function displayGhost2(){
		document.getElementById('ghost2').style.top = ghost2.y*20+"px";
		document.getElementById('ghost2').style.left = ghost2.x*20+"px";
	}

	function displayGhost3(){
		document.getElementById('ghost3').style.top = ghost3.y*20+"px";
		document.getElementById('ghost3').style.left = ghost3.x*20+"px";
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

	function moveGhost1(){
		var random = Math.floor(Math.random() * 4) + 37; 
		if(random === 37){
			if(world[ghost1.y][ghost1.x-1] !=2){
				$('#ghost1').css('transform', 'rotate(0deg)')
				ghost1.x--;
			}
		}
		else if (random === 38){
			if(world[ghost1.y-1][ghost1.x] !=2){
				$('#ghost1').css('transform', 'rotate(90deg)')
				ghost1.y--;
			}
		}
		else if(random === 39){
			if(world[ghost1.y][ghost1.x+1] !=2){
				$('#ghost1').css('transform', 'rotate(190deg)')
				ghost1.x++;
			}
		}
		else if(random ===40){
			if(world[ghost1.y+1][ghost1.x] !=2){
				$('#ghost1').css('transform', "rotate(270deg)")
				ghost1.y ++;
			}
		}
		if ( ghost1.y === pacman.y && ghost1.x === pacman.x){
				lives-=1
				pacman = {
					x:1,
					y:1
				}
		}	
		displayGhost1();
		displayWorld();
	}
	setInterval(moveGhost1, 300);

	function moveGhost2(){
		var random = Math.floor(Math.random() * 4) + 37; 
		if(random === 37){
			if(world[ghost2.y][ghost2.x-1] !=2){
				$('#ghost2').css('transform', 'rotate(0deg)')
				ghost2.x--;
			}
		}
		else if (random === 38){
			if(world[ghost2.y-1][ghost2.x] !=2){
				$('#ghost2').css('transform', 'rotate(90deg)')
				ghost2.y--;
			}
		}
		else if(random === 39){
			if(world[ghost2.y][ghost2.x+1] !=2){
				$('#ghost2').css('transform', 'rotate(190deg)')
				ghost2.x++;
			}
		}
		else if(random ===40){
			if(world[ghost2.y+1][ghost2.x] !=2){
				$('#ghost2').css('transform', "rotate(270deg)")
				ghost2.y ++;
			}
		}
		if (ghost2.y === pacman.y && ghost2.x === pacman.x){
				lives-= 1 
				pacman = {
					x:1,
					y:1
				}
		}	
		displayGhost2();
		displayWorld();
	}
	setInterval(moveGhost2, 150);
	function moveGhost3(){
		var random = Math.floor(Math.random() * 4) + 37; 
		if(random === 37){
			if(world[ghost3.y][ghost3.x-1] !=2){
				$('#ghost3').css('transform', 'rotate(0deg)')
				ghost3.x--;
			}
		}
		else if (random === 38){
			if(world[ghost3.y-1][ghost3.x] !=2){
				$('#ghost3').css('transform', 'rotate(90deg)')
				ghost3.y--;
			}
		}
		else if(random === 39){
			if(world[ghost3.y][ghost3.x+1] !=2){
				$('#ghost3').css('transform', 'rotate(190deg)')
				ghost3.x++;
			}
		}
		else if(random ===40){
			if(world[ghost3.y+1][ghost3.x] !=2){
				$('#ghost3').css('transform', "rotate(270deg)")
				ghost3.y ++;
			}
		}
		if (ghost3.y === pacman.y && ghost3.x === pacman.x){
				lives-=1
				pacman = {
					x:1,
					y:1
				}
		}	
		displayGhost3();
		displayWorld();
	}
	setInterval(moveGhost3, 100);
	displayLives();
	displayWorld();
	displayPacman();
	displaySecondPacman();
	displayScore();
	displayGhost1();
	displayGhost2();
	displayGhost3();

	document.onkeydown = function(e){
		if(e.keyCode == 37 && world[pacman.y][pacman.x-1] !== 2){
			pacman.x --;
			$("#pacman").css("transform", "rotate(180deg)"); //37 = left
		}
		else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] !== 2){
			pacman.x ++;
			$("#pacman").css("transform", "rotate(0deg)"); //39 = right
		}
		else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] !==2){
			pacman.y --;
			$("#pacman").css("transform", "rotate(270deg)"); //38 = up
		}
		else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] !==2){
			pacman.y ++;
			$("#pacman").css("transform", "rotate(90deg)"); //40 = down
		}
		if(world[pacman.y][pacman.x] === 1){
			world[pacman.y][pacman.x] = 0;
			score+=10;
			displayWorld();
			displayScore();
		}
		if(world[pacman.y][pacman.x] === 3){
			world[pacman.y][pacman.x] = 0;
			score+=50;
			displayWorld();
			displayScore();
		}
		displayPacman();
		displaySecondPacman();
		displayLives();
	}
});