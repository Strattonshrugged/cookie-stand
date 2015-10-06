

// Hours of operation, kept in case Pat wants to change store hours
hours = ['10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM']

// Random Cookie Demands Per Hour By Location
pikepmRandoms = []
seatacRandoms = []
soctrmRandoms = []
bellsqRandoms = []
alkiRandoms = []


// Generate random numbers within provided ranges to populate Randoms
var pikepm = {
	location: 'Pike Place Market',
	minCusPerHr: 17,
	maxCusPerHr: 88,
	avgCksPerCus: 5.2,
	randCookieDemand: function()	{
		return Math.floor(((Math.random() * (88-17+1)) +17)*5.2);
	}
}

for (var i = 0; i < hours.length; i++) {
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

for (var i = 0; i < hours.length; i++) {
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

for (var i = 0; i < hours.length; i++) {
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

for (var i = 0; i < hours.length; i++) {
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

for (var i = 0; i < hours.length; i++) {
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
var bellsqTotal = arraySum(bellsqRandoms);
var alkiTotal = arraySum(alkiRandoms);


// List each element in the array using the following "label" array and function


function makeUL(Numbaz, locationTotal, listposition) {
    for(var i = 0; i < Numbaz.length; i++) {
        // connect the list to the JS; this is where your list will appear
        var awesomeList = document.getElementById(listposition);
        // Create the list item:
        var item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(hours[i] + ": "));
        item.appendChild(document.createTextNode(Numbaz[i] + " cookies"));
        // Add it to the list:
        awesomeList.appendChild(item);
    }
    var item = document.createElement('li');
    item.appendChild(document.createTextNode("Total: " + locationTotal + " cookies"));
    awesomeList.appendChild(item);

    	// somewhere in here I should be able to add total to the awesomeList
        // Finally, return the constructed list:
    return awesomeList;
}

makeUL(pikepmRandoms,pikepmTotal,"pikepmlist");
makeUL(seatacRandoms,seatacTotal,"seataclist");
makeUL(soctrmRandoms,soctrmTotal,"soctrmlist");
makeUL(bellsqRandoms,bellsqTotal,"bellsqlist");
makeUL(alkiRandoms,alkiTotal,"alkilist");



// function AddTotalUL(Numbah,listposition)	{
// 	var finalList = document.getElementById(listposition);
// 	var trinket = document.createElement('li');
// 	trinket.appendChild(document.createTextNode("Total: " + Numbah + " cookies"));
// 	finalList.appendChild(trinket);
// 	return finalList;
// }



