<?php
$pdodb = new PDO('mysql:host=localhost; dbname=dataspace', 'root', '');
$pdodb -> exec("SET NAMES UTF8 ");
$queryproducts = $pdodb->prepare("SELECT * FROM products");
$queryproducts -> execute();
$products = $queryproducts -> fetchAll();
$querymaterials = $pdodb->prepare("SELECT * FROM materials");
$querymaterials -> execute();
$materials = $querymaterials -> fetchAll();
foreach($products as $prod)
{
    
    $data['type'][$prod['name']]['related'] = explode(',', $prod['materials']);
    $data['type'][$prod['name']]['id'] = $prod['id'].'';
}
foreach($materials as $mater)
{
    $data['material'][$mater['name']]['related'] = explode(',', $mater['products']);
    $data['material'][$mater['name']]['id'] = $mater['id'].'';
}
        
    $json = json_encode($data);
    echo $json;


?>

