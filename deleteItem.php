<?php




$pdodb = new PDO('mysql:host=localhost; dbname=dataspace', 'root', '');
$pdodb->exec("SET NAMES UTF8 ");


$item = json_decode($_POST['item']);

$itemparams = ['lotidentifier' => $item[0], 'company' => $item[1]];
$querysetitem = $pdodb->prepare("CALL deleteitem(:company,:lotidentifier)");

if ($querysetitem->execute($itemparams))
{
    echo true;
}
else
{
    echo false;
}

?>


