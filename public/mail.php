<?php
$data = json_decode(file_get_contents("php://input"));

if (isset($data->nom) && isset($data->email) && isset($data->text)) :
    $nom = $data->nom;
    $prenom = $data->prenom;
    $mail = $data->email;
    $text = $data->text;

    $to = 'q_cozic@hotmail.fr';
    $objet = 'Message venant du portfolio';

    $message = "Mr, Mme: <strong>$nom $prenom</strong> <br>
        Email: <strong>$mail</strong> <br>
        Message: $text";

    $headers = 'Content-type: text/html; charset=iso-8859-1';

    if (mail($to, $objet, $message, $headers)) {
        $result['success'] = 'Votre message a bien été envoyé.';
        $result['error'] = '';
    } else {
        $result['error'] = 'Une erreur est survenu, votre message n\'a pas été envoyé.';
        $result['success'] = '';
    }


else :
    $result['success'] = '';
    $result['error'] = 'Une erreur est survenu';
endif;


echo json_encode($result);
exit;
