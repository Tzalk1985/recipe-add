var rIndex,
    table = document.getElementById("table");

//Add row
function AddRowHtml() {
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0)
    cell2 = newRow.insertCell(1)
    cell3 = newRow.insertCell(2)
    cell4 = newRow.insertCell(3)
    cell5 = newRow.insertCell(4)
    cell6 = newRow.insertCell(5)
    cell7 = newRow.insertCell(6)
    cell8 = newRow.insertCell(7)
    DMPP = document.getElementById("DMPP").value,
        H3PO4 = document.getElementById("H3PO4").value,
        DMP = document.getElementById("DMP").value,
        COLOR = document.getElementById("COLOR").value,
        YELLOW = document.getElementById("YELLOW").value,
        BLUE = document.getElementById("BLUE").value,
        Kilos = document.getElementById("Kilos").value,
        Litre = document.getElementById("Litre").value;

    cell1.innerHTML = DMPP;
    cell2.innerHTML = H3PO4;
    cell3.innerHTML = DMP;
    cell4.innerHTML = COLOR;
    cell5.innerHTML = YELLOW;
    cell6.innerHTML = BLUE;
    cell7.innerHTML = Kilos;
    cell8.innerHTML = Litre;

    selectedRowToInput();
}



selectedRowToInput();

function edit() {
    var DMPP = document.getElementById("DMPP").value,
        H3PO4 = document.getElementById("H3PO4").value,
        DMP = document.getElementById("DMP").value,
        COLOR = document.getElementById("COLOR").value,
        YELLOW = document.getElementById("YELLOW").value,
        BLUE = document.getElementById("BLUE").value,
        Kilos = document.getElementById("Kilos").value,
        Litre = document.getElementById("Litre").value;

    table.rows[rIndex].cells[0].innerHTML = DMPP;
    table.rows[rIndex].cells[1].innerHTML = H3PO4;
    table.rows[rIndex].cells[2].innerHTML = DMP;
    table.rows[rIndex].cells[3].innerHTML = COLOR;
    table.rows[rIndex].cells[4].innerHTML = YELLOW;
    table.rows[rIndex].cells[5].innerHTML = BLUE;
    table.rows[rIndex].cells[6].innerHTML = Kilos;
    table.rows[rIndex].cells[7].innerHTML = Litre;

}

//delete row
function deleteRow() {
    table.deleteRow(rIndex);
    document.getElementById("DMPP").value = "";
    document.getElementById("H3PO4").value = "";
    document.getElementById("DMP").value = "";
    document.getElementById("COLOR").value = "";
    document.getElementById("YELLOW").value = "";
    document.getElementById("BLUE").value = "";
    document.getElementById("Kilos").value = "";
    document.getElementById("Litre").value = "";
}        




