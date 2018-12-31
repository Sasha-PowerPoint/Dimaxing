<?php

/*
$data = array(
    'base' => array(
        'Silpo' =>
            array(
                'Alluminium' =>
                    array(
                        'Krug' =>
                            array(
                                0 => 'K-25',
                                1 => 'K-7',
                                2 => 'K-89',
                            ),
                    ),
                'Cuprum' =>
                    array(
                        'Krug' =>
                            array(
                                0 => 'A23',
                                1 => 'A25',
                            ),
                    ),
                'Bronze' =>
                    array(
                        'Truba' =>
                            array(
                                0 => 'T-25',
                                1 => 'T-7',
                                2 => 'T-89',
                                3 => 'T-899',
                                4 => 'T-8',
                            ),
                    ),
            ),
    ),
    'details' => array(
        //'Silpo' => array(
            'T-8' => array(
                '600грн',
                'vladnovod7@gmail.com +380671552496',
                '12388695'
            ),
            'T-899' => array(
                '600грн',
                'vladnovod7@gmail.com +380671552496',
                '12388695'
            ),
            'T-89' => array(
                '600грн',
                'vladnovod7@gmail.com +380671552496',
                '12388695'
            ),
            'T-7' => array(
                '600грн',
                'vladnovod7@gmail.com +380671552496',
                '12388695'
            ),
            'T-25' => array(
                '600грн',
                'vladnovod7@gmail.com +380671552496',
                '12388695'
            ),
            'K-25' => array(
                '600грн',
                'vladnovod7@gmail.com +380671552496',
                '12388695'
            ),
            'K-7' => array(
                '800грн',
                'spotifybecause@gmail.com +380671552496',
                '12445695'
            ),
            'K-89' => array(
                '350грн',
                'nazar.ua@gmail.com +380671552496',
                '12345785'
            ),
            'A23' => array(
                '685грн',
                'bublik009@gmail.com +380671552496',
                '12425695'
            ),
            'A25' => array(
                '380грн',
                'edik-pedik@gmail.com +380671552496',
                '12345965'
            ),
            'A35' => array(
                '100грн',
                'nazar.ua@gmail.com +380671552496',
                '43345695'
            ),


       // ),
    ),
);


*/

$pdodb = new PDO('mysql:host=localhost; dbname=dataspace', 'root', '');
$pdodb -> exec("SET NAMES UTF8 ");
$listprototype = json_decode($_POST['list']);
$materials = '';
$products = '';
$companies = '';

if(!$listprototype->companies || count($listprototype->companies) == 0)
{
    $querycompanies = $pdodb->prepare("SELECT name FROM companies");
    $querycompanies->execute();
    $rowcompanies = $querycompanies->fetchAll();
    foreach($rowcompanies as $compname)
    {
        $companies = $companies.$compname['name']."^#^";
    }
}
else
{
    for($counter = 0; $counter < count($listprototype->companies); $counter++)
    {
        $companies = $companies.$listprototype->companies[$counter]."^#^";
    }
}
if(!$listprototype->products || count($listprototype->products) == 0)
{
    $products = '0';
}
else
{
    for($counter = 0; $counter < count($listprototype->products); $counter++)
    {
        $products = $products.$listprototype->products[$counter]."^#^";
    }
}
if(!$listprototype->materials || count($listprototype->materials) == 0)
{
    $materials = '0';
}
else
{
    for($counter = 0; $counter < count($listprototype->materials); $counter++)
    {
        $materials = $materials.$listprototype->materials[$counter]."^#^";
    }
}
$listparams = ['companies' => $companies, 'materials' => $materials, 'products' => $products];
$querylist = $pdodb->prepare("CALL getlist(:companies,:products,:materials)");
$querylist->execute($listparams);
$row = $querylist->fetchAll();
$data = array();
foreach ($row as $value) {
    $data["base"]["" . $value["company"]]["" . $value["material"]]["" . $value["product"]][] = $value["lotname"];
    $data["details"]["" . $value["company"]]["" . $value["lotname"]][] = "" . $value["price"];
    $data["details"]["" . $value["company"]]["" . $value["lotname"]][] = "" . $value["contacts"];
    $data["details"]["" . $value["company"]]["" . $value["lotname"]][] = "" . $value["lotidentifier"];
    $data["details"]["" . $value["company"]]["" . $value["lotname"]][] = "" . $value["availability"];
    $data["details"]["" . $value["company"]]["" . $value["lotname"]][] = "" . $value["company"];
}


echo json_encode($data);

?>