'use strict';

class GameData  {

    timerId = 0;

    imgRefs = [
        'https://openclipart.org/download/282127/Die1.svg',
        'https://openclipart.org/download/282128/Die2.svg',
        'https://openclipart.org/download/282129/Die3.svg',
        'https://openclipart.org/download/282130/Die4.svg',
        'https://openclipart.org/download/282131/Die5.svg',
        'https://openclipart.org/download/282132/Die6.svg'
    ];

    createImgElements() {
        console.log('createImgElements');
        let mainRef = document.querySelector('main');

        for (let i = 0 ; i < 6; i++){
            let slump = Math.floor(Math.random() * 6);
            let bild = document.createElement('img');
            bild.setAttribute('src', oGameDataObject.imgRefs[slump] );
            bild.setAttribute('alt', 'tärningNr' + (slump));
            bild.style.width = '10%';
            bild.style.height = '10%';
            mainRef.appendChild(bild);
        }

      



    }

    removeImgElements() {
        console.log('removeImg');
        let main = document.querySelector('main');
        if (document.querySelector('img') ) {
            console.log('finns')
            while(main.firstChild){
                main.firstChild.remove();
            }

        } else console.log('ingen bild');
    }

};

let oGameDataObject = new GameData();

window.addEventListener('load', function() {
    console.log( Date.now(), 'load' );
});

window.addEventListener('DOMContentLoaded', function() {
    console.log( Date.now(), 'DOMContentLoaded' );

    alert('Tryck b||B för att börja och e||E för att avsluta!');
    document.addEventListener('keydown', function(e){

       
        if (e.key === 'b' || e.key ==='B'){
            if (oGameDataObject.timerId === 0 || oGameDataObject.timerId == null){
                oGameDataObject.timerId = setInterval(function(){
                    oGameDataObject.removeImgElements();
                    oGameDataObject.createImgElements();
                    console.log(oGameDataObject.timerId);
                }, 2000);
            } else{
                console.log('timer redan startad');
            }
        }

        if (e.key ==='e' || e.key ==='E'){
            if (oGameDataObject.timerId !== 0){
            oGameDataObject.timerId = clearInterval(oGameDataObject.timerId);
            console.log(oGameDataObject.timerId);
            oGameDataObject.removeImgElements();
            } else {
                console.log('Ingen timer startad');
            }
        }
        

    });
        /*
            1. Lägg till en lyssnar för tangentbordet 
            2. Kontrollera om bokstaven b resp. B är tryckt
            3. Om så är fallet anropa metoderna removeImgElements() resp. createImgElements()
            4. Skriv koden för metoden removeImgElements() i vilken du skall ta bort alla img-element som finns i main img.
            5. Skriv koden för metoden createImgElements() i vilken du skall skapa sex img-element.
            5.1 Img-elementen skall skapas i en iteration och dess src-attribut skall bestå av värdet i ngn av planserna i vektorn imgRefs.
            5.2 slumpa ett tal mellan 1-6 (floor() och random())
            5.3 Skapa ett img-element
            5.4 Lägg till src- och alt-attributen till det nya img-elementet.
            5.5 ändra css-egenskaperna width och height till 10% för det nya img.elementet.
            5.6 lägg det nya img-elementet sist i main-elementet.
            
            Om tid finnes...
            6. Ändra din lösning så att nya täningar visas med ett intervall på två sekunder.
            7. Ändra så att bara en timer kan vara igång åt gången.
            8. Lägg till kod som gör att timern avslutas om användaren trycker på e eller E på tangentbordet.
        */
});