// Get the current day and display it on the page
var currentDay = $("#currentDay");
var today = moment();
currentDay.text(today.format("dddd, Do MMMM YYYY"));
