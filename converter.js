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
    s = s.replaceAll(" ", "");
    if (s == ''){
        return 0;
    }
    if (typeof(s) == 'string'){
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

//IDs of inputs 
var inpArr = ['cmInp', 'inchInp', 'meterInp', 'feetInp', 'feetInp2', 'inchInp2']; //1d

//event listeners
for (let i = 0; i<inpArr.length; i++){
    document.getElementById(inpArr[i]).addEventListener("keyup", fromAny);    
}

function fromAny(){ //triggered on any input's keyup
    //needed - correlate input field to array of array of functions
    var funcArr = [['cmToIn'], ['inToCm'], ['mToFt', 'meterToFtIn'], ['feetToMeter', 'feetToFtIn'], ['feetInp2FuncPlaceholder'], 
    ['inchInp2FuncPlaceholder'] ]; //2d 
    var outArr = [['inchInp'], ['cmInp'], ['feetInp'], ['meterInp'], ['feetInp2OutputPlaceholder'], ['InchInp2OutputPlaceholder'] ]; //2d
    
    //handling based on inpArr > index > funcArr > outArr
    var inp = getVal(this.id);
    var index = inpArr.indexOf(this.id); //need index
    var functionCount = funcArr[index].length; //need count of all applicable functions 
    var funcArrUse = funcArr[index]; //useful functions
    var outArrUse = outArr[index]; //output locations

    if (this.id == 'feetInp2' || this.id == 'inchInp2'){
        var ft = getVal('feetInp2');
        var inch = getVal('inchInp2');
        var meter = ftInToMeter([ft, inch]); //get meters
        setVal('meterInp', meter); 
        var feet = ftInToFeet([ft, inch]);
        setVal('feetInp', feet);
    }
    else{
        for (let i = 0; i<functionCount; i++){
            if (funcArrUse[i] == 'feetToFtIn' || funcArrUse[i] == 'meterToFtIn'){
                var func = funcArrUse[i];
                var ftInArr = window[func](inp);
                setVal('feetInp2', ftInArr[0]);
                setVal('inchInp2', ftInArr[1]);
            }
            else {
                setVal(outArrUse[i], window[funcArrUse[i]](inp));
            }
        }
    }
}
