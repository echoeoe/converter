// calculation functions
function cmToIn(cm){ //in cm, out inches
    return inches = cm / 2.54;
}

function inToCm(inches){
    return cm = inches * 2.54;
}

function mToFt(m){ 
    return ft = m / .3048;
}

function feetToMeter(feet){
    return meter = feet * 0.3048;
}

function feetToFtIn(feet){
    var ft = Math.floor(feet);
    var inch = (feet - ft) * 12;
    return [ft, inch];
}

function meterToFtIn(meter){ 
    //convert to cm, then inches, then ft in 
    var cm = meter * 100;
    var inch = cm / 2.54;
    var ftOnly = Math.floor(inch / 12);
    var inchOnly = inch - (ftOnly * 12);
    return [ftOnly, inchOnly];
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
    var funcArr = [['cmToIn'], ['inToCm'], ['mToFt', 'meterToFtIn'], ['feetToMeter', 'feetToFtIn'] ]; //2d 
    var outArr = [['inchInp'], ['cmInp'], ['feetInp'], ['meterInp'] ]; //2d
    
    var inp = document.getElementById(this.id).value; //get input value 
    var index = inpArr.indexOf(this.id); //need index
    var functionCount = funcArr[index].length; //need count of all applicable functions 
    var funcArrUse = funcArr[index]; //useful functions
    var outArrUse = outArr[index]; //output locations

    for (let i = 0; i<functionCount; i++){
        if (funcArrUse[i] == 'feetToFtIn' || funcArrUse[i] == 'meterToFtIn'){
            var func = funcArrUse[i];
            var ftInArr = window[func](inp);
            document.getElementById('feetInp2').value = ftInArr[0];
            document.getElementById('inchInp2').value = ftInArr[1];
        }
        else {
            document.getElementById(outArrUse[i]).value = window[funcArrUse[i]](inp);
        }
    }
}
