function cmToIn(cm){
    //in cm, out inches
    var inches = cm / 2.54;
    return inches;
}

//event listener CM KEYUP
document.getElementById('cmTfield').addEventListener("keyup", fromCm);

function fromCm(){ 
    //in cm, out inches 
    var cm = document.getElementById('cmTfield').value; //in display cm
    var inches = cmToIn(cm); //method calculate
    document.getElementById('inTfield').value = inches; //out display in
}
