$(document).ready(function(){
	var score = 0;
	var hero = {
		x:300,
		y:400
	}

	var enemies = [{x: 50, y:50}, {x:75, y:150}, {x:150, y:50}, {x: 225, y:150}, {x:300, y:50}, {x:375, y:150}, {x: 450, y:50}];

	var bullets =[];

	function displayHero(){
		document.getElementById('hero').style['top'] = hero.y +"px";
		document.getElementById('hero').style['left'] = hero.x +"px";
	}

	function displayEnemies(){
		var output= '';
		for(var i=0; i<enemies.length-1; i++){
			output += "<div class='enemy1' style='top:"+enemies[i].y+"px; left: "+enemies[i].x+"px;'></div>";
		}
		document.getElementById('enemies').innerHTML = output;
		for(var i=6; i<enemies.length; i++){
			output += "<div class='enemy2' style='top:"+enemies[i].y+"px; left: "+enemies[i].x+"px;'></div>";
		}
		document.getElementById('enemies').innerHTML = output;
		// console.log(output);
	}

	function moveEnemies(){
		for(var i=0; i<enemies.length; i++){
			enemies[i].y +=5;
			if(enemies[i].y >540){
				enemies[i].y=0;
				enemies[i].x=Math.random()*500;
			}
		}
	}
	function moveBullets(){
		for(var i=0; i<bullets.length; i++){
			bullets[i].y -=5;

			if(bullets[i].y<0){
				bullets[i] = bullets[bullets.length-1];
				bullets.pop();
			}
		}
	}

	function displayBullets(){
		var output = '';
		for(var i=0; i<bullets.length; i++){
			output += "<div class='bullet' style='top:"+bullets[i].y+"px; left: "+bullets[i].x+"px;'></div>";
		}
		document.getElementById('bullets').innerHTML = output;
	}
	
	function displayScore(){
		document.getElementById('score').innerHTML = score;
	}

	function gameLoop(){
		displayHero();
		moveEnemies();
		displayEnemies();
		moveBullets();
		displayBullets();
		detectCollision();
		displayScore();
	}

	function detectCollision(){
		var output = ''
		for(var i=0; i<bullets.length; i++){
			for (var j=0; j<enemies.length; j++){
				if(Math.abs(bullets[i].x - enemies[j].x) < 15 && Math.abs(
					bullets[i].y - enemies[j].y) <10){
					score += 10;				
				}
				if(Math.abs(bullets[i].x - enemies[j].x) < 15&& Math.abs(
					bullets[i].y - enemies[j].y) <10){
					$(".enemy1").css('background-position', '-110px -20px');
				}
			}
		}
		var output = ''
		for (var j=0; j<enemies.length; j++){
			if(Math.abs(hero.x - enemies[j].x) <10&& Math.abs(
				hero.y - enemies[j].y) < 5){
				score -= 50;
			}
		}
	}

	setInterval(gameLoop, 30);

	document.onkeydown= function(a) {
		if(a.keyCode == 37){
			hero.x -= 10;
		}else if (a.keyCode == 39){
			hero.x+=10;
		}else if(a.keyCode == 38){
			hero.y -=10;
		}else if(a.keyCode == 40){
			hero.y +=10;
		}else if (a.keyCode ==32){
			bullets.push({x:hero.x+8, y:hero.y-15});
			displayBullets();
		}
	}
	displayHero();
	displayEnemies();

	
});