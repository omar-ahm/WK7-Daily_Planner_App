// Get the current day and display it on the page
var currentDay = $("#currentDay");
var today = moment();
currentDay.text(today.format("dddd, Do MMMM YYYY"));

// Variable to access the time blocks on the page 
var timeBlocks = $(".time-block");

// Variable to access the current hour of the day
var currentTime = new Date().getHours();

// console.log(currentTime); //to test and check the current hours is accessed

// Create a function to access all elements on the html that have a class of "time-block"
 $(".time-block").each(function() {
    var hour = parseInt($(this).attr("data-time")); // Create a variable for hour and get the "data-time" attribute of the current element and convert it to a number
    if(hour < currentTime) {
        $(this).addClass("past");
    } else if (hour === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass('future');
    }
});

// set up variables to store user input into local storage
var textAreas = $(".description");
var saveBtn = $(".saveBtn");

// Load the data stored in local storage
textAreas.each(function(index) {
    var key = "textArea" + index;
    $(this).val(localStorage.getItem(key));
});

// Button to save user input events 
saveBtn.on("click", function() {
    var textArea = $(this).siblings(".description");
    var textAreaIndex = textAreas.index(textArea);
    var key = "textArea" + textAreaIndex;
    localStorage.setItem(key, textArea.val())

})