import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './main.html';
// import '../asistencia/asistencia.html';

if (Meteor.isCordova) {

    Template.cursoQr.events({
        'click button': function() {

            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    if (result.text != '' && result.text) {
                        Asistencia.insert({ cedula: '' + result.text, curso: 'Arquitectura de computadora', fecha: new Date() })
                        alert("Escaneo Exitoso \n" +
                            "Resultado: " + result.text + "\n");
                    } else {
                        alert("Error al escanear")
                    }

                },
                function(error) {
                    alert("Scanning failed: " + error);
                }
            );

        }

    });

}