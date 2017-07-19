/**
 * Created by alexandrupetru on 17/07/2017.
 */

var epk;
$(document).ready(function () {

epk = firebase.database().ref('/Comenzi')

});

function sendForm() {
    var myForm = $('#firebaseForm').serializeArray();
    var resetForm = document.getElementById('firebaseForm')
    var username = document.getElementById('user-name').value;
    var email = document.getElementById('user-email').value;
    var message = document.getElementById('user-message').value;

    if(email && username && message !== ""){
        epk.push(myForm);
        resetForm.reset();
        window.location.href = 'thankyou.html'
    } else {
        document.getElementsByName('email')[0].placeholder='Va rugam sa completati toate campurile';
        document.getElementsByName('name')[0].placeholder='Va rugam sa completati toate campurile';
        document.getElementsByName('message')[0].placeholder='Va rugam sa completati toate campurile'
    }

}


function findUs(){
    var locate = document.getElementById('locatia');
    if(locate){
        window.location.href = "http://maps.google.com/?q=Aleea Atelierelor 1, Deva, Hunedoara County"
    }
}


