/* $('#btn').click(function () {
    
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
    function (data) {
        // console.log(data);

        var jsonObj = JSON.parse(response);
        var pierwszyUser = jsonObj[0];

        let divy = document.createElement('div');
        divy.innerHTML = `Name: ${pierwszyUser.name}, user name: ${pierwszyUser.username}`;
        document.body.insertAdjacentElement('afterbegin', divy);

        document.getElementByTagName('#btn').insertAdjacentElement('afterbegin', divy);

        console.log(jsonObj);
        
    });

});
 */

/* 
 
function pobierzDane() {

    $.ajax({
        url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
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
    
    let btn = document.querySelector('.btn');
    // console.log(btn);
    btn.addEventListener('click', pobierzDane);
    
     */




//Pobieramy referencje do przycisku (bez jQuery)

const btn = document.getElementById('btn');
const output = document.getElementById('offers');

//wywolanie akcji, przypisanie zdarzenia

function pobierzOferty() {

    //pokaż loader
    let httpReq = new XMLHttpRequest(); //tworzenie obiektów, wbudowana klasa do js - XMLHtt
    let template = ''; //zmienna do tworzenia szablonu

    //nasluchujemy zmianę stanu, jeśli status jest 200, to sprawdzimy co to jest za kontent
    httpReq.open('GET', 'http://leguralnie.pl/json/ogloszenia-json.json'); //zapytania ajaxowe do js
    httpReq.addEventListener('readystatechange', function () { //sprawdzamy w funkcji co nam serwer odpowiada - statusy! 200/204-zapytanie poszło ale serwer nic nie zwróci/ 
        if (this.readyState == 4 && this.status == 200) { //readyState - reagowanie na status - (są od 0-4, ale korzystamy z 4), cały proces zapytania przebiegł, skończył się i możemy rozpocząć dzialanie na tym
            //po obsludze jest schowaj loader
            let content = this.responseText;

            content = JSON.parse(content); //zmiana jsona na js
            // console.log(content);
            content.forEach(element => {
                template += `<div class='offer'>
                <figure>
                <img src='${element.image}'>
                </figure>
                <div class='offer_description'></div>
                <small>ID: ${element.id}</small>
                
                </div>`
            })
            if(template != '') {
                output.innerHTML = template;
            }
        }
    });
    httpReq.send()
}


btn.addEventListener('click', pobierzOferty); //pokazuje błąd bo nie mamy takiej funkcji



