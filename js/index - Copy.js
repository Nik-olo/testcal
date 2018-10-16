var lastEdited = "Wi";  // initialize the lastEdited flag to any of the three input fields.

//button listeners
document.getElementById("submit").onclick = calculate;
document.getElementById("reset").onclick = reset;

//picks up on if and when an input field changes, then sets the lastEdited flag to the input field that was changed.
document.getElementById("Wi").onchange = function() {
  lastEdited = "Wi";
};
document.getElementById("Wf").onchange = function() {
  lastEdited = "Wf";
};
document.getElementById("Mci").onchange = function() {
  lastEdited = "Mci";
};
document.getElementById("Mcf").onchange = function() {
  lastEdited = "Mcf";
};

function calculate(temp) {

  //initialize local variables
  var Wi = document.getElementById("Wi").value;
  Wi = parseFloat(Wi);

  var Wf = document.getElementById("Wf").value;
  Wf = parseFloat(Wf);

  var Mci = document.getElementById("Mci").value;
  Mci = parseFloat(Mci);

  var Mcf = document.getElementById("Mcf").value;
  Mcf = parseFloat(Mcf);

  //temp values
  var conversionC;
  var conversionF;
  var conversionK;

 var calWi;
 var calWf;
 var calMci;
 var calMcf;

 calWi = (Wf * (100-Mcf)) / (100 - MCi);
 document.getElementById("Wi").value = Math.round(calWi);
 document.getElementById("Wi").innerHTML = calWi;

  calWf = Wi * ((100-Mci)/(100-Mcf));
document.getElementById("Wf").value = Math.round(calWf);
 document.getElementById("Wf").innerHTML = calWf;

  calMci = (100 * Wi+Wf*(-100+Mcf))/Wi;
  document.getElementById("Mci").value = Math.round(calMci);
 document.getElementById("Mci").innerHTML = calMci;

  calMcf = 100-((100*Wi)/Wf)+((Wi*Mci)/Wf);
    document.getElementById("Mcf").value = Math.round(calMcf);
 document.getElementById("Mcf").innerHTML = calMcf;

  // //if the Wi field changes, convert the Wf and Mci values
  // if (lastEdited === "Wi") {
  //   conversionF = Wi * 9 / 5 + 32;
  //   conversionK = Wi + 273;
  //   //round the converted Wf and Mci values
  //   document.getElementById("Wf").value = Math.round(conversionF);
  //   document.getElementById("Mci").value = Math.round(conversionK);
  // } 
  //   //if the Wf field changes, convert the Wi and Mci values
  //   else if (lastEdited === "Wf") {
  //   conversionC = (Wf - 32) * 5 / 9;
  //   conversionK = conversionC + 273;
  //   //round the converted Wi and Mci values
  //   document.getElementById("Wi").value = Math.round(conversionC);
  //   document.getElementById("Mci").value = Math.round(conversionK);
  // } 
  //   //if the Mci field changes, convert the Wi and Wf values
  //   else if (lastEdited === "Mci") {
  //   conversionC = Mcf - 273;
  //   conversionF = conversionC * 9 / 5 + 32;
  //   //round the converted Wi and Wf values
  //   document.getElementById("Wi").value = Math.round(conversionC);
  //   document.getElementById("Wf").value = Math.round(conversionF);
  // }

  // //get the current conversion temp values and store them in the input fields
  // document.getElementById("Wi").innerHTML = conversionC;
  // document.getElementById("Wf").innerHTML = conversionF;
  // document.getElementById("Mci").innerHTML = conversionK;
}

//reset function for the reset button to reset all current values
function reset() {
  document.getElementById("Wi").value = "";
  document.getElementById("Wf").value = "";
  document.getElementById("Mci").value = "";
  document.getElementById("Mcf").value = "";
}