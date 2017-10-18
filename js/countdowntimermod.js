//nick's version of timer

console.log('loading script');
//Todays date
//Todays date
// var date = new Date();
// var today = date.toDateString();
// console.log(`Today is ${today}`);
// document.getElementById('today').innerHTML = today;

function userInput(){
  var userWork = document.getElementsByClassName('work-interval-form')[0].value;
  var userBreak = document.getElementsByClassName('break-interval-form')[0].value;
  console.log(userBreak);
  if (userWork == ''){
    document.getElementsByClassName("work-interval-form")[0].value = "Required!!!";
    document.getElementsByClassName("work-interval-form")[0].style.color = "red";
    console.log(userWork);   
    return false; 
  }else if (userBreak == ''){
    document.getElementsByClassName("work-interval-form")[0].style.color = "green";
    document.getElementsByClassName("break-interval-form")[0].value = "Required!!!";
    document.getElementsByClassName("break-interval-form")[0].style.color = "red";
    console.log(userBreak); 
    return false;    
  }else{
    document.getElementsByClassName("work-interval-form")[0].style.color = "green";
    document.getElementsByClassName("break-interval-form")[0].style.color = "green";
    timerWork(userWork)
  }
}


function timerWork(limit){
  var seconds = 0;
  var minutes = 0;
  var x = setInterval(function(){
    if (limit <= minutes){
      return minutes;
    }else if (seconds >= 60){
      minutes += 1;
      seconds = 0;
    }else{
      seconds += 1;
    }
  document.getElementsByClassName('minutes')[0].style.fontSize = "125px";
  document.getElementsByClassName('seconds')[0].style.fontSize = "125px";
  document.getElementsByClassName('minutes')[0].innerHTML = minutes.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;
  document.getElementsByClassName('seconds')[0].innerHTML = seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;;
  console.log(minutes, seconds);
  }, 100)
}

$("#a1").click(function(e){
    e.preventDefault();
    var value = $("#b1").val();
    console.log(value);
    document.getElementById('current1').innerHTML = value; 
});

$("#a2").click(function(e){
    e.preventDefault();
    var value = $("#b2").val();
    console.log(value);
    document.getElementById('current2').innerHTML = value; 
});

$("#a3").click(function(e){
    e.preventDefault();
    var value = $("#b3").val();
    console.log(value);
    document.getElementById('current3').innerHTML = value; 
});
