<?php

    include_once('conexao.php'); // irá adicionar o arquivo especificado na execução do script
    // abaixo criou-se as variáveis que estamos enviando pelo método post
    $nome=$_POST['nome'];
    $email=$_POST['email'];
    $cpf=$_POST['cpf'];
    $telefone=$_POST['telefone'];
    $endereco=$_POST['endereco'];
    // Em seguida é realizado o INSERT no banco de dados
    // a variável stmt é responsável por prepara a query, e o valor dos parâmetros são defindos usando o método bindParam()
    $sql = 'INSERT INTO tb_cadastros(nome,email,cpf,telefone,endereco) VALUES (:nome,:email,:cpf,:telefone,:endereco)';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nome',$nome);
    $stmt->bindParam(':email',$email);
    $stmt->bindParam(':cpf',$cpf);
    $stmt->bindParam(':telefone',$telefone);
    $stmt->bindParam(':endereco',$endereco);
    $stmt->execute(); // o método execute(), que será o responsável por de fato executar a query SQL com os parâmetros no Banco de Dados