<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, Accept, X-Requested-With, Content-Type");
var_dump($_POST);
if (isset($_POST['message'])) {
    $dbh = new PDO('mysql:dbname=twitter;host=127.0.0.1', 'root', '');
    $sth = $dbh->prepare("INSERT INTO tw (id, message, id_user) VALUES (null, :message, :id_user)");

    $sth->execute(array(
        'message' => $_POST['message'],
        'id_user'   => $_POST['id_user']
    ));

    header('Content-type: application/json');

    $sth = $dbh->prepare("SELECT * FROM tw");
    $sth->execute();
    echo json_encode($sth->fetchAll());
} else {
    echo json_encode(array(
        'erreur' => 'Il manque des paramètres.'
    ));
}