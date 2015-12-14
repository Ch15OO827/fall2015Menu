<?php
$dbHost = 'localhost';
$dbUsername = 'n02619263';
$dbPassword = 'Killmaster08';
$dbName = 'c9';
//connect with the database
$db = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);
//get search term
$searchTerm = $_GET['term'];
//get matched data from skills table
$query = $db->query("SELECT * FROM 2015Fall_Persons WHERE Name LIKE '%".$searchTerm."%' ORDER BY Name ASC");
while ($row = $query->fetch_assoc()) {
    $data[] = $row['Name'];
}
//return json data
echo json_encode($data);
?>