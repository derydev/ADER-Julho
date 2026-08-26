<?php
  #Configrara o PHP

  $host = "localhost";
  $dbname = "root";
  $password = "";
  $basededados = "derycoffebd";

  $ligacao = new mysqli($host, $dbname, $password,$basededados  );

  if($ligacao->connect_error){
    die("Erro na ligação a base de Dados: ".$ligacao->connect_error);
  }

  $ligacao->set_charset("utf8");


  



?>