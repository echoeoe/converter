const shortDistances = { //short distance object
    cmInp: {
        function: cmToIn,
        output: "inchInp"
    },
    inchInp: {
        function: inToCm,
        output: "cmInp"
    }
}

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
    const ft = Math.floor(feet);
    const inch = (feet - ft) * 12;
    return [ft, inch];
}

function meterToFtIn(meter){ 
    //convert to cm, then inches, then ft in 
    const cm = meter * 100;
    const inch = cm / 2.54;
    const ftOnly = Math.floor(inch / 12);
    const inchOnly = inch - (ftOnly * 12);
    return [ftOnly, inchOnly];
}

function toNumber(s){ //used in conversion functions
    s = String(s);
    s = s.replaceAll(" ", ""); //remove blanks
    if (s == ''){
        return 0;
    }

    //handle fraction
    if (s.includes("/")){
        const arr = s.split("/");
        const result = arr[0]/arr[1];
        return result;
    }

    if (typeof(s) == 'string'){ //convert
        return parseFloat(s);
    }

}

function ftInToMeter(ftIn){
    let ft = ftIn[0];
    let inch = ftIn[1];

    ft = toNumber(ft);
    inch = toNumber(inch);
    //convert to inches only, then cm, then m
    const inchOnly = (ft * 12) + inch;
    const cm = inchOnly * 2.54;
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
    const feetOnly = toNumber(ftIn[0]);
    const inchOnly = toNumber(ftIn[1]);
    const feet = feetOnly + (inchOnly / 12);
    return feet;
}

function kmToMi(km){ // 1 mi = 63360 inches
    //km => cm => inches
    const cm = km * 100000;
    const inches = cm/2.54;
    const mi = inches / 63360;
    return mi;
}

function miToKm(mi){
    const inches = mi * 63360;
    const cm = inches * 2.54;
    const km = cm / 100000;
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
const inpArr = ['cmInp', 'inchInp', 'meterInp', 'feetInp', 'feetInp2', 'inchInp2', 'kmInp', 'miInp', 'tbspInp', 'cupInp', 'tspInp']; //1d

//event listeners
for (let i = 0; i<inpArr.length; i++){
    document.getElementById(inpArr[i]).addEventListener("change", fromAny);    
}

for (let i = 0; i<inpArr.length; i++){
    document.getElementById(inpArr[i]).addEventListener("keyup", fromAny);    
}

function fromAny(){ 

// cm & inches 
for (let inputID in shortDistances){
    if (inputID == this.id){
        //set output to function return value
        setVal(shortDistances[inputID].output, shortDistances[inputID].function(getVal(this.id)));
    }
}
    
 }

// module.exports = {cmToIn, inToCm, mToFt, feetToMeter, feetToFtIn, meterToFtIn, ftInToMeter, toNumber, ftInToFeet, kmToMi, 
//     miToKm, tbspToCup, tbspToTsp, cupToTbsp, cupToTsp, tspToTbsp, tspToCup}; 
