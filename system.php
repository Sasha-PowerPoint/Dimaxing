<?php

$data = array(
            getenv('COMPUTERNAME'),
            getHostByName(getHostName())
);
echo json_encode($data);
?>