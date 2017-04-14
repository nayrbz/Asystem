import { Template } from 'meteor/templating';

import './cursos.html';
let defaultQr = 	Session.set( 'qr', { estado: false, curso: '' });

Template.cursos.onCreated( () => {
	defaultQr;
});

Template.cursos.helpers({
	ListaCursos: function(){
		return Cursos.find();
	},
	datoQr: function(){
        return Session.get('qr').curso;
    },
	VerQr: ()=> {
		return Session.get('qr').estado;
	}
})

Template.cursos.events({
	'click #semana': (event) => {
		event.preventDefault();
		let sem = $('#semana').val();

		// defaultQr;
		Session.set( 'qr', { estado: false, curso: '' });
		Meteor.setTimeout( () => {
			console.log("esperando");
			Session.set( 'qr', { estado: true, curso: "Semana #" + sem });
			console.log( " semana seleccionada: " + sem );
		},1000);

		
	}
})
