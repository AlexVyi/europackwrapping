(function () {


    var firebase = require("firebase");

    var mainApp = firebase.initializeApp({
        apiKey: "AIzaSyCTW4a0BVgKPKvb1daZfS3ZTaUKemO7Yrk",
        authDomain: "europack-c8a70.firebaseapp.com",
        databaseURL: "https://europack-c8a70.firebaseio.com",
        projectId: "europack-c8a70",
        storageBucket: "",
        messagingSenderId: "258082913806"
    });

    var directTransport = require('nodemailer-direct-transport');
    var nodemailer = require('nodemailer');
    var options = {};
    var transporter = nodemailer.createTransport(directTransport(options))

    nodemailer = require('nodemailer');

    transporter = nodemailer.createTransport({
        service: 'epk',
        auth: {
            user: 'alexandru@epk.ro',
            pass: 'ambalaje1979//,,'
        }
    });

    var nodeToWatch = mainApp.database().ref('/Comenzi'); //firebase node to watch

    nodeToWatch.on('child_added', function (childSnapshot) { //fires once for every node in this location
        if (!childSnapshot.val().email_sent) { //check if email has already been sent

            nodeToWatch.child(childSnapshot.key).child('email_sent').set(firebase.database.ServerValue.TIMESTAMP).then(function (response) { //set email value to sent

                var data = JSON.stringify(childSnapshot.val(), null, 9); //stringify the response so we can attach it in the email

                // create template based sender function
                var sendInfo = transporter.templateSender({
                    subject: 'Node in firebase updated',
                    html: 'Hello, data for new node is: {{data}}'
                }, {
                    from: 'example.gmail.com'
                });
// use template based sender to send a message
                sendInfo({
                    to: 'exampleRecipient.email.com'
                }, {
                    data: data //data variable to insert into email
                }, function (err, info) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('Email sent');
                    }
                });
            });

        }

    });
}());