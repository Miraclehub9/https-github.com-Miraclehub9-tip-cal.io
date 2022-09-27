//hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls our custom function 
document.getElementById("calculate").onclick = function() {calculateTip(); };

//custom function
function calculateTip() {

    // store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalpeople").value;

    // quick validation
    if(billAmount === "" || serviceQuality == 0)  {
        return window.alert("please enter some values to get this baby up and running ");
    } //this will prevent the function from continuing
 
    // to check if this input is less than 1 or equal to 1
    if(numPeople === "" || numPeople <= 1){
          numPeople = 1;

          document.getElementById("each").style.display = "none";

    } else {

        document.getElementById("each").style.display = "block";

    }
    // do some math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    // display tipl
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

} 