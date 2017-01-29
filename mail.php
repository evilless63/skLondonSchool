<?php

if((isset($_POST['name'])&&$_POST['name']!="")
&&(isset($_POST['surname'])&&$_POST['surname']!="")
&&(isset($_POST['phone'])&&$_POST['phone']!="")
&&(isset($_POST['post'])&&$_POST['post']!="")
&&(isset($_POST['status'])&&$_POST['status']!="")){
        $to = 'london.beauty163@mail.ru'; 
        $message = '
                <html>
                    <head>
                        <title>Заявка с сайта londonschool163.ru</title>
                    </head>
                    <body>
                        <p>Имя: '.htmlspecialchars($_POST['name']).'</p>
                        <p>Фамилия: '.htmlspecialchars($_POST['surname']).'</p>  
                        <p>Телефон: '.htmlspecialchars($_POST['phone']).'</p>  
                        <p>Электронная почта: '.htmlspecialchars($_POST['post']).'</p>  
                        <p>Тип записи: хочет '.htmlspecialchars($_POST['status']).'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: Учебный центр «LONDON»\r\n"; 
        mail($to, $subject, $message, $headers);

        echo "Заявка успешно отправлена !";
} else {
    
    echo "Возникли проблемы в ходе отправки Вашей заявки, свяжитесь с администратором по телефону +7 (927) 291-78-88!";
}