var footballTeam = {
	logo : "./img/logo.png",
	clubName : "FC Barcelona Line-Up",
	players: [
		{
			imageUrl : './img/messi.png',
			firstName : "Leo",
			lastName : "Messi",
			number : 10,
			position : "Forward",
			age: 33
		},
		{
			imageUrl : './img/suarez.png',
			firstName : "Luis",
			lastName : "Suárez",
			number : 9,
			position : "Forward",
			age: 33
		},
		{
			imageUrl : './img/dembele.png',
			firstName : "Ousmane",
			lastName : "Dembélé",
			number : 11,
			position : "Forward",
			age: 23
		},
		{
			imageUrl : './img/semedo.png',
			firstName : "Nelson",
			lastName : "Semedo",
			number : 2,
			position : "Defender",
			age: 26
		},
		{
			imageUrl : './img/stegen.png',
			firstName : "Marc-André",
			lastName : "Stegen",
			number : 1,
			position : "Goalkeeper",
			age: 28
		},
		{
			imageUrl : './img/murara.png',
			firstName : "Norberto",
			lastName : "Murara ",
			number : 2,
			position : "Goalkeeper",
			age: 31
		},
		{
			imageUrl : './img/pique.png',
			firstName : "Gerard",
			lastName : "Pique",
			number : 3,
			position : "Defender",
			age: 32
		},
		{
			imageUrl : './img/rakitic.png',
			firstName : "Ivan",
			lastName : "Rakitic",
			number : 4,
			position : "Midfielder",
			age: 32
		},
		{
			imageUrl : './img/griezmann.png',
			firstName : "Antoine",
			lastName : "Griezmann",
			number : 17,
			position : "Forward",
			age: 29
		},
		{
			imageUrl : './img/lenglet.png',
			firstName : "Clément ",
			lastName : "Lenglet",
			number : 15,
			position : "Defender",
			age: 24
		},
		{
			imageUrl : './img/sergio.png',
			firstName : "Sergio",
			lastName : "Busquets",
			number : 5,
			position : "Midfielder",
			age: 26
		},
		{
			imageUrl : './img/melo.png',
			firstName : "Arthur",
			lastName : "Melo",
			number : 8,
			position : "Midfielder",
			age: 24
		},
		{
			imageUrl : './img/samuel.png',
			firstName : "Samuel",
			lastName : "Umtiti",
			number : 23,
			position : "Defender",
			age: 27
		},
		{
			imageUrl : './img/jordi.png',
			firstName : "Jordi",
			lastName : "Alba",
			number : 18,
			position : "Defender",
			age: 31
		},
		{
			imageUrl : './img/sergi.png',
			firstName : "Sergi",
			lastName : "Roberto",
			number : 20,
			position : "Midfielder",
			age: 28
		}
	]
};

var a = document.createElement("a");
var mainLogo = document.createElement("img");
a.setAttribute("href", "#")
mainLogo.setAttribute("src", footballTeam.logo);
mainLogo.setAttribute("alt", "logoImg");
a.appendChild(mainLogo);
var head = document.querySelector("header");
head.appendChild(a);

var mainField = document.querySelector("main");
var firstSectionHead = document.createElement("h1");
firstSectionHead.textContent = footballTeam.clubName;
mainField.prepend(firstSectionHead);

var firstSection = document.createElement("section");
firstSection.setAttribute("id","line-up");
firstSectionHead.after(firstSection);

var secondSectionHead = document.createElement("h2");
secondSectionHead.textContent = "Substitutions";
firstSection.after(secondSectionHead);

var secondSection = document.createElement("section");
secondSection.setAttribute("class","sub-p");
secondSectionHead.after(secondSection);


function lineUp(){

	var num = [];
	var i = 0;
	while(num.length < 11){
		var randVal = Math.floor(Math.random()*footballTeam.players.length);
		if(!num.includes(randVal)){
			num[i] = randVal;
			i++;
		}
	}

	return num;
}

function sub (arr) {
	var subs = [];
	var j = 0;

	for (var i = 0; i < footballTeam.players.length; i++) {
		if (!arr.includes(i)) {
			subs[j] = i;
			j++;
		}
	}
	return subs;
}

var mainTeam = lineUp();
var reserveTeam = sub (mainTeam);

function makeTeam(){

	firstSection.innerHTML = "";
	secondSection.innerHTML = "";

	for (var i = 0; i < mainTeam.length; i++) {

		firstSection.innerHTML +=
		"<article>"+
		"<img src=" + footballTeam.players[mainTeam[i]].imageUrl + " alt= 'playerImg'>"+
		"<span>First Name: " + footballTeam.players[mainTeam[i]].firstName + "</span>"+
		"<span>Last name: " + footballTeam.players[mainTeam[i]].lastName + "</span>"+
		"<span>Position: " + footballTeam.players[mainTeam[i]].position + "</span>"+
		"<span class='num'>Number: " + footballTeam.players[mainTeam[i]].number + "</span>"+
		"<span>Age: " + footballTeam.players[mainTeam[i]].age + "</span>"
		+ "</article>";

	}

	for (var i = 0; i < reserveTeam.length; i++) {

		secondSection.innerHTML +=
		"<article>"+
		"<img src=" + footballTeam.players[reserveTeam[i]].imageUrl + " alt= 'playerImg'>"+
		"<span>Name:" + footballTeam.players[reserveTeam[i]].firstName + "</span>"+
		"<span>Last name:" + footballTeam.players[reserveTeam[i]].lastName + "</span>"+
		"<span class='num'>Number:" + footballTeam.players[reserveTeam[i]].number + "</span>"+
		"<span>Position:" + footballTeam.players[reserveTeam[i]].position + "</span>"+
		"<span>Age:" + footballTeam.players[reserveTeam[i]].age + "</span>"
		+"</article>";

	}

}

makeTeam();

function subs(){

	var first = Math.floor(Math.random() * mainTeam.length);
	var second = Math.floor(Math.random() * reserveTeam.length);
	var smth;
	smth = mainTeam[first];
	mainTeam[first] = reserveTeam[second];
	reserveTeam[second] = smth;

	makeTeam();
}

setInterval(()=>subs(),10000);

//use of arrow function:

// hi = function() {
//   return "Hi!";
// }

// ===

// hi = () => {
//   return "Hi!";
// }
