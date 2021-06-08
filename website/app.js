/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


async function getData() {
	const rawResponse = await fetch('http://localhost:3000/projectData', {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
	const content = await rawResponse.json();
	console.log("contentcontent", content);
	let { temperature, date, userResponse } = content;
	document.getElementById("date").innerHTML =  date;
	document.getElementById("temp").innerHTML = temperature;
	document.getElementById("content").innerHTML = userResponse;

}
async function sendWeatherData(data, userResponse) {
	let temperature = data.main.temp;
	const rawResponse = await fetch('http://localhost:3000/projectData', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ date: newDate, temperature, userResponse })
	});
	const content = await rawResponse.json();

	console.log(content);
	await getData();
}
async function getweatherbyCode() {
	var zipcode = document.getElementById("zip").value;
	var userResponse = document.getElementById("feelings").value;

	let data = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${zipcode}&APPID=ab665002f08e072d6dd2fa5b594efa23`, {
		"method": "GET"
	});
	data = await data.json();
	return await sendWeatherData(data, userResponse);

}

