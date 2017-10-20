function userInput(){
  var userWork = document.getElementsByClassName('work-interval-form')[0].value;
  var userBreak = document.getElementsByClassName('break-interval-form')[0].value;
  console.log(userWork);
  // if (userWork == ''){
  //   document.getElementsByClassName("work-interval-form")[0].value = "Required!!!";
  //   document.getElementsByClassName("work-interval-form")[0].style.color = "red";
  //   console.log(userWork);   
  //   return false; 
  // }else if (userBreak == ''){
  //   document.getElementsByClassName("work-interval-form")[0].style.color = "green";
  //   document.getElementsByClassName("break-interval-form")[0].value = "Required!!!";
  //   document.getElementsByClassName("break-interval-form")[0].style.color = "red";
  //   // console.log(userBreak); 
  //   return false;    
  // }else{
  //   document.getElementsByClassName("work-interval-form")[0].style.color = "green";
  //   document.getElementsByClassName("break-interval-form")[0].style.color = "green";
   // } 
  timerWork(userWork)
}

  




function timerWork(limit){
  $('#start').hide();
  $('#breaktime').attr('disabled', true);
  $('#reset').attr('disabled', true);
  var seconds = 60 //0;
  var minutes = limit - 1;//0;
 
  // var x = setInterval(function(){
  //   if (limit <= minutes){
  //     return minutes;
  //   }else if (seconds >= 60){
  //     minutes += 1;
  //     seconds = 0;
  //   }else{
  //     seconds += 1;
  //   }
  var interval = setInterval(function(){
    if (seconds > 0){
    seconds -= 1;
    }else if (seconds === 0 && minutes > 0){
      minutes -= 1;
      seconds = 60;
    }else if (seconds === 0 && minutes === 0){
        clearInterval(interval);
        // return minutes;
        $('#reset').attr('disabled', false);
      }
  document.getElementsByClassName('minutes')[0].style.fontSize = "125px";
  document.getElementsByClassName('seconds')[0].style.fontSize = "125px";
  document.getElementsByClassName('minutes')[0].innerHTML = minutes.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;
  document.getElementsByClassName('seconds')[0].innerHTML = seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;;
  console.log(minutes, seconds);
  }, 50)

  
  // $('#break').show();

 };



 function timerBreak(limit){
  var seconds = 60 //0;
  var minutes = limit - 1;//0;

  var interval = setInterval(function(){
    if (seconds > 0){
    seconds -= 1;
    }else if (seconds === 0 && minutes > 0){
      minutes -= 1;
      seconds = 60;
    }else{
        clearInterval(interval);
        // return minutes;
      }
  document.getElementsByClassName('minutes')[0].style.fontSize = "125px";
  document.getElementsByClassName('seconds')[0].style.fontSize = "125px";
  document.getElementsByClassName('minutes')[0].innerHTML = minutes.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;
  document.getElementsByClassName('seconds')[0].innerHTML = seconds.toLocaleString(undefined,{minimumIntegerDigits: 2});//converts the seconds to double digits;;
  console.log(minutes, seconds);
  }, 100)

 };

 function stop(){

    clearInterval();

  };




function reset(){
var userWork = Number(document.getElementsByClassName('work-interval-form')[0].value);
  document.getElementsByClassName('minutes')[0].innerHTML = userWork.toLocaleString(undefined,{minimumIntegerDigits: 2});
  document.getElementsByClassName('seconds')[0].innerHTML = '00';
    $('#start').show();

}

$("#a1").click(function(e){
    e.preventDefault();
    var value = $("#b1").val();
    console.log(value);
    document.getElementById('current1').innerHTML = value; 
});

$("#c1").click(function(e){
    e.preventDefault();
    document.getElementById('b1').value = "TASK 1 DONE";

})

$("#a2").click(function(e){
    e.preventDefault();
    var value = $("#b2").val();
    console.log(value);
    document.getElementById('current2').innerHTML = value; 
});

$("#c2").click(function(e){
    e.preventDefault();
    document.getElementById('b2').value = "TASK 2 DONE";

})

$("#a3").click(function(e){
    e.preventDefault();
    var value = $("#b3").val();
    console.log(value);
    document.getElementById('current3').innerHTML = value; 
});

$("#c3").click(function(e){
    e.preventDefault();
    document.getElementById('b3').value = "TASK 3 DONE";

})



