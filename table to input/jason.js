fetch("pinakasdmpp.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (pinakasdmpp) {
        console.log('pinakasdmpp.json', pinakasdmpp)

        for (var i = 0; i < pinakasdmpp.length; i++) {
            document.getElementById("table").innerHTML +=
                "<th>" + pinakasdmpp[i].DMPP + "</th>"
                + "<td>" + pinakasdmpp[i].H3PO4 + "</td>"
                + "<td>" + pinakasdmpp[i].DMP + "</td>"
                + "<td>" + pinakasdmpp[i].COLOR + "</td>"
                + "<td>" + pinakasdmpp[i].YELLOW + "</td>"
                + "<td>" + pinakasdmpp[i].BLUE + "</td>"
                + "<td>" + pinakasdmpp[i].Kilos + "</td>"
                + "<td>" + pinakasdmpp[i].Litre + "</td>"
                
        }
        document.getElementById("rows").innerHTML = Object.keys(pinakasdmpp).length +" Καταχωρημένες Συνταγές";
        selectedRowToInput();
    });
    
//select row to display in inputs
function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById("DMPP").value = this.cells[0].innerHTML;
            document.getElementById("H3PO4").value = this.cells[1].innerHTML;
            document.getElementById("DMP").value = this.cells[2].innerHTML;
            document.getElementById("COLOR").value = this.cells[3].innerHTML;
            document.getElementById("YELLOW").value = this.cells[4].innerHTML;
            document.getElementById("BLUE").value = this.cells[5].innerHTML;
            document.getElementById("Kilos").value = this.cells[6].innerHTML;
            document.getElementById("Litre").value = this.cells[7].innerHTML;
        };
    }
}

