
// Random Cookie Demands By Hour
pikepmRandoms = []
seatacRandoms = []
soctrmRandoms = []
bellsqRandoms = []
alkiRandoms = []

// unittest
console.log("Cookie Stand App.js has initiated");

// Generate random numbers within provided ranges to populate arrays
var pikepm = {
	location: 'Pike Place Market',
	minCusPerHr: 17,
	maxCusPerHr: 88,
	avgCksPerCus: 5.2,
	randCookieDemand: function()	{
		return Math.floor(((Math.random() * (88-17+1)) +17)*5.2);
	}
}

for (var i = 0; i < 8; i++) {
	pikepmRandoms.push(pikepm.randCookieDemand());
}



var seatac = {
	location: 'SeaTac Airport',
	minCusPerHr: 6,
	maxCusPerHr: 44,
	avgCksPerCus: 1.2,
	randCookieDemand: function()	{
		return Math.floor(((Math.random() * (44-6+1)) +6)*1.2);
	}
}

for (var i = 0; i < 8; i++) {
	seatacRandoms.push(seatac.randCookieDemand());
}



var soctrm = {
	location: 'Southcenter Mall',
	minCusPerHr: 11,
	maxCusPerHr: 38,
	avgCksPerCus: 1.9,
	randCookieDemand: function()	{
		return Math.floor(((Math.random() * (38-11+1)) +11)*1.9);
	}
}

for (var i = 0; i < 8; i++) {
	soctrmRandoms.push(soctrm.randCookieDemand());
}



var bellsq = {
	location: 'Bellevue Square',
	minCusPerHr: 20,
	maxCusPerHr: 48,
	avgCksPerCus: 3.3,
	randCookieDemand: function()	{
		return Math.floor(((Math.random() * (48-20+1)) +20)*3.3);
	}
}

for (var i = 0; i < 8; i++) {
	bellsqRandoms.push(bellsq.randCookieDemand());
}



var alki = {
	location: 'Alki',
	minCusPerHr: 3,
	maxCusPerHr: 24,
	avgCksPerCus: 2.6,
	randCookieDemand: function()	{
		return Math.floor(((Math.random() * (24-3+1)) +3)*2.6);
	}
}

for (var i = 0; i < 8; i++) {
	alkiRandoms.push(alki.randCookieDemand());
}

// Calculate sum of arrays and generate variables for them
function arraySum(arr)	{
	var sum = 0;
	for (var i = 0; i < arr.length; i++)	{
		sum = sum + arr[i];
	}
	return sum;
}

var pikepmTotal = arraySum(pikepmRandoms);
var seatacTotal = arraySum(seatacRandoms);
var soctrmTotal = arraySum(soctrmRandoms);
var bellsqTotal = arraySum(BellsqRandoms);
var alkiTotal = arraySum(alkiRandoms);


// List each element in the array using the following "label" array and function

times = ['10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']

function makeUL(Numbaz,listposition) {
    for(var i = 0; i < Numbaz.length; i++) {
        // connect the list to the JS; this is where your list will appear
        var awesomeList = document.getElementById(listposition);
        // Create the list item:
        var item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(Numbaz[i]));
        // Add it to the list:
        awesomeList.appendChild(item);
    }
        // Finally, return the constructed list:
    return awesomeList;
}



makeUL(pikepmRandoms,"pikepmlist");
makeUL(seatacRandoms,"seataclist");
makeUL(soctrmRandoms,"soctrmlist");
makeUL(bellsqRandoms,"bellsqlist");
makeUL(alkiRandoms,"alkilist");





