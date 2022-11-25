<?php

    try {
        $conn = new PDO('mysql:host=localhost;dbname=cadastroDB','root','');
    } catch (PDOException $e) {
        $e->getMessage();
    }

    // PDO faz conecção entre PHP e a database server.
