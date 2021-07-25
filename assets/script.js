var dateAndTimeEl = $('#currentDay');
function Intilization() {
    TimeCounter(); // Displaying day, month, date, year and time with seconds
    workdaySchedulerpastPresentFuture(); // calling a function for past present and future time slots.
}

$(".saveBtn").on("click", function () { //taking the click of Save button
    var text = $(this).siblings(".description").val();  //taking the value of "description" used "this" for taking the current values.
    var time = $(this).parent().attr("id"); // for time, taking "id" as parent. 
    localStorage.setItem(time, text); // Storing time and text into the local storage

});
// taking and showing the text in the text area. i didnt use any loop here, because all hours are statically created in my HTML page. I an just taking and assiging the values.
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

//This is the function for showing day, date and time in the header. Used "moment.js" for generating the the date and time.
function TimeCounter() {
    setInterval(function () {
        var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        dateAndTimeEl.text(now);
    }, 1000);
}
//This  function is for creating the class for past, present and future.
function workdaySchedulerpastPresentFuture() {
    $(".time-block").each(function () {
        var presentTime = moment().hour(); // finding the present time
        var schedulerTime = parseInt($(this).attr("id").split("hour")[1]); //finding the scheduler time
        console.log("presentTime:", presentTime);
        console.log("schedulerTime:", schedulerTime)
        if (presentTime === schedulerTime) { // checking different conditions and making classes for past, future and present. Made changed in the style sheets accordingly.
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else if (presentTime < schedulerTime) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }

    })
}

Intilization(); // initial function 