// My role in the group is: Translate Pseudocode into Code

// Here is my part of the challenge:

var sum = function(arr) {
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

var mean = function(arr) {
	return sum(arr)/arr.length;
};

var median = function(arr) {
	arr.sort();
	var half = Math.floor(arr.length / 2);
	if(arr.length % 2 == 1) {
		return arr[half];
	}
	else {
		return (arr[half] + arr[half - 1]) / 2;
	}
};

// My Reflections:
//
// This group project was a bit confusing because it was the first thing I've tackled this week. However, now that I've made the rest of the
// challanges (I left the reflections of the group project to the end) I realized that it was pretty easy. I guess that the most difficult part
// was to allign everybody on what should have been done, but once everybody was on the same page, the project went pretty fast.
//
// Also, one problem that we faced was that the first integrant of the group had actually been transfered to the next cohort and he took some
// time to tell us that, what made us get a bit late with the project. However, after we knew that, the group adapted rapidly and we managed to
// finish the project quickly.
//
// This project was very good to have an idea about how is to code in group. One thing I think that could be done, was to create a common
// repository to everyone, so we would also be able to practice how to use GitHub with a team of people. I think this could be a mandatory
// thing for the next cohort, with some guidance on telling people how to do it.
//
//
//
//What was this experience like?
//
// This experience was great when it comes to make me have an idea about how is to code in group. It certainly made me more experienced in a way
// that it will help me in the next group challenges.
//
//Was your group successful in passing the tests?
//
// The group didn't face any problem with that.
//
//What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
//
// This is a very good practice, as it makes the purpose of the project very clear on our minds.
//
//