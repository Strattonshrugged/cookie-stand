// times = ["10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
results = []

console.log("Cookie Stand App.js has initiated");

var PikePlace = {
	location: 'Pike Place Market',
	minCusPerHr: 17,
	maxCusPerHr: 88,
	avgCksPerCus: 5.2,
	randCookieCount: function()	{
		return Math.floor(Math.random() * (88-17+1)) +17;
	}
}

for (var i = 0; i < 8; i++) {
	results.push(PikePlace.randCookieCount());
}

document.write(results);
console.log(results);

// so PikePlace.randCookiecount should give me my cookies in a given hour

// then a for loop to populate the array

// then the makeUL function to turn the array into a display

