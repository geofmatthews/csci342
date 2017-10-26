(function() {
    "use strict";
    var squareArea = null;
    
    window.onload = function() {
	squareArea = document.getElementById("squarearea");
	squareArea.onmousedown = addSquare;
    };
    
    function addSquare(event) {
	if (!event) {
	    var event = window.event;
	}
	var x = event.clientX;
	var y = event.clientY;
	var square = document.createElement("div");
	square.className = "square";
	square.style.left = x + "px";
	square.style.top = y + "px";
	square.style.backgroundColor = getRandomColor();
	squareArea.appendChild(square);
    };
    
    function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var result = "#";
	for (var i = 0; i < 6; i++) {
	    var index = parseInt(Math.random() * letters.length);
	    result += letters[index];
	};
	return result;
    }

})();

	    
