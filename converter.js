// calculation functions
function cmToIn(cm){ //in cm, out inches
    var inches = cm / 2.54;
    return inches;
}

function inToCm(inches){
    var cm = inches * 2.54;
    return cm;
}

function mToFt(m){ 
    var ft = m / .3048; 
    return ft;
}

function feetToMeter(feet){
    var meter = feet * 0.3048; 
    return meter;
}

//IDs of inputs 
var inpArr = ['cmInp', 'inchInp', 'meterInp', 'feetInp']; //1d

//event listeners
for (let i = 0; i<inpArr.length; i++){
    document.getElementById(inpArr[i]).addEventListener("keyup", fromAny);    
}

function fromAny(){ //triggered on any input's keyup
    //needed - correlate input field to array of array of functions
    //var inpArr = ['cmInp', 'inchInp', 'meterInp', 'feetInp']; //1d
    var funcArr = [['cmToIn'], ['inToCm'], ['mToFt'], ['feetToMeter'] ]; //2d 
    var outArr = [['inchInp'], ['cmInp'], ['feetInp'], ['meterInp'] ]; //2d
    
    var inp = document.getElementById(this.id).value; //get input value 
    var index = inpArr.indexOf(this.id); //need index
    var functionCount = funcArr[index].length; //need count of all applicable functions 
     
    // use functions applicable
    if (functionCount == 1){ // if length 1, use first
        var output = window[funcArr[index][0]](inp);  // calculate
        document.getElementById(outArr[index][0]).value = output; // set 
    }
    else{
        var funcArrUse = funcArr[index]; //useful functions
        var outArrUse = outArr[index]; //output locations
        //var outputArr = new Array(functionCount); //calculated values
        //calculate, display values
        for (let i = 0; i<functionCount; i++){
          document.getElementById(outArrUse[i]).value = window[funcArrUse][i](inp);  
        }
    }
}
