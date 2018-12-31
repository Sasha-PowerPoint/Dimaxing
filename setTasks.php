

<?
$incomedata = json_decode($_POST['task']);


$pdodb = new PDO('mysql:host=localhost; dbname=dataspace', 'root', '');
$pdodb -> exec("SET NAMES UTF8 ");
$params = ["importance" => $incomedata->importance, "text" => $incomedata->text, "cond" => 'free', "employee" => 'none', "comment" => 'none'];
$queryproducts = $pdodb->prepare("INSERT INTO tasks SET importance=:importance, employee=:employee, text=:text, cond=:cond, comment=:comment ");
$queryproducts -> execute($params);

$socket = stream_socket_client("tcp://127.0.0.1:9998");

fwrite($socket, "OK");


fclose($socket);
die();

?>