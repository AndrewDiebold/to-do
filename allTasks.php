<?php

    header('Content-type: application/xml');

    $userName = '';
    $password = '';
    $dbName = '';
    $server = '';

    $db = new mysqli($server, $userName, $password, $dbName);

    $sql = "select * from tasks";

    $stmt = $db->prepare($sql);

    $stmt->bind_result($id, $desc, $complete, $created);

    $stmt->execute();

    $tasks = "<tasks>";
    while($stmt->fetch()) {
        $tasks .= "<task>";
            $tasks .="<id>$id</id>";
            $tasks .="<description>$desc</description>";
            $tasks .="<complete>$complete</complete>";
            $tasks .="<created>$created</created>";
        $tasks .= "</task>";
    }
    $tasks .="</tasks>";



    echo $tasks;
?>
