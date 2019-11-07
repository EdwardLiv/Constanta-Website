var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var text = JSON.parse(this.responseText);
    document.getElementById("istorie1-text").innerHTML = text.istorie1;
    document.getElementById("ovidiu1-text").innerHTML = text.ovidiu1;
    document.getElementById("ovidiu2-text").innerHTML = text.ovidiu2;
    for (i=0; i<text.ovidiu3.length; i++) {
      document.getElementById("ovidiu3-text").innerHTML += "<p>"+text.ovidiu3[i]+"</p>";
    }
    for (i=0; i<text.ovidiu4.length; i++) {
      document.getElementById("ovidiu4-text").innerHTML += "<p>"+text.ovidiu4[i]+"</p>";
    }
  }
};
xmlhttp.open("GET", "javascript/text.json", true);
xmlhttp.send();


var clickCounter = 0;
document.getElementById("btn").addEventListener("click", function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', "javascript/text.json")
    xmlhttp.onload = function() {
        var text = JSON.parse(xmlhttp.responseText)
        var htmlString = "<li>"+text.istorie2[clickCounter-1];
        document.getElementById("istorie2-text").insertAdjacentHTML('beforeend', htmlString)
    }
    xmlhttp.send();
    clickCounter++;
    if (clickCounter>4) {
      document.getElementById("btn").classList.add("hide-button");
    }
});
