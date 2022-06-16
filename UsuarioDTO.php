<?php 
ini_set('display_errors', 1);
class UsuarioDTO {
    
    private $usuario = [];

    public function __construct() {
        
    }

    public function __set($indice, $valor) {
        $this->usuario[$indice] = $valor;
    }

    public function &__get($indice) {
        return $this->usuario[$indice];
    }

    public function getJSONEncode() {
        return json_encode(get_object_vars($this));
    }
}
?>