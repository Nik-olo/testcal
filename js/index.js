//button listeners
document.getElementById("submit").onclick = calculate;
document.getElementById("reset").onclick = reset;



function calculate() {

  var valueWi = parseFloat(document.getElementById("Winitial").value);
  var valueWf = parseFloat(document.getElementById("Wfinal").value);
  var valueMci = parseFloat(document.getElementById("Mcontentinitial").value);
  var valueMcf = parseFloat(document.getElementById("Mcontentfinal").value);

  if (typeof(valueWi)=='number' && valueWi>0 && typeof(valueWf)=='number' && valueWf>0 && typeof(valueMci)=='number' && valueMci>0){
    var calMcf = 100-((100*valueWi)/valueWf)+((valueWi*valueMci)/valueWf);
    document.getElementById("Mcontentfinal").value = Math.round(calMcf);
  }
  if (typeof(valueWi)=='number' && valueWi>0 && typeof(valueWf)=='number' && valueWf>0 && typeof(valueMcf)=='number' && valueMcf>0){
    var calMci = (100 * valueWi+valueWf*(-100+valueMcf))/valueWi;
    document.getElementById("Mcontentinitial").value = Math.round(calMci);
  }
  if (typeof(valueMci)=='number' && valueMci>0 && typeof(valueWf)=='number' && valueWf>0 && typeof(valueMcf)=='number' && valueMcf>0){
    var calWi = (valueWf * (100-valueMcf)) / (100 - valueMci);
    document.getElementById("Winitial").value = calWi.toFixed(2);
  }
  if (typeof(valueMcf)=='number' && valueMcf>0 && typeof(valueWi)=='number' && valueWi>0 && typeof(valueMci)=='number' && valueMci>0){
    var calWf = valueWi * ((100-valueMci)/(100-valueMcf));
    document.getElementById("Wfinal").value = calWf.toFixed(2);
  }

var incr = 15;
var Mcinitial = parseFloat(document.getElementById("Mcontentinitial").value);
var nVals_y =Mcinitial-(Mcinitial%incr);
console.log(Mcinitial, nVals_y);

var a = []; // Create a new empty array.
a[nVals_y/incr] = nVals_y/incr;   // Perfectly legal JavaScript that resizes the array.


a[0]=0;
for (var i = 1; i < a.length; i++) {
    // Iterate over numeric indexes .
    a[i] = incr*i;        
}
console.log (a);


var b = []; // Create a new empty array.
b[nVals_y/incr] = nVals_y/incr; 
b[0]=parseFloat(document.getElementById("Winitial").value);

var Mci_temp=Mcinitial;
var Mcf_temp=Mcinitial-incr;
var temp =0;


for (var i = 1; i < b.length; i++) {
    temp = b[i-1]*((100-Mci_temp)/(100-Mcf_temp))
    b[i] = temp.toFixed(2);
    Mci_temp=Mcf_temp
    Mcf_temp=Mcf_temp-incr;
    // if (Mcf_temp<0){
    //   Mcf_temp=0;
    // }
    //console.log(temp.toFixed(2),Mci_temp,Mcf_temp);

}
console.log (b);
console.log (a);


var c = a.reverse();
valueWf=Math.round(valueWf);

new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: c,
    datasets: [{ 
        data: b,
        label: "Target",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [{
        x: calMcf,
        y: calWf
    }],
        label: "Weight",
        borderColor: "#8e5ea2",
        fill: false
      }
    
    ]
  },
  options: {
    title: {
      display: true,
      text: 'moisture'
    }
  }
});


}

//reset function for the reset button to reset all current values
function reset() {
  document.getElementById("Winitial").value = "";
  document.getElementById("Wfinal").value = "";
  document.getElementById("Mcontentinitial").value = "";
  document.getElementById("Mcontentfinal").value = "";
}