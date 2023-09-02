const calendarBody = document.querySelector("[data-calendar-body]");
const prevMonthButton = document.querySelector(`[data-month-changer="prev"]`);
const nextMonthButton = document.querySelector(`[data-month-changer="next"]`);

let date = new Date();


async function updateCalendar( date ) {
	const {generateCalendarDates, monthName} = await import('./calendar')

	document.querySelector('[data-month]').innerText = monthName( date.getMonth() )
	document.querySelector('[data-year]').innerText = date.getFullYear()

	const datesContainer = generateCalendarDates( date )

	calendarBody.querySelector('[data-container="dates"]')?.remove()
	calendarBody.append( datesContainer )
}


(async function() {
	await updateCalendar( date )
})();


prevMonthButton.addEventListener('click', async ()=> {
	date.setMonth( date.getMonth()  - 1)
	await updateCalendar( date )
})


nextMonthButton.addEventListener('click', async ()=> {

	date.setMonth( date.getMonth()  + 1)
	await updateCalendar( date )
})