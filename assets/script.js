var dateAndTimeEl = $('#currentDay');
function Intilization() {
    TimeCounter();
}
function TimeCounter() {
     setInterval(function () {
     var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        console.log(now);
        dateAndTimeEl.text(now);
      
    }, 1000);
  }
 Intilization();
 


