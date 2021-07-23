var dateAndTimeEl = $('#currentDay');
function Intilization() {
    //TimeCounter();
    workdaySchedulerpastPresentFuture();
    
}
function TimeCounter() {
     setInterval(function () {
     var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        console.log(now);
        dateAndTimeEl.text(now);
      
    }, 1000);
  }


 function workdaySchedulerpastPresentFuture() {
    
$(".time-block").each(function() {    
    var presentTime = moment().hour();
    var schedulerTime = parseInt($(this).attr("id").split("hour")[1]);
    console.log("presentTime:", presentTime);
    console.log("schedulerTime:", schedulerTime)
    if (presentTime === schedulerTime ) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    } else if (presentTime < schedulerTime ) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }else {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }

})
   
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);

 });

    $("#hour8.description").val(localStorage.getItem("hour8"));
    $("#hour9.description").val(localStorage.getItem("hour9"));
    $("#hour10.description").val(localStorage.getItem("hour10"));
    $("#hour11.description").val(localStorage.getItem("hour11"));
    $("#hour12.description").val(localStorage.getItem("hour12"));
    $("#hour13.description").val(localStorage.getItem("hour13"));
    $("#hour14.description").val(localStorage.getItem("hour14"));
    $("#hour15.description").val(localStorage.getItem("hour15"));
    $("#hour16.description").val(localStorage.getItem("hour16"));
    $("#hour17.description").val(localStorage.getItem("hour17"));
 
 }

 
 
 Intilization();

