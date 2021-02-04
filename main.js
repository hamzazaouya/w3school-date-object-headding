/*global console, document*/

var date = new Date();

document.getElementById('time').innerHTML = date;
document.getElementById('year').innerHTML = "Year: " + date.getFullYear();
document.getElementById('month').innerHTML = "Month: " + (date.getMonth() + 1);
document.getElementById('day').innerHTML = "Day: " + date.getDate();
document.getElementById('hour').innerHTML = "Hours: " + date.getHours();
document.getElementById('minute').innerHTML = "Minutes: " + date.getMinutes();
document.getElementById('second').innerHTML = "Secounds: " + date.getSeconds();
