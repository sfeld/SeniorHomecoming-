//Below is where you change scores
var scores = [180, 100, 130, 100]

//Below is where you change events
var fList = ['watermelon toss','abc', 'saf', '2345', 'olympic mud-wrestling'];
var sList = ['relay race'];
var jList = ['literally why can'];
var rList = ['tug of war'];

//
var animate = true


var canvas = document.getElementById("canvas");
var ctx1 = canvas.getContext("2d");
ctx1.rect(1, 1,canvas.width -1 ,canvas.height -1 );
ctx1.stroke();
//normalBlue color "#0000ff"
var numbPills = 4
var colorList =["#008000", "#0000CD", "#000000", "#ff0000"]
var height = []
var maxHeight = 400
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
var maxScore = getMaxOfArray(scores);
for (var i = 0; i < scores.length; i++) {
  height[i] = scores[i] * (maxHeight/maxScore); 
}
var width = 100
var ClassArray = [fList,sList,jList,rList]

//the pillar user most recently clicked on
var Currentclass = 0

update();
//TO DO:
//Write a loop that's gonna update, then pause (10 milliseconds), and do that 100 times
//During that loop, store the heights (calculates what percentage of time has past i/number of times doing loop) 
//Multiply the height by 




//hint: to get pillar to automatically fit, use the canvas width and the canvas height
canvas.addEventListener("mousemove", getPosition, false);

function updateText() {
// gets position of pillar
	var px = (Currentclass + 1) * (canvas.width/(numbPills+1)) - 50;
	var py = canvas.height - 0 - height[Currentclass];
	// draws display rectangle
	ctx1.beginPath();
	ctx1.rect(px-50,py-105,200,100)
	ctx1.drawStyle = "black";
	ctx1.stroke();

	ctx1.font = "16px Arial";
	ctx1.fillStyle = "black";
	// create accumulator to go through (ClassArray[Currentclass]) to get the right text to print
	
	var printText = ClassArray[Currentclass].join(', ');
		for (var i = 0; i < ClassArray[Currentclass].length; i++){
			ctx1.fillText(ClassArray[Currentclass][i],px-40,(py-85)+i*16);
    	}
	
}

function update() {
	ctx1.fillStyle = "white";
	ctx1.fillRect(0,0,canvas.width,canvas.height)
	

	if (Currentclass >= 0){
		updateText();
	}
	

	if (animate){
		for (var j = 0; j < getMaxOfArray(scores); j++){
			for (var i = 0; i < numbPills; i++) {
				x = (i + 1) * (canvas.width/(numbPills+1));
				ctx1.fillStyle = colorList[i];
				if (j < height[i]){
					ht = j;
				} else {
					ht = height[i];
				}
				ctx1.fillRect(x-50,canvas.height - 0 - ht,width,ht);
				ctx1.stroke();
				//TO DO: MAKE BOLD
				ctx1.font = "40px Arial";
				// ctx1.color = "#000000"
				ctx1.fillStyle = "white";
				ctx1.fillText(scores[i],x - width/3,700);
				ctx1.stroke();
				//255,700
			}
			window.setTimeout(function(){}, 1000);

		}
		animate = false;

	}

	else{
		for (var i = 0; i < numbPills; i++) {
			x = (i + 1) * (canvas.width/(numbPills+1));
			ctx1.fillStyle = colorList[i];
			ctx1.fillRect(x-50,canvas.height - 0 - height[i],width,height[i]);
			ctx1.stroke();
			//TO DO: MAKE BOLD
			ctx1.font = "40px Arial";
			// ctx1.color = "#000000"
			ctx1.fillStyle = "white";
			ctx1.fillText(scores[i],x - width/3,700);
			ctx1.stroke();
			//255,700
	  	}
	  }
}

function getPosition(event) {
	var x,y;
	if (event.x != undefined && event.y != undefined) {
    x = event.x;
    y = event.y;
  }
  else { // Firefox method to get the position
    x = event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
    y = event.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
  }

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  showInfo(x,y);
  update();
} 

function showInfo(x,y) {
	var curPillar = -1;
	for (var i = 0; i < numbPills; i++) {
		var px = (i + 1) * (canvas.width/(numbPills+1)) - 50;
		var py = canvas.height - 0 - height[i];
		var pw = width;
		var ph = height[i];

		var inThisPillar = isWithin(x,y,px,py,pw,ph);

		if (inThisPillar) {curPillar = i;}
	}
	Currentclass = curPillar;
	// showText(curPillar);
}

function isWithin(x,y,px,py,pw,ph) {
	return (x > px) && (x < px + pw) && (y > py) && (y < py + ph);
}




function showText(i) {
	alert(ClassArray[i])
}




// pillar colors = list of colors
// pillar heights = list of heights
// pillar texts = list of texts

// for (each pillar) {
//   set color according to color in list
//   draw pillar according to height in list
//   write pillar text according to text in list
// var canvas = document.getElementById("Canvas");
// var ctx1 = canvas.getContext("2d");
// ctx1.font = "35px Arial";


//TO DO:
// Add heights on the bottom of pillars (print it out as text, look up canvas writing)
// Add Kehillah logo
// Adjust colors to be official



