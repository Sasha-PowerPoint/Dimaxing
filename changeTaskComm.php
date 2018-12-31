<?
/*
$incomedata = $_POST['changingcomm'];
$id = $_POST['taskid'];

$pdodb = new PDO('mysql:host=localhost; dbname=dataspace', 'root', '');
$pdodb -> exec("SET NAMES UTF8 ");
$params = ["id" => $id, "comm" => $incomedata];
$queryproducts = $pdodb->prepare("UPDATE tasks SET comment=:comm WHERE id=:id");
$queryproducts -> execute($params);
$socket = stream_socket_client("tcp://127.0.0.1:8321");

fwrite($socket, "OK");
fclose($socket);
die();
*/
?>