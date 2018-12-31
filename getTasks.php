<?
$socketserver = stream_socket_server("tcp://127.0.0.1:9998");
fclose($socketserver);
$pdodb = new PDO('mysql:host=localhost; dbname=dataspace', 'root', '');
$pdodb->exec("SET NAMES UTF8 ");
$socketserver = stream_socket_server("tcp://127.0.0.1:9998");

while ($socket = stream_socket_accept($socketserver, -1)) {
    $array = array();
    $query = $pdodb->prepare("SELECT * FROM tasks ORDER BY id ");
    $query->execute($params);
    $result = $query->fetchAll();
    foreach ($result as $key => $valuearr) {
        $array[$key] = [
            "id" => $valuearr['id'],
            "text" => $valuearr['text'],
            "employee" => $valuearr['employee'],
            "importance" => $valuearr['importance'],
            "comment" => $valuearr['comment'],
            "state" => $valuearr['cond']
        ];
    }
    stream_socket_shutdown($socketserver, STREAM_SHUT_RDWR);
    echo json_encode($array);
    fclose($socket);
}
    fclose($socketserver);
die();



?>