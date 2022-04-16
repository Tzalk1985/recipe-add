<?php

$DMPP = $_POST['DMPP'];
$H3PO4 = $_POST['H3PO4'];
$DMP = $_POST['DMP'];
$COLOR = $_POST['COLOR'];
$YELLOW = $_POST['YELLOW'];
$BLUE = $_POST['BLUE'];
$Kilos = $_POST['Kilos'];
$Litre = $_POST['Litre'];


$host="localhost";
$dbusername="root";
$dbpassword="";
$dbname="test";

//DATABASE CONNECTION
$conn = new mysqli($host,$dbusername,$dbpassword,$dbname);
if($conn->connect_error){
	echo "$conn->connect_error";
	die("Connection failed : ".$conn->connect_error);
}else{
	$stmt = $conn->prepare("insert into pinakasdmpp(DMPP, H3PO4, DMP, COLOR, YELLOW, BLUE, Kilos, Litre)
	     values(?,?,?,?,?,?,?,?)");
	$stmt->bind_param("ssssssss",$DMPP, $H3PO4, $DMP, $COLOR, $YELLOW, $BLUE, $Kilos, $Litre);
	$execval=$stmt->execute();
	echo $execval;
	echo "Επιτυχής Καταχώριση Συνταγής. Επιστροφή στην αρχική σελιδα σε 3 δευτερόλεπτα";
	$stmt->close();
	$conn->close();
    header("refresh:3;url=pinakas.php");
}


?>
