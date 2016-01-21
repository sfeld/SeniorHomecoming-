//Below is where you change scores
var scores = [245,140,415,375]

//Below is where you change events

//Freshman
var fList = ['Freshman:', 'Day 1 Dressup (53.5%) (+40)','Jeopardy:3rd Place (+25)' , 'Day 2 Dressup (44.8%) (+40) ' ,'Dodgeball: L:11th & 12th(+30)','                   W: 10th (+50)' ,'                   L: 12th (+30)', 'Tug-War L: 11th (+30)'];
//Sophomores
var sList = ['Sophomores', 'Day 1 Dressup (41.4%) (+25)', 'Jeopardy: Disqualified', 'Day 2 Dressup (60%) (+25)', 'Dodgeball: L:11th & 12th(+30)', '                  L: 9th (+30)', 'D: 11th (+40)', 'Tug-War L: 12th (+30)'];
//Juniors
var jList = ['Juniors', 'Day 1 Dressup (92.5%) (+70)', 'Jeopardy: 1st Place (+50)', 'Day 2 Dressup (82%) (+55)', 'Dodgeball: W: 9th & 10th (+50)', '                 W: 12th (+50)' ,'D: 10th (+40)', 'Tug-War W: 9th (+50)', '               W: 12th (+50)'  ];
//Seniors
var rList = ['Seniors', 'Day 1 Dressup (81.2%) (+55)', 'Jeopardy: 2nd Place (+40)', 'Day 2 Dressup (100%!) (+70)', 'Dodgeball: W: 9th & 10th (+50)', '                 L: 11th (+30)', 'W: 9th (+50)', 'Tug-War W: 10th (+50)', '               L: 11th (+30)' ];

var titleText = "Kehillah 2016 Homecoming Points"

var animate = true


var canvas = document.getElementById("canvas");
var ctx1 = canvas.getContext("2d");
ctx1.rect(1, 1,canvas.width -1 ,canvas.height -1 );
ctx1.stroke();
//normalBlue color "#0000ff"
var numbPills = 4
var colorList =["#00ff00", "#0040ff", "#000000", "#ff0000"]
var height = []
var maxHeight = canvas.height * .5;
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
var maxScore = getMaxOfArray(scores);
for (var i = 0; i < scores.length; i++) {
  height[i] = scores[i] * (maxHeight/maxScore); 
}
var width;
var ClassArray = [fList,sList,jList,rList]

//the pillar user most recently clicked on
var Currentclass = -1;

update();


//hint: to get pillar to automatically fit, use the canvas width and the canvas height
canvas.addEventListener("mousemove", getPosition, false);

function updateText() {
// gets position of pillar
	var px = (Currentclass + 1) * (canvas.width/(numbPills+1)) - 50;
	var py = canvas.height - 0 - height[Currentclass];
	var nl = ClassArray[Currentclass].length
	//drawing white rectangle
	ctx1.fillStyle = "White";
	var boxWidth = 250;
	ctx1.fillRect(px-75,py-nl * 10, boxWidth, nl * 16 + 16);
	// draws display rectangle
	ctx1.beginPath();
	ctx1.rect(px-75,py-nl * 10, boxWidth, nl * 16 + 16);
	ctx1.drawStyle = "black";
	ctx1.stroke();

	ctx1.font = "16px Arial";
	ctx1.fillStyle = "black";
	
	var printText = ClassArray[Currentclass].join(', ');
		for (var i = 0; i < ClassArray[Currentclass].length; i++){
			ctx1.fillText(ClassArray[Currentclass][i],px-40,(py-nl * 10 + 16)+i*16);
    	}
	
}
// this is going to keep track of how many "ticks" of 100 ms have passed so far, think of this is the "initialization
var elapsedTime = 0; 
// total time that the animation will take
var maxTime = 3000; 
// how long each animation step will be, in ms.
var tickLength = 10; 

//function draw() {
 
  //...drawing code...
//}
//I added the code to my drawing function
function update() {
	width = canvas.width * .07;
	for (var i = 0; i < scores.length; i++) {
  	height[i] = scores[i] * (maxHeight/maxScore); 
	}
  	maxHeight = canvas.height * .5;
  	ctx1.canvas.width  =  window.innerWidth;//screen.availHeight
  	ctx1.canvas.height =  window.innerHeight; //screen.availWidth
  	//Sets the window color
	ctx1.fillStyle = "#cce5ff";
	ctx1.fillRect(0,0,canvas.width,canvas.height)
	
	//draw title each time
	//drawTitle();
	
	if (animate){
		elapsedTime = elapsedTime + tickLength;
		for (var i = 0; i < numbPills; i++) {
			x = (i + 1) * (canvas.width/(numbPills+1));
			ctx1.fillStyle = colorList[i];
			ht = (elapsedTime/maxTime) * height[i];
			ctx1.fillRect(x-width/2,canvas.height - 0 - ht,width,ht);
			ctx1.stroke();
			//TO DO: MAKE BOLD
			ctx1.font = Math.round(canvas.width * 40/1200) + "px Arial";
			// ctx1.color = "#000000"
			ctx1.fillStyle = "white";
			ctx1.fillText(scores[i],x - width/3,canvas.height * 0.94);
			ctx1.stroke();
			//255,700
		}
		if(elapsedTime > maxTime){
			animate = false;
		}
		
	}
	
	else{
		for (var i = 0; i < numbPills; i++) {
			x = (i + 1) * (canvas.width/(numbPills+1));
			ctx1.fillStyle = colorList[i];
			ctx1.fillRect(x-width/2,canvas.height - 0 - height[i],width,height[i]);
			ctx1.stroke();
			//TO DO: MAKE BOLD
			ctx1.font = Math.round(canvas.width * 40/1200) + "px Arial";
			// ctx1.color = "#000000"
			ctx1.fillStyle = "white";
			ctx1.fillText(scores[i],x - width/3,canvas.height * 0.94);
			ctx1.stroke();
			//255,700			
	  	}
	  }
	if (Currentclass >= 0){
		updateText();
	}	
	setTimeout(update,tickLength);
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

function drawTitle(){
	ctx1.fillStyle = "black";
	var w = canvas.width;
	var h = canvas.height;
	fsize = Math.round(.12 * h);
	ctx1.font = fsize + "px Comic Sans";
	ctx1.fillText(titleText,80,80);

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



