const getData = () => {
    // console.log('test');
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
    //tu działamy na danych otrzymanych z serwera
    
        // console.log(data)
        data.forEach((element, index) => {

            let parName = document.createElement('p');
            let parID = document.createElement('p');
            let parURL = document.createElement('p');

            let divider = document.createElement('p');

            parName.innerText = `NAME: ${element.name}`; //wypełenienie elementów tekstem
            parID.innerText = `ID: ${element.id}`;
            parURL.innerText = `URL: ${element.website}`;
            divider.innerText = index + ' -------------------------------------'; //dodajemy kreskę dla czytelności

            //osadzamy do str html
            document.body.appendChild(divider);
            document.body.appendChild(parName);
            document.body.appendChild(parID);
            document.body.appendChild(parURL);


        });
    
    })
    .catch(error => console.log(error));
}

// getData();

window.onscroll = function() {
    if (window.innerHeight + window.scrollY >=(document.body.offsetHeight)) {  //innerHeigh - wysokośc przeglądarki użytkownika, połozenie scrolla w osi pionowej 
    getData();
    }
    
}

/* 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
//tu działamy na danych otrzymanych z serwera

    console.log(data)

})
.catch(error => console.log(error));
}

onscroll = () => {

    ajax({ 
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        onError: function (msg) {
            console.log(msg);
        },
        onScroll: function (response) { 
    
            // console.log("połączenie działa i dane są pobierane :)");
    
            var jsonObj = JSON.parse(response);
            var pierwszyUser = jsonObj[0];
    

            ul.innerHTML = `Name: ${pierwszyUser.name}, user name: ${pierwszyUser.username}`;
        
            // document.body.insertAdjacentElement('afterbegin', paragraf); //teraz dodane elementy są na samej górze
    
            document.body.appendChild(paragraf)
    
            //wstawianie w konkretne miejsce
            document.getElementsByTagName('script')[0].insertAdjacentElement('beforebegin', paragraf);
        }
    });
       
    }
    


let ul = document.querySelector('.klasaUl');
ul.addEventListener('scroll', onscroll);

 */