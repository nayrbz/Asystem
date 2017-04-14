import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Asistencia = new Mongo.Collection('asistencia');
Schemas = {};

Schemas.asistencia = new SimpleSchema({
  curso: {
    type: String,
    autoform: {
        afFieldInput: {
            firstOption: 'Seleccione el Curso',
        },
        options: () => Cursos.find({}).map((obc) => (
            { label: ""+obc.nombre + " cod: " + obc.codigo, value:' " "' + obc._id }))
    },
  },
  cedula: {
      type: String,
    },
  fecha: {
     type: Date,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker",
        dateTimePickerOptions: {
           daysOfWeekDisabled: [
          0,1,2,3,4,6
        ],
        useCurrent: false
        }
      }
    },
    },
  estado: {
      type: String,
      autoform: {
          afFieldInput: {
              options: [
                    { label: 'Asistencia', value: 'ASI' },
                    { label: 'Tardanza', value: 'TAR' },
                    { label: 'Ausencia', value: 'AUS' },
                    { label: 'Ausencia justificada', value: 'JUST' },
                ],
            },
        },
    },

});
Asistencia.attachSchema(Schemas.asistencia);
