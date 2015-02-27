
var number = 1;
var max1 = 0;

var next = function() {
	if(number<4)
	{
		number++;
	document.getElementById("img1").src = "images/slider/"+number+".jpg";

	}
}
var prev = function() {
	if(number>1)
	{
		number--;
		document.getElementById("img1").src = "images/slider/"+number+".jpg";
		}
}

