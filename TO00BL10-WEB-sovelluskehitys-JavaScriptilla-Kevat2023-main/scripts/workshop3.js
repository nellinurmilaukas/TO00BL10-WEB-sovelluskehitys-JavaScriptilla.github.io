var x = document.getElementById("clickMe");
x.addEventListener("click", tulosta);
function tulosta() {
   alert("You clicked me!")
}

function tokaNappi() {
    var taulukko = `
            <h2>HTML Table</h2>

                <table>
                <table border="2">
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>Tauno</td>
                    <td>Muurari</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Maarit</td>
                    <td>Koodari</td>
                    <td>1200</td>
                </tr>
                <tr>
                    <td>Miisa</td>
                    <td>Sähkäri</td>
                    <td>1050</td>
                </tr>
                <tr>
                    <td>Eelis</td>
                    <td>Futari</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>Noora</td>
                    <td>Biologi</td>
                    <td>1800</td>
                </tr>
                <tr>
                    <td>Julia</td>
                    <td>Somettaja</td>
                    <td>10000</td>
                </tr>
                </table>
            `
    return taulukko;
    //    document.write(taulukko);
}

var x = document.getElementById("showTable");
x.addEventListener("click", tulostus);
function tulostus() {
    var persons = ["Nyssa P. Skinner", "593-4241 Lacus, St.", "Cape Verde",
        "Camilla F. Strickland", "391-2150 Ac Rd.", "Andorra",
        "Reagan U. Andrews", "P.O. Box 472, 2271 Mauris Ave", "Faroe Islands",
        "Kelsey D. Clark", "P.O. Box 866, 7793 Aliquet Ave", "Bulgaria"
    ];

    document.write('<table border="1"><tr>');

    for (var i = 0; i < persons.length; i++) {
        // Change the line after three data items
        if (i % 3 == 0) {
            document.write("</tr><tr>");
        }
        // output the data
        document.write("<td>" + persons[i] + "</td>");

    } // end for
    document.write("</table>");
}
var x = document.getElementById("geoLocation");
x.addEventListener("click", näytä);
function näytä() {
    var d = new Date();
    console.log(d);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var tunti = d.getHours();
    var mins = d.getMinutes();
    var current = "Painoit viimeistä nappia klo " + tunti + "." + mins + " päivänä " + day + "/" + month + "/" + year;
    alert(current);
}