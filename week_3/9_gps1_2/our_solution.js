// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.  Lovinder Pnag
//  2.  Bruno


// 0. "YOU SIGNED... WHO?!"

var willSmith = {
  name: "Will Smith",
  age: 45,
  quote: "The first step is you have to say that you can."
};
var jackNicholson = {
  name: "Jack Nicholson",
  age: 77,
  quote: "The minute that you are not leraning I believe you're dead."
};
var adamSandler = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?!"
};
var kristenBell = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?"
};
var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...So you're telling me there's a chance? YEAH!"
};
var shooterMcGavin = {
  name: "Shooter McGavin",
  age: 48,
  quote: "Just stay out of my way... or you'll pay. Listen to what I say."
};

// 1. "Here they Come!"

var list = [];
list.push(willSmith);
list.push(jackNicholson);
list.push(adamSandler); 
list.push(kristenBell);
list.push(jimCarrey);
list.push(shooterMcGavin);

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
var willSmith = new Client("Will Smith", 45, "The first step is you have to say that you can.");
var jackNicholson = new Client("Jack Nicholson", 77, "Just stay out of my way... or you'll pay. Listen to what I say.");
var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var kristenBell = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

// 3. "SHOW 'EM OFF!"

console.log(list);

// 4. "But wait, there's more!"

// list.forEach(function(entry) {
// console.log("Name: "+entry.name+" \n" + 
//              "Age: "+entry.age+" \n" + 
//              "Quote: "+entry.quote+" \n");
// });

var willSmith = {
  name: "Will Smith",
  age: 45,
  quote: "The first step is you have to say that you can.",
  show_quote: function() {
    return console.log("Quote: "+this.quote+" \n");
  }
};

willSmith.show_quote();

// 5.  ** BONUS **


//  6.  Your Reflection:

// As I was a little bit late with the submission deadline last week, I ended up doing this GPS session earlier than any other challenge of
// this week. So, for me, this GPS session was particullarly challanging. Now that I finished all challenges from week 3 and am taking a
// look at this code right now, I can see that there are a few concepts/syntax that still are new for me. I hadn't seen them anywhere before.
// The instructor was very helpful and showed us these new concepts. Also, working in group was beneficial, because both of us were forced
// to use concepts that weren't solidified yet and this pushed us to learn and use them quickly. This pressure helped me solidify some
// concepts pretty quickly. That is great.
// One downside here is that I'm still late with the content, so as I need to catch up with everything ASAP I had to skip the bonus (part 5).
// However, I plan on coming back to this bonus once I catch up with everybody else.
//
