<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if (isset($_POST['email']) && isset($_POST['pwd'])) {
    $dbh = new PDO('mysql:dbname=twitter;host=127.0.0.1', 'root', '');

    $sth = $dbh->prepare("SELECT * FROM user WHERE email = :email AND pwd = :pwd");

    $sth->execute(array(
        'email' => $_POST['email'],
        'pwd' => $_POST['pwd']
    ));

    header('Content-type: application/json');

    $user = $sth->fetch(PDO::FETCH_ASSOC);

    // var_dump($user);

    if ($user) {
        echo json_encode($user);
    } else {
        echo json_encode(array(
            'erreur' => 'Utilisateur non trouvé.'
        ));
    }
} else {
    echo json_encode(array(
        'erreur' => 'Il manque des paramètres.'
    ));
}