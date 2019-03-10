/* 'use strict';



// definicja funkcji ajax
function ajax( ajaxOptions ) {
    
    
    // parametry połączenia i jego typu // zabezbieczenie, loklna zmienna, do kótej bedziemy sie pozniej odoływać
    //
    var options = {
        type: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function () {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions.dataType || "text"
    };
    
    // funkcja sprawdzająca czy połączenie się udało?
    function httpSuccess( httpRequest ) {
        try {
            return (httpRequest.status >= 200 && httpRequest.status < 300 ||
             httpRequest.status == 304 || 
             navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined");    
        } catch (e) {
            return false;
        }
    }
    
    // utworzenie obiektu
    var httpReq = new XMLHttpRequest();
    
    // otwarcie polaczenia
    httpReq.open(options.type, options.url, true);
        
    // jesli stan dokumentu zostal zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    httpReq.onreadystatechange = function() {
        
        // jeśli 4: dane zwrócone i gotowe do użycia
        if ( httpReq.readyState == 4 ) {
            
            // sprawdź status płączenia
            if ( httpSuccess( httpReq ) ) {
                
                // jesli dane w formacie XML to zworc obiekt returnXML, w przeciwnym wypadku responseText (JSON to tekst)
                var returnData = (options.dataType=="xml")? httpReq.responseXML : httpReq.responseText;
                
                // jeśli wszystko OK
                options.onSuccess( returnData );
//                console.log(returnData);
            
                // zeruj obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                httpReq = null;
                
            } else {
                
                // w przypadku błędu
                options.onError( httpReq.statusText );
            }
            
        }
    
    }
    
    httpReq.send();
}
 */

function pobierzDane() { //lub function const pobierzDane = () => {

/* ajax({ //ajax to obiekt
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    onError: function (msg) {
        console.log(msg);
    },
    onSuccess: function (response) { //response łapie tak jak event

        // console.log("połączenie działa i dane są pobierane :)");

        var jsonObj = JSON.parse(response);
        var pierwszyUser = jsonObj[0];

        //dodanie elementów na stronę
        let paragraf = document.createElement('p');
        paragraf.innerHTML = `Name: ${pierwszyUser.name}, user name: ${pierwszyUser.username}`;
    
        // document.body.insertAdjacentElement('afterbegin', paragraf); //teraz dodane elementy są na samej górze

        document.body.appendChild(paragraf)

        //wstawianie w konkretne miejsce
        document.getElementsByTagName('script')[0].insertAdjacentElement('beforebegin', paragraf);
    }
}); */

//skrócona wersja ajax
/* fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
    //tu działamy na danych otrzymanych z serwera

        console.log(data)

    })
    .catch(error => console.log(error)); */

    $.ajax({
        url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        dataType: 'json',
        success: function (resultJSON) {
        console.log(resultJSON);
        },
        onerror: function (msg) {
        console.log(msg);
        }
        });

}

let btn = $('.btn');
btn.click(function() {
    pobierzDane();
});

/* let btn = document.querySelector('.btn');
// console.log(btn);
btn.addEventListener('click', pobierzDane);
 */


