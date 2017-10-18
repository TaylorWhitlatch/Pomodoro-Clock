//Todays date
//Todays date
var date = new Date();
var today = date.toDateString();
console.log(`Today is ${today}`);

var userWork = parseInt(prompt("Work interval in minutes:"));
var userBreak = parseInt(prompt("Break interval in minutes"));
timer(userWork)

function timer(limit){
  var now = date.getTime();
  var interval = setInterval(()=>{
  //getting the time at that second
  var countDownDate = new Date().getTime();
  //calculating how much time left
  var timeRemaining = countDownDate - now;
  //calculating for minutes and seconds
  var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  var seconds = Math.floor((timeRemaining / 1000) % 60);
  console.log(minutes,seconds); 
  if (minutes >= limit) {
    clearInterval(interval);
    timer(userBreak);
  }
}, 1000);
}

// <script>
// set the date we are counting to
// var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "EXPIRED";
//   }
// }, 1000);
// </script>