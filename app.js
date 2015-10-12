

// these variables are arrays of strings and numbers, data for the function
var PikePlaceMarket = ["Pike Place Market",17,88,5.2];
var SeaTacAirport = ["Seatac Airport",6,44,1.2];
var SouthcenterMall = ["Southcenter Mall",11,38,1.9];
var BellevueSquare = ["Bellevue Square",20,48,3.3];
var Alki = ["Alki",3,24,2.6];

// these variables are arrays associated with the operations of the business
var locations = [PikePlaceMarket,SeaTacAirport,SouthcenterMall,BellevueSquare,Alki];
var hours = ['10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM'];

// Josh's function, not Jared's
function addCell(row, text) {
	var elem = document.createElement("td");
	elem.appendChild(document.createTextNode(text));
	row.appendChild(elem);
}

function addRow(location)	{
		var dataRow = document.createElement('tr');			// make a variable called dataRow, make it a new table row
		// addCell(dataRow, locations[i][0]);
		var cell = document.createElement('td');			// 
		var contents = document.createTextNode(location[0]);  
		cell.appendChild(contents);
		dataRow.appendChild(cell);
		// made location cell and stuck it on
		rowTotal = 0;
		for (var j=0; j < hours.length; j++)	{
			var cell = document.createElement('td');
			var random = Math.floor((((Math.random() * location[2] - location[1] + 1)) + location[1]) * location[3])
			rowTotal = random + rowTotal
			var contents = document.createTextNode(random);
			cell.appendChild(contents);
			dataRow.appendChild(cell);
		} // end of for loop
		// make data cells and stuck them on
		var cell = document.createElement('td');
		var contents = document.createTextNode(rowTotal);
		cell.appendChild(contents);
		dataRow.appendChild(cell);
		// made total cell and stuck it on
		return dataRow;
}

var Table = function()	{	
	var table = document.getElementById("tableHerePlz");	// make a variable called table, tell it where the table should start
	var headerRow = document.createElement('tr');			// make a variable called headerRow, make it be a new table row
	var cell = document.createElement('th');				// make a variable called top, make it a new header cell
	var contents = document.createTextNode('Location');		// make a variable called contents, give it a table-text-node saying "Location"
	cell.appendChild(contents);								// now stick that table-text-node thing into the header cell 
	headerRow.appendChild(cell);							// now stick the header cell thing thing into the table row 
	for (var i=0; i < hours.length; i++)	{				// now once for every thing in the array "hours" ...
		var cell = document.createElement('th');			// make a variable called top, make it a new header cell
		var contents = document.createTextNode(hours[i]);	// make a variable called contents, give it a table-text-node saying something from "hours"
		cell.appendChild(contents);							// now stick the table-text-node thing into the header cell
		headerRow.appendChild(cell);						// now stick the header cell thing into the table row
	table.appendChild(headerRow);							// now stick the table row onto the table (could've done this later I guess)
	} // end of for loop
	var cell = document.createElement('th');				// make a variable called top, make it a new header cell
	var contents = document.createTextNode('Total');		// make a variable called contents, give it a table-text-node saying "Total"
	cell.appendChild(contents);								// put the table-text-node onto the header cell
	headerRow.appendChild(cell);							// put the header cell onto the row
	table.appendChild(headerRow);							// put the row onto the table
	// Header Row Built

	for (var i=0; i < locations.length; i++)	{			// for every location make a new row
		var dataRow = addRow(locations[i]);

		table.appendChild(dataRow);		// stick dataRow onto table	
	} // end of for loop
} // end of table function
Table();






var Update = function()	{
	// bring in the values from the html, make them variables
	var locInput = document.getElementById('location').value;
	var minInput = document.getElementById('min').value;
	var maxInput = document.getElementById('max').value;
	var avgInput = document.getElementById('avg').value;
	// make a variable with all the information named after the location string with no spaces

	//locations.push([locInput,minInput,maxInput,avgInput]);
	var table = document.getElementById("tableHerePlz");	// make a variable called table, tell it where the table should start
	var dataRow = addRow([locInput,minInput,maxInput,avgInput])
	table.appendChild(dataRow);
	// function removeSpaces(locInput)	{
	// 	return locInput.replace(/\s/g,'');
	// }
	// var  = [locInput,minInput,maxInput,avgInput];
	// locations.push(Namer());
}


// Listen to the button, when it's clicked run the function named Update
var clickIt = document.getElementById("clickIt");
clickIt.addEventListener('click', Update);




// Make sure the appends are inside the for loops, get rid of the if statement



/*
	var totalList = document.getElementById("header");
		var item = document.createElement('th')
		item.appendChild(document.createTextNode("singular"));
		totalList.appendChild(item);
*/



/*
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
*/




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



