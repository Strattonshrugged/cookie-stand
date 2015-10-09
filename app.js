

// these variables are arrays of strings and numbers, data for the function
var pikepm = ["Pike Place Market",17,88,5.2];
var seatac = ["Seatac Airport",6,44,1.2];
var soctrm = ["Southcenter Mall",11,38,1.9];
var bellsq = ["Bellevue Square",20,48,3.3];
var alki = ["Alki",3,24,2.6,"alkilist"];

// these variables are arrays associated with the operations of the business
var locations = [pikepm,seatac,soctrm,bellsq,alki];
var hours = ['10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM'];

/*
this.randomCookieDemand = function()	{
 		for (var i = 0; i < hours.length; i++)
 		this.randoms.push(Math.floor(((Math.random() * (maxCusPerHr - minCusPerHr + 1)) + minCusPerHr) * avgCksPerCus));
 	} */

function addCell(row, text) {
	var elem = document.createElement("td");
	elem.appendChild(document.createTextNode(text));
	row.appendChild(elem);
}

function Table()	{
	var table = document.getElementById("tableHerePlz");				// find where to start, initiate a table
	var headerRow = document.createElement('tr');
	var top = document.createElement('th');
	var contents = document.createTextNode('Location');
	top.appendChild(contents);
	headerRow.appendChild(top);
	for (var i=0; i < hours.length; i++)	{
		var top = document.createElement('th');
		var contents = document.createTextNode(hours[i]);
		top.appendChild(contents);
		headerRow.appendChild(top);
	table.appendChild(headerRow);		
	}
	var top = document.createElement('th');
	var contents = document.createTextNode('Total');
	top.appendChild(contents);
	headerRow.appendChild(top);
	table.appendChild(headerRow);
	// Header Row Built

	for (var i=0; i < locations.length; i++)	{	// for every location make a new row
		var dataRow = document.createElement('tr');
		addCell(dataRow, locations[i][0]);
		//var cell = document.createElement('td');
		//var contents = document.createTextNode(locations[i][0]);  
		//cell.appendChild(contents);
		//dataRow.appendChild(cell);
		// made location cell and stuck it on
		rowTotal = 0;
		for (var j=0; j < hours.length; j++)	{
			var cell = document.createElement('td');
			var random = Math.floor((((Math.random() * locations[i][2] - locations[i][1] + 1)) + locations[i][1]) * locations[i][3])
			rowTotal = random + rowTotal
			var contents = document.createTextNode(random);
			cell.appendChild(contents);
			dataRow.appendChild(cell);
		}
		// make data cells and stuck them on
		var cell = document.createElement('td');
		var contents = document.createTextNode(rowTotal);
		cell.appendChild(contents);
		dataRow.appendChild(cell);
		// made total cell and stuck it on

		table.appendChild(dataRow);		// stick dataRow onto table	
	}
} // end of table function

Table();

// Make sure the appends are inside the for loops, get rid of the if statement



/*
	var totalList = document.getElementById("header");
		var item = document.createElement('th')
		item.appendChild(document.createTextNode("singular"));
		totalList.appendChild(item);
*/


// Behold THE CONSTRUCTOR
function Stand(locale, minCusPerHr, maxCusPerHr,avgCksPerCus,listPosition)	{
	this.locale = locale;				// location is reserved, this is the formal name not the abbreviate
	this.minCusPerHr = minCusPerHr;		// minimum customers per hour
	this.maxCusPerHr = maxCusPerHr;		// maximum customers per hour
	this.avgCksPerCus = avgCksPerCus;	// average cookies per customer
	this.listPosition = listPosition;
	console.log(this.listPosition);
// phase one: create an array and put random numbers in it
 	this.randoms = new Array();			// new array for hourly counts in a day
 	this.randomCookieDemand = function()	{
 		for (var i = 0; i < hours.length; i++)
 		this.randoms.push(Math.floor(((Math.random() * (maxCusPerHr - minCusPerHr + 1)) + minCusPerHr) * avgCksPerCus));
 	}
 	this.randomCookieDemand();			// call the function that populates the random number array
// phase two: create the sum of the array
 	this.dailySum = 0;					// declare a variable to represent the daily total
 	this.dailySum = function(arr)	{		// create a method to add all the numbers in the array together
 			tempy = 0;						// temporary variable
 		for (var i = 0; i < arr.length; i++) 	{	// for as many times as there is a length
 			tempy = tempy + arr[i];
 			this.dailySum = tempy;
 		}									// end of for loop
 	}										// end of dailySum function
 	this.dailySum(this.randoms);			// call the randomCookieDemand function that sums up
// phase three: put everything on the html 	
 	this.makeUL = function()		{
  		var awesomeList = document.getElementById(this.listPosition);
	//	console.log(awesomeList);
 		for (i = 0; i < hours.length; i++)	{
	        // Create the list item:
	        var item = document.createElement('li');
	        console.log(item);	// testing
	        // Set its contents:
	        item.appendChild(document.createTextNode(hours[i] + ": "));
	        item.appendChild(document.createTextNode(this.randoms[i] + " cookies"));
	        // Add it to the list:
	        awesomeList.appendChild(item);
 		}	// end of for loop

	    var item = document.createElement('li');
	    item.appendChild(document.createTextNode("Total: " + this.dailySum + " cookies"));
	    awesomeList.appendChild(item);
 	}	// end of makeUL
 	this.makeUL(); // calls the makeUL function	
}	// end of constructor

var pikepm = new Stand("Pike Place Market",17,88,5.2,"pikepmlist");
var seatac = new Stand("Seatac Airport",6,44,1.2,"seataclist");
var soctrm = new Stand("Southcenter Mall",11,38,1.9,"soctrmlist");
var bellsq = new Stand("Bellevue Square",20,48,3.3,"bellsqlist");
var alki = new Stand("Alki",3,24,2.6,"alkilist");





/*
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

*/



