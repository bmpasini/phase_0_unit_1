// I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// RESCUE MISSION

//PSEUDOCODE:
// move down 2x
// move right 1x
// move up 2x
// move right 2x
// move down 1x
// ATTACK!

// CODE:
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();


 
// GRAB THE MUSHROOM

// PSEUDOCODE:
// move up 1x
// move right 1x
// move left 1x
// move up 1x
// ATTACK!

// CODE:
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 

 
// DRINK ME

// PSEUDOCODE:
// ATTACK!
// move right 1x
// move down 1x
// move up 1x
// move right 1x
// ATTACK!

// CODE:
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();



// TAUNT THE GUARDS

// PSEUDOCODE:
// move right 1x
// bust door down
// move right 1x
// say "Hey there!"
// move left 2x
// say "Attack!"
// move right 1x
// say "Follow me."
// move right 2x
// move up 1x
// move right 1x
// say "Attack!" 2x
// say "Hey there!"
// ATTACK!
// move right 1x
// say "Follow me."
// move right 1x

// CODE:
this.moveRight();
this.bustDownDoor();
// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Attack!");
this.say("Attack!");
this.say("Hey there!");
this.attackNearbyEnemy();
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();


// IT'S A TRAP!

// PSEUDOCODE
// move down 2x
// say "Hey there!"
// move up 1x
// say "Attack!"
// move up 1x

// CODE:
// Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.say("Attack!");
this.moveUp(); 


// BREAK THE PRISON

// PSEUDOCODE:
// create a if statement for each character
// if the character is an enemy return false
// ife the character is an ally return true

// CODE:
// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Gordon")
    return true;
if(name === "Lucas")
    return true;
if(name === "Marcus")
    return true;
if(name === "Robert")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "Grul'thock")
    return false;



// TAUNT

// PSEUDOCODE:
// say "Hey!"
// say "Krogg!"
// say "Come here!"
// say "I'm gonna kill you!"

// CODE:
this.say("Hey!");
// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Krogg!");
this.say("Come here!");
this.say("I'm gonna kill you!");



// COWARDLY TAUNT

// PSEUDOCODE:
// Find a safe spot in the map, then click shift+click
// Move to this coordinate
// Say something
// Move back to the safe spot

//CODE:
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);
this.say("I can lure them in here.");  // This is a safe spot.
// Run your soldier out where the ogres can hear you.
this.moveXY(64, 42);
// Say something!
this.say("Hey there!");
// Then run back behind the arrow towers for safety.
this.moveXY(70, 10);
// You can shift+click on the map to insert coordinates.



// COMMANDING FOLLOWERS

// PSEUDOCODE:
// Say something that contains the word "follow"
// Move somewhere near the ogres using the this.moveXY command
// Say something that contains the word "attack"

// CODE:
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("Follow me!");
this.moveXY(60,38);
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("Attack!");
// Make sure Tharin is safe!



// MOBILE ARTILLERY

// PSEUDOCODE:
// Move the cannon close to enemies in the middle-top of the screen on 22,55
// Move closer to 28,55
// Attack on 46,63
// Move away from enemy that is comming to 23,49
// Attack on 35,56
// Move closer to other enemies to 30,27
// Move closer to 52, 36
// Attack on 68,54
// Attack again on 60, 45

// CODE:
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.
this.moveXY(22, 55);
this.moveXY(28,55);
this.attackXY(46, 63);
this.moveXY(23,49);
this.attackXY(35, 56);
this.moveXY(30,27);
this.moveXY(52,36);
this.attackXY(68, 54);
this.attackXY(60, 45);



// Release 3: Answer the following questions

// What is this referring to? Think programming-wise rather than in the terms of the game.
// --> this refers to the “owner” of the function we're executing, or rather, to the object that the function is a method of. 

// What does the () do in JavaScript?
// --> The () is used to input some variables into a function

// What is the point of the semicolons?
// --> The semicolons are used to state the end of a command



// Reflection:
// Write your reflection here.

// In this session of week 3 I was able to practice Pseudocoding. It was useful for me to learn that is easier to think
// first about what you want your code to do, without having to be concerned with the syntax of the language.
// After pseudocoding, I had to transform it into a functioning piece of code, and when I managed to do a good
// pseudocode, I didn't have to be concerned with what the code should be doing, I just had to transform the pseudocode
// into code. One thing in this session that was really boring was having to do all these basic things multiple times.
// I don't think that this has helped me learning any Javascript. It was only good to practice pseudocoding and transforming
//I don't think that this has helped me learning any Javascript. It was only good to practice pseudocoding and transforming
// it into code.
