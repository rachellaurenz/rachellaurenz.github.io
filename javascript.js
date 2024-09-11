function Name(changedText){
    document.getElementById("Name").innerHTML = changedText;
}

var newText = prompt("What is your name?");
Name(newText);