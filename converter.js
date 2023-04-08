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

function toNumber(s){ //used in conversion functions
    var s = String(s);
    s = s.replaceAll(" ", ""); //remove blanks
    if (s == ''){
        return 0;
    }

    //handle fraction
    if (s.includes("/")){
        var arr = s.split("/");
        var result = arr[0]/arr[1];
        return result;
    }

    if (typeof(s) == 'string'){ //convert
        return parseFloat(s);
    }

}

function ftInToMeter(ftIn){
    var ft = ftIn[0];
    var inch = ftIn[1];

    ft = toNumber(ft);
    inch = toNumber(inch);
    //convert to inches only, then cm, then m
    var inchOnly = (ft * 12) + inch;
    var cm = inchOnly * 2.54;
    return m = cm / 100;
}

function getVal(someID){
    return document.getElementById(someID).value;
}

function setVal(someID, val){
    document.getElementById(someID).value = val;
}

function ftInToFeet(ftIn){
    //take array, convert to feet
    var feetOnly = toNumber(ftIn[0]);
    var inchOnly = toNumber(ftIn[1]);
    var feet = feetOnly + (inchOnly / 12);
    return feet;
}

function kmToMi(km){ // 1 mi = 63360 inches
    //km => cm => inches
    var cm = km * 100000;
    var inches = cm/2.54;
    var mi = inches / 63360;
    return mi;
}

function miToKm(mi){
    var inches = mi * 63360;
    var cm = inches * 2.54;
    var km = cm / 100000;
    return km;
}

function tbspToCup(tbsp){
    return toNumber(tbsp)/16;
}

function tbspToTsp(tbsp){
    return toNumber(tbsp) * 3;
}

function cupToTbsp(cup){
    return toNumber(cup) * 16;
}

function cupToTsp(cup){
    return toNumber(cup) * 48;
}

function tspToTbsp(tsp){
    return toNumber(tsp)/3;
}

function tspToCup(tsp){
    return toNumber(tsp)/48;
}

//IDs of inputs 
var inpArr = ['cmInp', 'inchInp', 'meterInp', 'feetInp', 'feetInp2', 'inchInp2', 'kmInp', 'miInp', 'tbspInp', 'cupInp', 'tspInp']; //1d

//event listeners
for (let i = 0; i<inpArr.length; i++){
    document.getElementById(inpArr[i]).addEventListener("change", fromAny);    
}

for (let i = 0; i<inpArr.length; i++){
    document.getElementById(inpArr[i]).addEventListener("keyup", fromAny);    
}

//needed - correlate input field to array of array of functions
var funcArr = [['cmToIn'], ['inToCm'], ['mToFt', 'meterToFtIn'], ['feetToMeter', 'feetToFtIn'], ['feetInp2FuncPlaceholder'], 
['inchInp2FuncPlaceholder'], ['kmToMi'], ['miToKm'], ['tbspToCup', 'tbspToTsp'], ['cupToTbsp', 'cupToTsp'], 
['tspToTbsp', 'tspToCup']]; //2d 
var outArr = [['inchInp'], ['cmInp'], ['feetInp'], ['meterInp'], ['feetInp2OutputPlaceholder'], ['InchInp2OutputPlaceholder'], 
['miInp'], ['kmInp'], ['cupInp', 'tspInp'], ['tbspInp', 'tspInp'], ['tbspInp', 'cupInp'] ]; //2d

function fromFtIn(){ //trigger on ft or inch input , must precede fromAny
    var ft = getVal('feetInp2');
        var inch = getVal('inchInp2');
        if (ft == "" && inch == ""){ //empty input => empty output
            setVal('meterInp', ""); 
            setVal('feetInp', "");    
        }
        else{
            var meter = ftInToMeter([ft, inch]); //get meters
            var feet = ftInToFeet([ft, inch]);
            setVal('meterInp', meter); 
            setVal('feetInp', feet);
        }
}

function outputFtIn(){ //must precede fromAny
    if (emptyInp){
        setVal('feetInp2', "");
        setVal('inchInp2', "");    
    }
    else{
        var func = funcArrUse[i];
        var ftInArr = window[func](inp);
        setVal('feetInp2', ftInArr[0]);
        setVal('inchInp2', ftInArr[1]);
    }  
}

function fromAny(){ //triggered on any input's keyup    
    //handling based on inpArr > index > funcArr > outArr
    var inp = getVal(this.id);
    var emptyInp = (inp == "") ? true:false;
    var index = inpArr.indexOf(this.id); //need index
    var functionCount = funcArr[index].length; //need count of all applicable functions 
    var funcArrUse = funcArr[index]; //useful functions
    var outArrUse = outArr[index]; //output locations

    if (this.id == 'feetInp2' || this.id == 'inchInp2'){ //input is ft in 
        fromFtIn();
    }
    else{ 
        for (let i = 0; i<functionCount; i++){
            if (funcArrUse[i] == 'feetToFtIn' || funcArrUse[i] == 'meterToFtIn'){ //output is ft in 
                outputFtIn();
            }
            else {
                if (emptyInp){
                    setVal(outArrUse[i], "");    
                }
                else{
                    setVal(outArrUse[i], window[funcArrUse[i]](inp));
                }
            }
        }
    }
}

// module.exports = {cmToIn, inToCm, mToFt, feetToMeter, feetToFtIn, meterToFtIn, ftInToMeter, toNumber, ftInToFeet, kmToMi, 
//     miToKm, tbspToCup, tbspToTsp, cupToTbsp, cupToTsp, tspToTbsp, tspToCup}; 
