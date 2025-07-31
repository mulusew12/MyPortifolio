


document.getElementsByClassName('trig-option').addEventListener('click', function () {

  document.getElementById('trigon').style.display = 'none'

  
})










const display = document.getElementById("display");
function appendToDisplay(input) {
    display.value += input;

}


function appendToOperate(input) {
  if (display.value =="") {
    display.value = display.value;
} else {
  display.value += input;

}
}



function appendToClear() {
   
    display.value = "";

}
function appendToCalculate() {

 try {
  if (display.value =="") {
    display.value = display.value;
} else {
  display.value= eval(display.value);
}
 } catch (error) {
    display.value = "error";
 }
   
  } 


   



function x2(params) {

  if (display.value=="") {
    display.value = "";
  } else {
    const ans = Math.pow(display.value, 2);
    display.value = ans ;
  }
 
}

function x3(params) {
  if (display.value=="") {
    display.value = "";
  } else {
  display.value = Math.pow(display.value, 3);
}
}

function x4(params) {
  if (display.value=="") {
    display.value = "";
  } else {
  display.value =Math.pow(display.value, 4);
}
}

function x5(params) {
  if (display.value=="") {
    display.value = "";
  } else {
  display.value =Math.pow(display.value, 5);
}
}
function percent(params) {
  if (display.value=="") {
    display.value = "";
  } else {
  display.value =display.value*0.01;
}
}
function Pi(params) {
  if (display.value="3.14122") {
    display.value = display.value;
  } else {
    display.value =display.value*3.14122;
  }
 
}
function logar(params) {
 if (display.value =="") {
    display.value = ""
 } else {
  display.value =Math.log10(display.value);
 }
 

}
function lun(params) {
  if (display.value =="") {
    display.value = ""
  } else if (display.value ==0) {
    display.value = "Undefined"
  } else {
    display.value = Math.log(display.value);
  }
 
}

function x12(params) {
  if (display.value=="") {
    display.value = "";
  } else {
  const ans = Math.pow(display.value, 1/2);
  display.value = ans;
}
}
function x13(params) {
  if (display.value=="") {
    display.value = "";
  } else {
  display.value = Math.pow(display.value, 1/3);
}
}

function x14(params) {
  if (display.value=="") {
    display.value = "";
  } else {
  display.value =Math.pow(display.value, 1/4);
}
}
function x15(params) {
  if (display.value=="") {
    display.value = "";
  } else {
  display.value = Math.pow(display.value, 1/5);
}
}
function percent(params) {
  display.value =display.value +"%=" + display.value*0.01 ;
}
function Pi(params) {
  if (display.value="3.14122") {
    display.value = display.value;
  } else {
    display.value =display.value*3.14122;
  }
 
}

function sine(params) {
  
  if (display.value=="") {
    display.value = "";
  } else {
    display.value = Math.sin(display.value);
  }

}

function cosine(params) {
  
  if (display.value=="") {
    display.value = "";
  } else {
    display.value = Math.cos(display.value);
  }

}
function tangent(params) {
  
  if (display.value=="") {
    display.value = "";
  } else {
  display.value = Math.tan(display.value);
}
}
function degr(params) {
  display.value = display.value*(Math.PI/180);
}

function acosine(params) {
  
  if (display.value=="") {
    display.value = "";
  } else {
    display.value = 1/Math.cos(display.value);
  }

}

function next(event) {
  const h3 = document.createElement("h3");
  h3.innerHTML = `You are clicked the next button!`;
   event.preventDefault();
 
}
function appendToClean() {
  let newInput = display.value;
 
  display.value = newInput.slice(0, -1);
  
}
function eof() {
  display.value = Math.E;

}