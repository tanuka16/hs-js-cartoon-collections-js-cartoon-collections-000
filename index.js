/* This function should accept an array of dwarf names, for instance:["Doc", "Dopey", "Bashful", "Grumpy"]
It should then return a string with the numbered dwarves. The string should look like this:
"1. Doc 2. Dopey 3. Bashful 4. Grumpy "*/
function dwarfRollCall(dwarves) {
  var dwarfnames = [];
  dwarves.forEach(function(names, i) {
    //dwarfnames.push(i+1 + ". " + names )
    dwarfnames += ([i+1]+'. '+ names + " ");
  });
  //return dwarfnames.join(" ");
  return dwarfnames;
}


/*This function should accept an array of planeteer calls,
like this: planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
It should then convert each element to uppercase and add an exclamation point at the end.
The return value of this method should be an array, in this example:*/
function summonCaptainPlanet(planeteerCalls){
  var calls = [];

  planeteerCalls.forEach(function(planeteerCall){
    calls.push(planeteerCall.toUpperCase() + '!')
  })
  return calls;
}

/* The longPlaneteerCalls method should accept an array of calls.
The function should tell us if any of the calls are longer than four characters.*/
function longPlaneteerCalls(words) {
  var arr_calls = false;

  words.forEach(function(word){
    if (word.length > 4){
      arr_calls = true;
    }
  });
  return arr_calls;
}
/*The "findTheCheese" function should accept an array of strings.
It should then look through these strings and return the first string that is a type of cheese.
The types of cheese that appear are cheddar, gouda, and camembert.
If, sadly, a list of ingredients does not include cheese, return "no cheese!":
*/
function findTheCheese (foods) {
  var cheese = ["camembert", "cheddar", "gouda"];
  for (var i = 0; i < foods.length; i++){             //iteration
    for (var j=0; j < cheese.length; j++){            //the first element of the array that is cheese
      if(foods[i] == cheese[j]){
        return cheese[j];
      }
    }
  }
  return "no cheese!"                          //if the array does not contain a type of cheese
}

/*function findTheCheese (foods){
  var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseIdx = cheese.indexOf(foods[i]);
		if(cheeseIdx !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}*/
