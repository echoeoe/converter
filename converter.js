function cmToIn(cm){ //in cm, out inches
    var inches = cm / 2.54;
    return inches;
}

function inToCm(inches){
    var cm = inches * 2.54;
    return cm;
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
