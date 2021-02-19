function pinGenerate(){
    var pin = parseInt(Math.random()*10000);
    var pintLength = pin.toString().length;
    if(pintLength == 4){
        document.getElementById("displayPin").value = pin;
    }else{
        pinGenerate();
    }
}

var pinContainer = document.getElementById("pin-container");
pinContainer.addEventListener("click", function(event){
    const digit = (event.target.innerText);
    if (isNaN(digit)) {
        // 
    }else{
        const typedPin = document.getElementById("display-pin");
        typedPin.value = typedPin.value + digit;
    }

});

// function match pin number

function matchPin(){
    const typedPin = document.getElementById("display-pin").value;
    const generatePin = document.getElementById("displayPin").value;
    if (typedPin == generatePin) {
        // console.log("match");
        const typedPin = document.getElementById("display-pin").value="";
        document.getElementById("match").style.display="block";
        document.getElementById("not-match").style.display="none";
    }else{
        // console.log("not match");
        const typedPin = document.getElementById("display-pin").value="";
        document.getElementById("not-match").style.display="block";
        document.getElementById("match").style.display="none";
    }
}

