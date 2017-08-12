/**
 * Created by alexandrupetru on 17/07/2017.
 */

var epk;

$(document).ready(function () {

    epk = firebase.database().ref('/Comenzi');

});

function sendForm() {
    "use strict";
    var resetForm = document.getElementById('firebaseForm');
    var username = document.getElementById('user-name').value;
    var email = document.getElementById('user-email').value;
    var message = document.getElementById('user-message').value;

    if (email && username && message !== "") {
        epk.push({'name':document.getElementsByName('name')[0].value,
            'email':document.getElementsByName('email')[0].value,
            'message':document.getElementsByName('message')[0].value,
            'website':document.getElementsByName('website')[0].value});
        resetForm.reset();
        window.location.href = 'thankyou.html';
    } else {
        document.getElementsByName('email')[0].placeholder = 'Va rugam sa completati toate campurile';
        document.getElementsByName('name')[0].placeholder = 'Va rugam sa completati toate campurile';
        document.getElementsByName('message')[0].placeholder = 'Va rugam sa completati toate campurile';
    }

}


function findUs() {
    var locate = document.getElementById('locatia');
    if (locate) {
        window.open('http://maps.google.com/?q=Aleea Atelierelor 1, Deva, Hunedoara County', '_blank');
    }
}

/*function removeOverlay() {
    setTimeout(function() {
        var html = document.body;
        var ovlay = document.getElementById('overlay-wrapper');
        html.removeChild(ovlay);
     },7000);
}*/


