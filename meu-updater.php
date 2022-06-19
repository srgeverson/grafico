<?php
date_default_timezone_set("America/Fortaleza");
header("Cache-Control: no-store");
header("Content-Type: text/event-stream");
require_once 'UsuarioDTO.php';

$counter = rand(1, 10);
while (true) {
    try {
      $curDate = date(DATE_ISO8601);
        $counter--;
    
        if (!$counter) {
            $counter = rand(1, 10);
            $usuario = new UsuarioDTO();
            $usuario->nome = 'Geverson';
            $usuario->sobreNome = 'Souza';
            $usuario->data = $curDate;
            //[12, 19, 3, 5, 2, 3]
            $usuario->dados = array(
                ["label" => 'Milena', "value" => rand(1, 100)], 
                ["label" => 'Márcia',"value" => rand(1, 100)] ,
                ["label" => 'Natália',"value" => rand(1, 100)], 
                ["label" => 'Geverson',"value" => rand(1, 100)] ,
                ["label" => 'Nathan',"value" => rand(1, 100)] ,
                ["label" => 'Manuel',"value" => rand(1, 100)]
            );
            $usuario->teste = array(
                ["label" => 'Milena', "value" => array([rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100),rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100)])],
                ["label" => 'Márcia', "value" => array([rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100),rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100)])],
                ["label" => 'Natália', "value" => array([rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100),rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100)])], 
                ["label" => 'Geverson', "value" => array([rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100),rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100)])],
                ["label" => 'Nathan', "value" => array([rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100),rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100)])],
                ["label" => 'Manuel', "value" => array([rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100),rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100), rand(1, 100)])]
            );
            
            echo 'data: ' . $usuario->getJSONEncode() . "\n\n";
        }
    
        if (ob_get_length()) ob_end_clean();
        
        flush();
    
        if(connection_aborted()) break;
    
        sleep(1);
    } catch (Exception $e) {
        echo 'data: {"erro": "' . $e->getMessage() . '"}\n\n';
    }
}

?>