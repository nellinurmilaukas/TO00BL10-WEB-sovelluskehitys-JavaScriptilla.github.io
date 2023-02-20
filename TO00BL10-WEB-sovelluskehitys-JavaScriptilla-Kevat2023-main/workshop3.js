var x = document.getElementById("clickMe");
x.addEventListener("click", tulosta);
function tulosta() {
   var tulos = document.getElementById("clickMe");
   alert("You clicked me!")
   console.log(tulos);
}

var y = document.getElementById("showDate");
y.addEventListener("click", showDate);
function showDate(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    var current = day+"/"+month+"/"+year;
    alert(current);
}