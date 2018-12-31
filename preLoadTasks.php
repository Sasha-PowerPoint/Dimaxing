<?php
$pdodb = new PDO('mysql:host=localhost; dbname=dataspace', 'root', '');
$pdodb -> exec("SET NAMES UTF8 ");
$array = array();
$query = $pdodb->prepare("SELECT * FROM tasks ORDER BY id ");
$query -> execute($params);
$result = $query->fetchAll();
foreach($result as $key=>$valuearr)
$array[$key]=[
    "id" => $valuearr['id'],
    "text" => $valuearr['text'],
    "employee" => $valuearr['employee'],
    "importance" => $valuearr['importance'],
    "comment" => $valuearr['comment'],
    "state" => $valuearr['cond']
];
echo json_encode($array);
?>