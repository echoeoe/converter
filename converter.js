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
    var ft = m * 3.280839895;
    return ft;
}

function feetToMeter(feet){
    var meter = feet * 0.3048006096;
    return meter;
}

//event listener CM KEYUP
document.getElementById('cmInp').addEventListener("keyup", fromCm);

function fromCm(){ //cm input => display change 
    var cm = document.getElementById('cmInp').value; //in display cm
    var inches = cmToIn(cm); //method calculate
    document.getElementById('inchInp').value = inches; //out display in
}

//event listener INCH KEYUP
document.getElementById('inchInp').addEventListener("keyup", fromIn);

function fromIn(){ //inches input => display change
    var inches = document.getElementById('inchInp').value;
    var cm = inToCm(inches); 
    document.getElementById('cmInp').value = cm; 
}

//event listener METER KEYUP
document.getElementById('meterInp').addEventListener("keyup", fromM);

function fromM(){
    var m = document.getElementById('meterInp').value;
    var ft = mToFt(m);
    document.getElementById('feetInp').value = ft;
}

//event listener FEET KEYUP
document.getElementById('feetInp').addEventListener("keyup", fromFeet);

function fromFeet(){
    var ft = document.getElementById('feetInp').value;
    var m = feetToMeter(ft);
    document.getElementById('meterInp').value = m;
}
