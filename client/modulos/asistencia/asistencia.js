import { Template } from 'meteor/templating';

import './asistencia.html';

Template.asistencia.helpers({
  AsistenciaHot: () => {
    return Asistencia.find()
  }
})