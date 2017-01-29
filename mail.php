<?php

if((isset($_POST['name'])&&$_POST['name']!="")
&&(isset($_POST['surname'])&&$_POST['surname']!="")
&&(isset($_POST['phone'])&&$_POST['phone']!="")
&&(isset($_POST['post'])&&$_POST['post']!="")
&&(isset($_POST['status'])&&$_POST['status']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'vitaliy030589@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
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
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Учебный центр «LONDON» <londonschool163@london.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

        echo "Заявка успешно отправлена !";
} else {
    
    echo "Возникли проблемы в ходе отправки Вашей заявки, свяжитесь с администратором по телефону +7 (927) 291-78-88!";
}