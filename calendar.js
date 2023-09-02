function isLeapYear(year) {
	if (year % 4 === 0) return true;
	else if (year % 400 === 0) return true;

	return false;
}

// returns 29 if leap year else 28
function getFebDays(year) {
	return isLeapYear(year) ? 29 : 28;
}

// take the index of the month {0: Jan, 1: Feb, ..., 11: Dec}
// return the maximum total days of that month
function getMaxDays(monthIndex, year) {
	return [31, getFebDays( year ), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][monthIndex];
}

// take Date()
// returns an array full of dates
// if 1st date start at friday then 
// returns      [null, null, null, null, null, 1,   2,   3,   4,   ...]
// representing [Sun,  Mon,  Tue,  Wed,  Thu,  Fri, Sat, Sun, Mon, ...]
function getDays( date ) {
	const maxDay = getMaxDays( date.getMonth(), date.getFullYear() );
    
	// set current date to 1st to get starting week day
	date.setDate(1)
	const startingWeekDay = date.getDay();

	let days = [];

	for (let i = 0; i < startingWeekDay; i++) {
		days.push(null);
	}

	for (let i = 1; i <= maxDay; i++) {
		days.push(i);
	}
	return days;
}



// returns a node that includes of dates element
export function generateCalendarDates(month, year) {
	const days = getDays(month, year);

	//create new dates container
	const datesContainer = document.createElement('div')
	datesContainer.dataset.container = "dates"
	datesContainer.classList.add('calendar-dates')


	for (const date of days) {
		const dateButton = document.createElement("button");
		dateButton.innerText = date;
		dateButton.dataset.date = date;
		dateButton.classList.add("date");

		datesContainer.append(dateButton)
	}

	return datesContainer
}







export function monthName(monthIndex) {
	return {
		0: "January",
		1: "February",
		2: "March",
		3: "April",
		4: "May",
		5: "June",
		6: "July",
		7: "August",
		8: "September",
		9: "October",
		10: "November",
		11: "December",
	}[monthIndex];
}