<?php

    include_once('conexao.php');

    //consultar no banco de dados

    // Criar a Query para recuperar os registros do BD
    $query_usuarios = "SELECT id_cadastros, nome, email, cpf, telefone, endereco
                        FROM tb_cadastros                       
                        ORDER BY id_cadastros ASC";

    $result_usuarios = $conn->prepare($query_usuarios);
    $result_usuarios->execute();

    $dados="";
    while ($ron_usuario = $result_usuarios->fetch(PDO::FETCH_ASSOC)) {
        extract($ron_usuario);
        $dados .= "<tr>
                        <td>$id_cadastros</td>
                        <td>$nome</td>
                        <td>$email</td>
                        <td>$cpf</td>
                        <td>$telefone</td>
                        <td>$endereco</td>
                </tr>";        
    };

    echo $dados;