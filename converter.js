function cmToIn(cm){ //in cm, out inches
    var inches = cm / 2.54;
    return inches;
}

function inToCm(inches){
    var cm = inches * 2.54;
    return cm;
}

//event listener CM KEYUP
document.getElementById('cmTfield').addEventListener("keyup", fromCm);

function fromCm(){ //cm input => display change 
    var cm = document.getElementById('cmTfield').value; //in display cm
    var inches = cmToIn(cm); //method calculate
    document.getElementById('inTfield').value = inches; //out display in
}

//event listener IN KEYUP
document.getElementById('inTfield').addEventListener("keyup", fromIn);

function fromIn(){ //inches input => display change
    var inches = document.getElementById('inTfield').value;
    var cm = inToCm(inches); 
    document.getElementById('cmTfield').value = cm; 
}

exports = {cmToIn, inToCm};
