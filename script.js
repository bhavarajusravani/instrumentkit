const pianoKeys = document.querySelectorAll('.key');
const notes = {
	'C': new Audio('C.mp3.wav'),
	'1': new Audio('1.mp3.wav'),
	'D': new Audio('D.mp3.wav'),
	'2': new Audio('2.mp3.wav'),
	'E': new Audio('E.mp3.wav'),
	'3': new Audio('3.mp3.wav'),
	'F': new Audio('F.mp3.wav'),
	'4': new Audio('4.mp3.wav'),
	'G': new Audio('G.mp3.wav'),
	'5': new Audio('5.mp3.wav'),
	'A': new Audio('A.mp3.wav'),

	'6': new Audio('6.mp3.wav'),
	'B': new Audio('B.mp3.wav'),
	'7': new Audio('7.mp3.wav'),
	'W': new Audio('W.mp3.wav'),
	'8': new Audio('8.mp3.wav'),
	'S': new Audio('S.mp3.wav'),
	'9': new Audio('9.mp3.wav'),
	'R': new Audio('R.mp3.wav'),
	'0': new Audio('0.mp3.wav'),
	'T': new Audio('T.mp3.wav'),
	
};

pianoKeys.forEach(key => {
	key.addEventListener('click', () => {
		notes[key.id].currentTime = 0;
		notes[key.id].play();
	});
});

for(var i=0;i<document.querySelectorAll(".piano").length;i++){
	document.querySelectorAll("button")[i].addEventListener("click",function(){
	  var buttonInnerHTML = this.innerHTML;
	  makesound(buttonInnerHTML);
	}
	);
  }
  document.addEventListener("keydown", function(evnt){
  
	  makesound(evnt.key);
	  buttonAnimation(evnt.key);
  }
  );
  function makesound(keys){
	switch (keys) {
	case "C":
	var tom = new Audio('C.mp3.wav');
	tom.play();
  
	  break;
	  case "1":
	  var tom1 = new Audio('1.mp3.wav');
	  tom1.play();
	  break;
	  case "D":
	  var tom2 = new Audio('D.mp3.wav');
	  tom2.play();
	  break;
	  case "2":
	  var tom3 = new Audio('E.mp3.wav');
	  tom3.play();
	  break;
	  case "E":
	  var tom4 = new Audio('F.mp3.wav');
	  tom4.play();
	  break;
	  case "3":
	  var tom5 = new Audio('2.mp3.wav');
	  tom5.play();
	  break;
	  case "F":
	  var tom6 = new Audio('G.mp3.wav');
	  tom6.play();
	  break;
	  case "4":
	    var tom7 = new Audio('3.mp3.wav');
		tom7.play();
		break;
		case "G":
			var tom8 = new Audio('A.mp3.wav');
			tom8.play();
			break;
		case "5":
			var tom9 = new Audio('4.mp3.wav');
			tom9.play();
			break;
		case "A":
			var tom10 = new Audio('B.mp3.wav');
			tom10.play();
			break;
		
			case "6":
				var tom11 = new Audio('B.mp3.wav');
				tom11.play();
				break;
			case "B":
				var tom12 = new Audio('B.mp3.wav');
				tom12.play();
				break;
			case "7":
				var tom13 = new Audio('B.mp3.wav');
				tom13.play();
				break;
			case "W":
				var tom14 = new Audio('B.mp3.wav');
				tom14.play();
				break;
			case "8":
				var tom15 = new Audio('B.mp3.wav');
				tom15.play();
				break;
			case "S":
				var tom16 = new Audio('B.mp3.wav');
				tom16.play();
				break;
			case "9":
				var tom17 = new Audio('B.mp3.wav');
				tom17.play();
				break;
			case "R":
				var tom18 = new Audio('B.mp3.wav');
				tom18.play();
				break;
			case "0":
				var tom19 = new Audio('B.mp3.wav');
				tom19.play();
				break;
			case "T":
				var tom20 = new Audio('B.mp3.wav');
				tom20.play();
				break;
	default:
  
  }}
  
  function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("#" + currentKey);
	activeButton.classList.add("active");
	setTimeout(function() {
	  activeButton.classList.remove("active");
	}, 100);
  }

  pianoKeys.forEach(key => {
	key.addEventListener('click', () => {
	  notes[key.id].currentTime = 0;
	  notes[key.id].play();
	  buttonAnimation(key.id);
	});
  });

  buttonAnimation(evnt.key);