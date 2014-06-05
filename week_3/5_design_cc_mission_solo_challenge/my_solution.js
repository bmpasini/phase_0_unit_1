// This is a solo challenge

// Think of some objects and things you would like those objects to do
// Create a couple objectives (refer to the code combat mission objectives to tailor these to your mission)
// Hover over the this in the code section of any mission. What is it referring to? An object? A function? What kinds of attributes do you want to add to your objects? Create your objects in JavaScript.
// Think of the methods that are necessary to manipulate your objects and add them to your objects

// Your mission description:
// 
// Imagine you have been kidnapped and are trapped in 4x3 tiles maze. You start at the position 0,0 and have to find a weapon and an armor to defeat
// an enemy that is keeping the exit of this maze.
//
//    _______________
// 2 |___|___|_B_|_E_|
// 1 |___|_K_|___|___|
// 0 |_Y_|___|___|_G_|
//     0   1   2   3
//
// Y: You
// K: Kevlar Vest
// G: Gun
// B: Bullet
// E: Enemy
//

// Pseudocode
//	
// create an empty object called character
// define a property called armor for the object character and set its value to false
// define a property called gun for the object character and set its value to false
// define a property called bullet for the object character and set its value to false
//
// create an string called tile_0_0 and set its value to "The place where I was left rotting to death"
// create an string called tile_0_1 and set its value to "This place stinks.. Shoot! I just stepped in a dead body!"
// create an string called tile_0_2 and set its value to "Uou! I just slipped in a pile of shit"
// create an string called tile_1_0 and set its value to "The air is heavy. I can barely breath..."
// create an string called tile_1_1 and set its value to "Yes! I just found an armor!"
// create an string called tile_1_2 and set its value to "It is just me or his place is getting cold as hell?"
// create an string called tile_2_0 and set its value to "Is that my Rolex? Those crazy bastards broke my Rolex and left it here!!"
// create an string called tile_2_1 and set its value to "I wish I had just killed her. This would never had happened..."
// create an string called tile_2_2 and set its value to "Some bullets! If I just had a gun, things would be much easier.. My life sucks..""
// create an string called tile_3_0 and "I just stepped into something... Wow! An empty gun!"
// create an string called tile_3_1 and set its value to "Yikes! What a cold airflux! I wonder if I'm close to an exit..."
// create an string called tile_3_2 and set its value to "There is a door... Shoot! There is someone opening it! That guy who kidnapped me... What? He is holding a gun? Is he pointing it to me? POWWWWW!!! I'm dead."
//
// create an array called tile_y_0 and set it first element equal to tile_0_0, second to tile_0_1, third to tile_0_2
// create an array called tile_y_1 and set it first element equal to tile_1_0, second to tile_1_1, third to tile_1_2
// create an array called tile_y_2 and set it first element equal to tile_2_0, second to tile_2_1, third to tile_2_2
// create an array called tile_y_3 and set it first element equal to tile_3_0, second to tile_3_1, third to tile_3_2
// create an array called tile_x and set it first element equal to tile_y_0, second to tile_y_1, third to tile_y_2 and fourth to tile_y_3
// create var tile and set it to 0,0 
// 
// TILE 0,0
// console.log(tile_y_0[0])
// create var tile = {x: 0, y: 0}
// if (tile.x = 0 and tile.y = 0)
// ask for a what direction to go: ask("Where to go? Type: up or right", /.+/, function(direction))
// if direction equals to up: tile = {x: 0, y: 1}
// if direction equals to right: tile = {x: 1, y: 0}
//
// TILE 0,1
//
// if (tile.x = 0 and tile.y = 1)
// console.log(tile_y_1[0])
// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right or down")
// if direction equals to up: tile = {x: 0, y: 2}
// if direction equals to right: tile = {x: 1, y: 1}
// if direction equals to down: tile = {x: 0, y: 0}
// 
// TILE 0,2
//
// if (tile.x = 0 and tile.y = 2)
// console.log(tile_y_2[0])
// ask for a what direction to go: var direction = prompt("Where to go? Type: right or down")
// if direction equals to right: tile = {x: 1, y: 2}
// if direction equals to down: tile = {x: 0, y: 1}
// 
// TILE 1,0
// if (tile.x = 1 and tile.y = 0)
// console.log(tile_y_0[1])
// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right or left")
// if direction equals to up: tile = {x: 1, y: 1}
// if direction equals to right: tile = {x: 2, y: 0}
// if direction equals to left: tile = {x: 0, y: 0}
//
// TILE 1,1
//
// if (tile.x = 1 and tile.y = 1)
// if character.kevlar_vest = true: tile_y_1[1] = "Nothing here..."
// console.log(tile_y_1[1])
// if character.kevlar_vest = false: set character.kevlar_vest = true;
// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right, down or left")
// if direction equals to up: tile = {x: 1, y: 2}
// if direction equals to right: tile = {x: 2, y: 1}
// if direction equals to down: tile = {x: 1, y: 0}
// if direction equals to left: tile = {x: 0, y: 1}
// 
// TILE 1,2
//
// if (tile.x = 1 and tile.y = 2)
// console.log(tile_y_2[1])
// ask for a what direction to go: var direction = prompt("Where to go? Type: right, down or left")
// if direction equals to right: tile = {x: 2, y: 2}
// if direction equals to down: tile = {x: 1, y: 1}
// if direction equals to left: tile = {x: 0, y: 2}
// 
// TILE 2,0
// if (tile.x = 2 and tile.y = 0)
// console.log(tile_y_0[2])
// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right or left")
// if direction equals to up: tile = {x: 2, y: 1}
// if direction equals to right: tile = {x: 3, y: 0}
// if direction equals to left: tile = {x: 1, y: 0}
//
// TILE 2,1
//
// if (tile.x = 2 and tile.y = 1)
// console.log(tile_y_1[2])
// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right, down or left")
// if direction equals to up: tile = {x: 2, y: 2}
// if direction equals to right: tile = {x: 3, y: 1}
// if direction equals to down: tile = {x: 2, y: 0}
// if direction equals to left: tile = {x: 1, y: 1}
// 
// TILE 2,2
//
// if (tile.x = 2 and tile.y = 2)
// if (character.gun = true && character.bullet = false):  tile_y_2[1] = "Some bullets! Should I kill myself now or later?"
// if (character.gun = true && character.bullet = true):  tile_y_2[1] = "Nothing to see here..."
// console.log(tile_y_2[2])
// if character.bullet = false: set character.bullet = true;
// ask for a what direction to go: var direction = prompt("Where to go? Type: right, down or left")
// if direction equals to right: tile = {x: 3, y: 2}
// if direction equals to down: tile = {x: 2, y: 1}
// if direction equals to left: tile = {x: 1, y: 2}
// 
// TILE 3,0
// if (tile.x = 3 and tile.y = 0)
// if (character.gun = true): tile_y_0[3] = "Nothing here..."
// console.log(tile_y_0[3])
// if character.gun = false: set character.gun = true;
// ask for a what direction to go: var direction = prompt("Where to go? Type: up or left")
// if direction equals to up: tile = {x: 3, y: 1}
// if direction equals to left: tile = {x: 2, y: 0}
//
// TILE 3,1
//
// if (tile.x = 3 and tile.y = 1)
// console.log(tile_y_1[3])
// ask for a what direction to go: var direction = prompt("Where to go? Type: up, down or left")
// if direction equals to up: tile = {x: 3, y: 2}
// if direction equals to down: tile = {x: 3, y: 0}
// if direction equals to left: tile = {x: 2, y: 1}
// 
// TILE 3,2
//
// if (tile.x = 3 and tile.y = 2)
// if (character.gun = true && character.bullet = true && character.kevlar_vest = true):  tile_y_2[3] = "There is a door! Someone is entering here. Should I shoot him?"
// console.log(tile_y_2[3])
// if (character.gun = false && character.bullet = false && character.kevlar_vest = false): character.kevlar_vest = false, character.gun = false, character.bullet = false, tile = {x: 0, y: 0}
// if (character.gun = true && character.bullet = true && character.kevlar_vest = true):  var shoot = prompt("Yes or No?");
// if shoot = yes : console.log("Congratulations! You escaped!")
// if shoot = no : character.kevlar_vest = false, character.gun = false, character.bullet = false, tile = {x: 0, y: 0}



// Initial Code

// create an empty object called character
var character = {};
// define a property called kevlar_vest for the object character and set its value to false
character.kevlar_vest = false;
// define a property called gun for the object character and set its value to false
character.gun = false;
// define a property called bullet for the object character and set its value to false
character.bullet = false;
//
// create an string called tile_0_0 and set its value to "The place where I was left rotting to death"
var tile_0_0 = "The place where I was left rotting to death";
// create an string called tile_0_1 and set its value to "This place stinks.. Shoot! I just stepped in a dead body!"
var tile_0_1 = "This place stinks.. Shoot! I just stepped in a dead body!";
// create an string called tile_0_2 and set its value to "Wow! I just slipped in a pile of shit"
var tile_0_2 = "Wow! I just slipped in a pile of shit";
// create an string called tile_1_0 and set its value to "The air is heavy. I can barely breath..."
var tile_1_0 = "The air is heavy. I can barely breath...";
// create an string called tile_1_1 and set its value to "Yes! I just found an armor!"
var tile_1_1 = "Oh yeah! I just found an armor!";
// create an string called tile_1_2 and set its value to "It is just me or his place is getting cold as hell?"
var tile_1_2 = "It is just me or his place is getting cold as hell?";
// create an string called tile_2_0 and set its value to "Is that my Rolex? Those crazy bastards broke my Rolex and left it here!!"
var tile_2_0 = "Is that my Rolex? Those crazy bastards broke my Rolex and left it here!!";
// create an string called tile_2_1 and set its value to "I wish I had just killed her. This would never had happened..."
var tile_2_1 = "I wish I had just killed her. This would never had happened...";
// create an string called tile_2_2 and set its value to "Some bullets! If I just had a gun, things would be much easier.. My life sucks.."
var tile_2_2 = "Some bullets! If I just had a gun, things would be much easier.. My life sucks..";
// create an string called tile_3_0 and "I just stepped into something... Wow! An empty gun!"
var tile_3_0 = "I just stepped into something... Wow! An empty gun!";
// create an string called tile_3_1 and set its value to "Yikes! What a cold airflux! I wonder if I'm close to an exit..."
var tile_3_1 = "Yikes! What a cold airflux! I wonder if I'm close to an exit...";
// create an string called tile_3_2 and set its value to "There is a door... Shoot! There is someone opening it! That guy who kidnapped me... What? He is holding a gun? Is he pointing it to me? POWWWWW!!! I'm dead."
var tile_3_2 = "There is a door... Shoot! There is someone opening it! That guy who kidnapped me... What? He is holding a gun? Is he pointing it to me? POWWWWW!!! I'm dead.";
//
// create an array called tile_y_0 and set it first element equal to tile_0_0, second to tile_0_1, third to tile_0_2
var tile_y_0 = [tile_0_0, tile_0_1, tile_0_2];
// create an array called tile_y_1 and set it first element equal to tile_1_0, second to tile_1_1, third to tile_1_2
var tile_y_1 = [tile_1_0, tile_1_1, tile_1_2];
// create an array called tile_y_2 and set it first element equal to tile_2_0, second to tile_2_1, third to tile_2_2
var tile_y_2 = [tile_2_0, tile_2_1, tile_2_2];
// create an array called tile_y_3 and set it first element equal to tile_3_0, second to tile_3_1, third to tile_3_2
var tile_y_3 = [tile_3_0, tile_3_1, tile_3_2];
// create an array called tile_x_y and set it first element equal to tile_y_0, second to tile_y_1, third to tile_y_2 and fourth to tile_y_3
var tile_x_y = [tile_y_0, tile_y_1, tile_y_2, tile_y_3];
//
// create var tile = {x: 0, y: 0}
var tile = {x: 0, y: 0};
//

// welcome players to "The Violent Game"
console.log("Welcome to The Violent Game! If you don't have the stomach please don't even play it.");

// write some story for the first line of the game make sense...
console.log("Where am I? I can barely remember who I am... My head hurts... My hand hurts... Where are my fingers??? Oh... I know where I am...");

// keep it running until win the game
while (var running = 1) {
	// TILE 0,0
	// if (tile.x = 0 and tile.y = 0)
	if (tile.x = 0 && tile.y = 0) {
		// console.log(tile_x_y[0][0])
		console.log(tile_x_y[0][0]);
		while(var i = 0) {
			// ask for a what direction to go: prompt("Where to go? Type: up or right")
			var direction = prompt("Where to go? Type: up or right");
			// if direction equals to up: tile = {x: 0, y: 1}
			if (direction = "up") {
				tile = {x: 0, y: 1};
				i = 1;
			}
			// if direction equals to right: tile = {x: 1, y: 0}
			else if (direction = "right") {
				tile = {x: 1, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	//
	// TILE 0,1
	//
	// if (tile.x = 0 and tile.y = 1)
	else if (tile.x = 0 && tile.y = 1) {
		// console.log(tile_x_y[0][1])
		console.log(tile_x_y[0][1]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right or down")
			var direction = prompt("Where to go? Type: up, right or down");
			// if direction equals to up: tile = {x: 0, y: 2}
			if (direction = "up") {
				tile = {x: 0, y: 2};
				i = 1;
			}
			// if direction equals to right: tile = {x: 1, y: 1}
			else if (direction = "right") {
				tile = {x: 1, y: 1};
				i = 1;
			}
			// if direction equals to down: tile = {x: 0, y: 0}
			else if (direction = "down") {
				tile = {x: 0, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	// 
	// TILE 0,2
	//
	// if (tile.x = 0 and tile.y = 2)
	else if (tile.x = 0 && tile.y = 2) {
		// console.log(tile_x_y[0][2])
		console.log(tile_x_y[0][2]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: right or down")
			var direction = prompt("Where to go? Type: right or down");
			// if direction equals to right: tile = {x: 1, y: 2}
			if (direction = "right") {
				tile = {x: 1, y: 2};
				i = 1;
			}
			// if direction equals to down: tile = {x: 0, y: 1}
			else if (direction = "down") {
				tile = {x: 0, y: 1};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	// 
	// TILE 1,0
	// if (tile.x = 1 and tile.y = 0)
	else if (tile.x = 1 && tile.y = 0) {
		// console.log(tile_x_y[1][0])
		console.log(tile_x_y[1][0]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right or left")
			var direction = prompt("Where to go? Type: up, right or left");
			// if direction equals to up: tile = {x: 1, y: 1}
			if (direction = "up") {
				tile = {x: 1, y: 1};
				i = 1;
			}
			// if direction equals to right: tile = {x: 2, y: 0}
			else if (direction = "right") {
				tile = {x: 2, y: 0};
				i = 1;
			}
			// if direction equals to left: tile = {x: 0, y: 0}
			else if (direction = "left") {
				tile = {x: 0, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	//
	// TILE 1,1
	//
	// if (tile.x = 1 and tile.y = 1)
	else if (tile.x = 1 && tile.y = 0) {
		// if character.kevlar_vest = true: tile_x_y[1][1] = "Nothing here..."
		if (character.kevlar_vest = true) {
			tile_x_y[1][1] = "Nothing here...";
		}
		// if character.kevlar_vest = false: set character.kevlar_vest = true;
		if (character.kevlar_vest = false) {
			tile[1][1] = "Oh yeah! I just found an armor!";
			character.kevlar_vest = true;
		}
		// console.log(tile_x_y[1][1])
		console.log(tile_x_y[1][1]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right, down or left")
			var direction = prompt("Where to go? Type: up, right, down or left");
			// if direction equals to up: tile = {x: 1, y: 2}
			if (direction = "up") {
				tile = {x: 1, y: 2};
				i = 1;
			}
			// if direction equals to right: tile = {x: 2, y: 1}
			else if (direction = "right") {
				tile = {x: 2, y: 1};
				i = 1;
			}
			// if direction equals to down: tile = {x: 1, y: 0}
			else if (direction = "down") {
				tile = {x: 1, y: 0};
				i = 1;
			}
			// if direction equals to left: tile = {x: 0, y: 1}
			else if (direction = "left") {
				tile = {x: 0, y: 1};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	// 
	// TILE 1,2
	//
	// if (tile.x = 1 and tile.y = 2)
	else if (tile.x = 1 && tile.y = 2) {
		// console.log(tile_x_y[1][2])
		console.log(tile_x_y[1][2]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: right, down or left")
			var direction = prompt("Where to go? Type: right, down or left");
			// if direction equals to right: tile = {x: 2, y: 2}
			if (direction = "right") {
				tile = {x: 2, y: 2};
				i = 1;
			}
			// if direction equals to down: tile = {x: 1, y: 1}
			else if (direction = "down") {
				tile = {x: 1, y: 1};
				i = 1;
			}
			// if direction equals to left: tile = {x: 0, y: 2}
			else if (direction = "left") {
				tile = {x: 0, y: 2};
				i = 1;
			}		
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	// 
	// TILE 2,0
	// if (tile.x = 2 and tile.y = 0)
	else if (tile.x = 2 && tile.y = 0) {
		// console.log(tile_x_y[2][0])
		console.log(tile_x_y[2][0]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right or left")
			var direction = prompt("Where to go? Type: up, right or left");
			// if direction equals to up: tile = {x: 2, y: 1}
			if (direction = "up") {
				tile = {x: 2, y: 1};
				i = 1;
			}
			// if direction equals to right: tile = {x: 3, y: 0}
			else if (direction = "right") {
				tile = {x: 3, y: 0};
				i = 1;
			}
			// if direction equals to left: tile = {x: 1, y: 0}
			else if (direction = "left") {
				tile = {x: 1, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	//
	// TILE 2,1
	//
	// if (tile.x = 2 and tile.y = 1)
	else if (tile.x = 2 && tile.y = 1) {
		// console.log(tile_x_y[2][1])
		console.log(tile_x_y[2][1]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: up, right, down or left")
			var direction = prompt("Where to go? Type: up, right, down or left");
			// if direction equals to up: tile = {x: 2, y: 2}
			if (direction = "up") {
				tile = {x: 2, y: 2};
				i = 1;
			}
			// if direction equals to right: tile = {x: 3, y: 1}
			else if (direction = "right") {
				tile = {x: 3, y: 1};
				i = 1;
			}
			// if direction equals to down: tile = {x: 2, y: 0}
			else if (direction = "down") {
				tile = {x: 2, y: 0};
				i = 1;
			}
			// if direction equals to left: tile = {x: 1, y: 1}
			else if (direction = "left") {
				tile = {x: 1, y: 1};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	// 
	// TILE 2,2
	//
	// if (tile.x = 2 and tile.y = 2)
	else if (tile.x = 2 && tile.y = 2) {
		// if (character.gun = true && character.bullet = false):  tile_x_y[2][2] = "Some bullets! Should I kill myself now or later?"
		if (character.gun = true && character.bullet = false) {
			tile_x_y[2][2] = "Some bullets! Should I kill myself now or later?";
		} 
		// if (character.gun = true && character.bullet = true):  tile_x_y[2][2] = "Nothing to see here..."
		if (character.gun = true && character.bullet = true) {
			tile_x_y[2][2] = "Nothing to see here...";
		}
		// if character.bullet = false: set character.bullet = true;
		if (character.gun = false && character.bullet = false) {
			tile_x_y[2][2] = "Some bullets! If I just had a gun, things would be much easier.. My life sucks..";
			character.bullet = true;
		}
		// console.log(tile_x_y[2][2])
		console.log(tile_x_y[2][2]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: right, down or left")
			var direction = prompt("Where to go? Type: right, down or left");
			// if direction equals to right: tile = {x: 3, y: 2}
			if (direction = "right") {
				tile = {x: 3, y: 2};
				i = 1;
			}
			// if direction equals to down: tile = {x: 2, y: 1}
			else if (direction = "down") {
				tile = {x: 2, y: 1};
				i = 1;
			}
			// if direction equals to left: tile = {x: 1, y: 2}
			else if (direction = "left") {
				tile = {x: 1, y: 2};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	// 
	// TILE 3,0
	// if (tile.x = 3 and tile.y = 0)
	else if (tile.x = 3 && tile.y = 0) {
		// if (character.gun = true): tile_x_y[3][0] = "Nothing here..."
		if (character.gun = true) {
			tile_x_y[3][0] = "Nothing here...";
		}
		// if character.gun = false: set character.gun = true;
		if (character.gun = false) {
			tile[3][0] = "I just stepped into something... Wow! An empty gun!";
			character.gun = true;
		}
		// console.log(tile_x_y[3][0])
		console.log(tile_x_y[3][0]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: up or left")
			var direction = prompt("Where to go? Type: up or left");
			// if direction equals to up: tile = {x: 3, y: 1}
			if (direction = "up") {
				tile = {x: 3, y: 1};
				i = 1;
			}
			// if direction equals to left: tile = {x: 2, y: 0}
			else if (direction = "left") {
				tile = {x: 2, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	//
	// TILE 3,1
	//
	// if (tile.x = 3 and tile.y = 1)
	else if (tile.x = 3 && tile.y = 1) {
	// console.log(tile_x_y[3][1])
	console.log(tile_x_y[3][1]);
		while(var i = 0) {
			// ask for a what direction to go: var direction = prompt("Where to go? Type: up, down or left")
			var direction = prompt("Where to go? Type: up, down or left");
			// if direction equals to up: tile = {x: 3, y: 2}
			if (direction = "up") {
				tile = {x: 3, y: 2};
				i = 1;
			}
			// if direction equals to down: tile = {x: 3, y: 0}
			else if (direction = "down") {
				tile = {x: 3, y: 0};
				i = 1;
			}
			// if direction equals to left: tile = {x: 2, y: 1}
			else if (direction = "left") {
				tile = {x: 2, y: 1};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}
	// 
	// TILE 3,2
	//
	// if (tile.x = 3 and tile.y = 2)
	else if (tile.x = 3 && tile.y = 2) {
		// if (character.gun = true && character.bullet = true && character.kevlar_vest = true): tile_x_y[3][2] = "There is a door! Someone is entering here. Should I shoot him?"
		if (character.gun = true && character.bullet = true && character.kevlar_vest = true) {
			tile_x_y[3][2] = "There is a door! Someone is entering here. Should I shoot him?";
		}
		// console.log(tile_x_y[3][2])
		console.log(tile_x_y[3][2]);
		// if (character.gun = false or character.bullet = false or character.kevlar_vest = false): character.kevlar_vest = false, character.gun = false, character.bullet = false, tile = {x: 0, y: 0}
		if (character.gun = false || character.bullet = false || character.kevlar_vest = false) {
			character.kevlar_vest = false;
			character.gun = false;
			character.bullet = false;
			tile = {x: 0, y: 0}
		}
		// if (character.gun = true && character.bullet = true && character.kevlar_vest = true):  var shoot = prompt("Yes or No?");
		else {
			var shoot = prompt("Yes or No?");
			// if shoot = yes : console.log("Congratulations! You escaped!")
			while (var i = 0) {
				if (shoot = "Yes") {
					console.log("Congratulations! You escaped!");
					i = 1;
					running = 0;
				}
				// if shoot = no : character.kevlar_vest = false, character.gun = false, character.bullet = false, tile = {x: 0, y: 0}
				else if (shoot = "No") {
					character.kevlar_vest = false;
					character.gun = false;
					character.bullet = false;
					tile_x_y[3][2] = "There is a door... Shoot! There is someone opening it! That guy who kidnapped me... What? He is holding a gun? Is he pointing it to me? POWWWWW!!! I'm dead.";
					tile = {x: 0, y: 0}
					i = 1;
				}
				else {
					console.log("Wrong input. Try again.");
				}
			}
		}
	}
	else {
		running = 0;
	}
}



// Refactored Code

var character = {};
character.kevlar_vest = false;
character.gun = false;
character.bullet = false;

var tile_0_0 = "This is the place where I was left rotting to death";
var tile_0_1 = "This place stinks.. Shoot! I just stepped in a dead body!";
var tile_0_2 = "Wow! I just slipped in a pile of shit";
var tile_1_0 = "The air is heavy. I can barely breath...";
var tile_1_1 = "Oh yeah! I just found an armor!";
var tile_1_2 = "It is just me or his place is getting cold as hell?";
var tile_2_0 = "Is that my Rolex? Those crazy bastards broke my Rolex and left it here!!";
var tile_2_1 = "I wish I had just killed her. This would never had happened...";
var tile_2_2 = "Some bullets! If I just had a gun, things would be much easier.. My life sucks..";
var tile_3_0 = "I just stepped into something... Wow! An empty gun!";
var tile_3_1 = "Yikes! What a cold airflux! I wonder if I'm close to an exit...";
var tile_3_2 = "There is a door... Shoot! There is someone opening it! That guy who kidnapped me... What? He is holding a gun? Is he pointing it to me? POWWWWW!!! I'm dead.";

var tile_y_0 = [tile_0_0, tile_0_1, tile_0_2];
var tile_y_1 = [tile_1_0, tile_1_1, tile_1_2];
var tile_y_2 = [tile_2_0, tile_2_1, tile_2_2];
var tile_y_3 = [tile_3_0, tile_3_1, tile_3_2];
var tile_x_y = [tile_y_0, tile_y_1, tile_y_2, tile_y_3];

var tile = {x: 0, y: 0};

console.log("Welcome to The Violent Game! If you don't have the stomach please don't even play it.");

console.log("Where am I? I can barely remember who I am... My head hurts... My hand hurts... Where are my fingers??? Oh... I know where I am...");

while (var running = 1) {

	if (tile.x = 0 && tile.y = 0) {
		console.log(tile_x_y[0][0]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: up or right");
			if (direction = "up") {
				tile = {x: 0, y: 1};
				i = 1;
			}
			else if (direction = "right") {
				tile = {x: 1, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 0 && tile.y = 1) {

		console.log(tile_x_y[0][1]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: up, right or down");
			if (direction = "up") {
				tile = {x: 0, y: 2};
				i = 1;
			}
			else if (direction = "right") {
				tile = {x: 1, y: 1};
				i = 1;
			}
			else if (direction = "down") {
				tile = {x: 0, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 0 && tile.y = 2) {
		console.log(tile_x_y[0][2]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: right or down");
			if (direction = "right") {
				tile = {x: 1, y: 2};
				i = 1;
			}
			else if (direction = "down") {
				tile = {x: 0, y: 1};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 1 && tile.y = 0) {
		console.log(tile_x_y[1][0]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: up, right or left");
			if (direction = "up") {
				tile = {x: 1, y: 1};
				i = 1;
			}
			else if (direction = "right") {
				tile = {x: 2, y: 0};
				i = 1;
			}
			else if (direction = "left") {
				tile = {x: 0, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 1 && tile.y = 0) {
		if (character.kevlar_vest = true) {
			tile_x_y[1][1] = "Nothing here...";
		}
		if (character.kevlar_vest = false) {
			tile[1][1] = "Oh yeah! I just found an armor!";
			character.kevlar_vest = true;
		}
		console.log(tile_x_y[1][1]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: up, right, down or left");
			if (direction = "up") {
				tile = {x: 1, y: 2};
				i = 1;
			}
			else if (direction = "right") {
				tile = {x: 2, y: 1};
				i = 1;
			}
			else if (direction = "down") {
				tile = {x: 1, y: 0};
				i = 1;
			}
			else if (direction = "left") {
				tile = {x: 0, y: 1};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 1 && tile.y = 2) {
		console.log(tile_x_y[1][2]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: right, down or left");
			if (direction = "right") {
				tile = {x: 2, y: 2};
				i = 1;
			}
			else if (direction = "down") {
				tile = {x: 1, y: 1};
				i = 1;
			}
			else if (direction = "left") {
				tile = {x: 0, y: 2};
				i = 1;
			}		
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 2 && tile.y = 0) {
		console.log(tile_x_y[2][0]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: up, right or left");
			if (direction = "up") {
				tile = {x: 2, y: 1};
				i = 1;
			}
			else if (direction = "right") {
				tile = {x: 3, y: 0};
				i = 1;
			}
			else if (direction = "left") {
				tile = {x: 1, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 2 && tile.y = 1) {
		console.log(tile_x_y[2][1]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: up, right, down or left");
			if (direction = "up") {
				tile = {x: 2, y: 2};
				i = 1;
			}
			else if (direction = "right") {
				tile = {x: 3, y: 1};
				i = 1;
			}
			else if (direction = "down") {
				tile = {x: 2, y: 0};
				i = 1;
			}
			else if (direction = "left") {
				tile = {x: 1, y: 1};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 2 && tile.y = 2) {
		if (character.gun = true && character.bullet = false) {
			tile_x_y[2][2] = "Some bullets! Should I kill myself now or later?";
		} 
		if (character.gun = true && character.bullet = true) {
			tile_x_y[2][2] = "Nothing to see here...";
		}
		if (character.gun = false && character.bullet = false) {
			tile_x_y[2][2] = "Some bullets! If I just had a gun, things would be much easier.. My life sucks..";
			character.bullet = true;
		}
		console.log(tile_x_y[2][2]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: right, down or left");
			if (direction = "right") {
				tile = {x: 3, y: 2};
				i = 1;
			}
			else if (direction = "down") {
				tile = {x: 2, y: 1};
				i = 1;
			}
			else if (direction = "left") {
				tile = {x: 1, y: 2};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 3 && tile.y = 0) {
		if (character.gun = true) {
			tile_x_y[3][0] = "Nothing here...";
		}
		if (character.gun = false) {
			tile[3][0] = "I just stepped into something... Wow! An empty gun!";
			character.gun = true;
		}
		console.log(tile_x_y[3][0]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: up or left");
			if (direction = "up") {
				tile = {x: 3, y: 1};
				i = 1;
			}
			else if (direction = "left") {
				tile = {x: 2, y: 0};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 3 && tile.y = 1) {
	console.log(tile_x_y[3][1]);
		while(var i = 0) {
			var direction = prompt("Where to go? Type: up, down or left");
			if (direction = "up") {
				tile = {x: 3, y: 2};
				i = 1;
			}
			else if (direction = "down") {
				tile = {x: 3, y: 0};
				i = 1;
			}
			else if (direction = "left") {
				tile = {x: 2, y: 1};
				i = 1;
			}
			else {
				console.log("Wrong input. Try again.");
			}
		}
	}

	else if (tile.x = 3 && tile.y = 2) {
		if (character.gun = true && character.bullet = true && character.kevlar_vest = true) {
			tile_x_y[3][2] = "There is a door! Someone is entering here. Should I shoot him?";
		}
		console.log(tile_x_y[3][2]);
		if (character.gun = false || character.bullet = false || character.kevlar_vest = false) {
			character.kevlar_vest = false;
			character.gun = false;
			character.bullet = false;
			tile = {x: 0, y: 0}
		}
		else {
			var shoot = prompt("Yes or No?");
			while (var i = 0) {
				if (shoot = "Yes") {
					console.log("Congratulations! You escaped!");
					i = 1;
					running = 0;
				}
				else if (shoot = "No") {
					character.kevlar_vest = false;
					character.gun = false;
					character.bullet = false;
					tile_x_y[3][2] = "There is a door... Shoot! There is someone opening it! That guy who kidnapped me... What? He is holding a gun? Is he pointing it to me? POWWWWW!!! I'm dead.";
					tile = {x: 0, y: 0}
					i = 1;
				}
				else {
					console.log("Wrong input. Try again.");
				}
			}
		}
	}
	else {
		running = 0;
	}
}



// Reflection
// 
// This challenge was very fun. I particularly prefer to code something like this, rather than design and code a website, but that's the commercial
// part of being a programmer and you can just skip that, I guess.
//
// I had one major problem here that I haven't figured out how to deal with it yet. I'll have to come back to it later. I don't know how to create
// a function in JavaScript equivalent to the Ruby function 'gets'. So, I'm stuck when the game player has to change tiles. However, I managed
// to test the game setting the directions the character would do, before playing. So, the game lost most of its interactivity. I searched a lot
// online about this issue, but I guess that JavaScrip doesn't have this functionallity and I didn't figured out exactly why. I've read somewhere
// that it is because JavaScript is Asynchronous, but I'm not sure what that means. I've stumbled upon some codes created to make the console read
// inputs, but they only functioned locally and I would have to create my whole program inside of that function, to be able to use that piece of
// code. I've also seen that there is a library on Firefox that this "gets" function, but I didn't tried that out yet.
// 
// This challenge was awesome to make me solidify my knowledge of JavaScript syntax. Also, the freedom to create whatever I want, pushed me to think
// like a true programmer, as there will be no one to guide me through it in real life.
//
// One thing more that is valid to mention is that now it is clearer to me the importance of the process pseudocoding, transforming it into code
// and then refactoring it. It makes a lot of sense, because you can leave your pseudocode above each line of the code, which makes it easier to
// remember what that line does without having to think to much.
//
//