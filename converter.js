function cmToInches(){
    var cm = document.getElementById('cmTfield').value;
    
    //convert to inches
    var inches = cm * 0.393701;

    //change inches text field to var inches
    document.getElementById('inTfield').value = inches;
}

function inchesToCm(){
    var inches = document.getElementById('inTfield').value;

    //calculate cm 
    var cm = inches * 2.54;

    //change text field
    document.getElementById('cmTfield').value = cm;
}
