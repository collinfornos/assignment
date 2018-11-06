//create div dynamically
var iDiv = document.createElement('div');
iDiv.id = 'animals';
iDiv.setAttribute("style", "display: inline-block;");
//create select box
var x = document.createElement("SELECT");
x.setAttribute("id", "mySelect");
x.setAttribute("onchange", "output()");
x.setAttribute("style", "display: inline-block;");
//put select box in div
iDiv.appendChild(x);
//create options
var animals = ["anaconda", "tiger", "lion", "dolphin", "duck", "monkey", "frog", "fish", "penguin", "bat"];
var text = "";
var i;
for (i = 0; i < animals.length; i++) {
    text +="<option value=" + '"' +  i + '"' +">" + animals[i] + "</option>";
}
//put options in select box
x.innerHTML = text;
//create a place for the descriptions
var para = document.createElement("p");
para.setAttribute("id", "outDescript");
para.setAttribute("style", "display: inline-block; margin-inline-start: 20px;");
iDiv.appendChild(para);
//put div and all its content in the body of the document.
document.getElementsByTagName('body')[0].appendChild(iDiv);

//when an animal is selected display corresponding definition
function output() {
	var idNum = document.getElementById("mySelect").value;
	var integer = Number(idNum); //takes value of animal selected and converts to number for definition look up.
	var descrip = [
	"Big snake",
	"Big stripped cat",
	"big african cat", 
	"a small gregarious toothed whale.", 
	"a waterbird with a broad blunt bill, short legs, webbed feet, and a waddling gait.", 
	"a small to medium-sized primate that typically has a long tail.", 
	"a tailless amphibian with a short squat body, moist smooth skin, and very long hind legs for leaping.", 
	"a limbless cold-blooded vertebrate animal with gills and fins and living wholly in water.", 
	"a large flightless seabird of the southern hemisphere.", 
	"a mainly nocturnal mammal capable of sustained flight."
	];	
    document.getElementById("outDescript").innerHTML = descrip[integer];
}

