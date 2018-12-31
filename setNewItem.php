<?php

require_once('random_compat-master/lib/random.php');
$item = array();
$item = json_decode($_POST['item']);
$pdodb = new PDO('mysql:host=localhost; dbname=dataspace', 'root', '');
$pdodb->exec("SET NAMES UTF8 ");

$company = $item->companies;
$product = $item->products;
$material = $item->materials;
$lotname = $item->items;
$lotidentifier = strip_tags(random_int(10000, 2147483648));
$compidentifier = strip_tags(random_int(10000, 2147483648));
$price = $item->values;
$contacts = $item->contacts;
$availability = $item->availability;

$itemparams = ['company' => $company, 'product' => $product, 'material' => $material,
               'lotname' => $lotname, 'lotidentifier' => $lotidentifier, 'compidentifier' => $compidentifier,
               'price' => $price, 'contacts' => $contacts, 'availability' => $availability];
$querysetitem = $pdodb->prepare("CALL setitem(:company,:product,:material,:lotname,:lotidentifier,:compidentifier,:price,:availability,:contacts)");

if ($querysetitem->execute($itemparams))
{
    echo true;
}
else
{
    echo false;
}
?>


