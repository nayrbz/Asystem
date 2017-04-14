
Schema = {};
Cursos = new Mongo.Collection('cursos') 

Schema.cursos = new SimpleSchema({
    nombre:{
        label: "Nombre del curso",
        type: String
    },
    codigo:{
        type: String,
        unique: true  
    },
    profesor:{
        type: String,
        autoform:{
            afFieldInput:{
                type: "hidden",
                // firstOption: 'Seleccione el profesor'
            },
            // options: () => {
            //     return Usuarios.find({ perfil: 'profesor' }).map((obc) => ({ label: ""+obc.nombre, value: ""+obc._id }));
            // },
            afFormGroup: {
                label: false
            }
        },
        defaultValue: this.userId,
        optional: true
       
    },
    grupo:{
        type: String
    },
    horario:{
        type: String,
        allowedValues: [
            "5:45 PM a 8:00 PM",
             "8:00 PM a 10:20 PM",
             "6:30 PM a 8:00 PM"
        ],
        autoform: {
            afFieldInput: {
                firstOption: '(Seleccione la hora)'
            }
        }
    },
    jornada:{
        type: String,
        allowedValues: [
            "Mañana",
            "Tarde",
            "Noche"
        ],
        autoform: {
            afFieldInput: {
                firstOption: '(Seleccione la jornada)',
            }
        }
    }

 
});

Cursos.attachSchema(Schema.cursos);


// "horario.h_inicio":{
//         label:" Hora de inicio",
//         type: String
//     },
//     "horario.h_fin":{
//         label:" Hora de finalizacion",
//         type: String
//     },
//     "horario.jornada":{
//         type: String,
//         autoform: {
//             afFieldInput: {
//                 firstOption: '(Seleccione la jornada)',
//                 options: [
//                     {label: "Mañana", value: 'manana'},
//                     {label: "Tarde", value: 'tarde'},
//                     {label: "Noche", value: 'noche'}
//                 ]
//             }
//         }
//     }