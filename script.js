
alert("Hello! Let's do math");

var math = prompt("(s)quare, (a)rea, (c)ube, or (q)uit");

function square(squared) {
	return (squared * squared);
}

function cube(cubed) {
	return (square(cubed) * cubed);
}

function area(width, length) {
	return (width * length);
}

while(math != "q") {
	switch(math) {
		case "s":
			var squared = prompt("Number to square?");
			var square_output = (squared * squared);
			alert(square_output);
			break;
		case "c":
			var cubed = prompt("Number to cube?");
			var cube_output = (cubed * cubed * cubed);
			alert(cube_output);
			break;
		case "a":
			var width = prompt("Width?");
			var length = prompt("Length?");
			var area_output = (width * length);
			alert(area_output);
			break;
		}
	var math = prompt("(s)quare, (a)rea, (c)ube, or (q)uit");
}

