
Schema = {};
// Usuarios = new Mongo.Collection('usuarios'); 

// Schema.usarios = new SimpleSchema({
//     // _id: {
//     //     type: String,
//     //     regEx: SimpleSchema.RegEx.Id
//     //  },
//     // id:{
//     //     type: String
//     // },
//     nombre:{
//         type: String
//     },
//     cedula:{
//         type: String
//     },
//     perfil:{
//         type: String,
//         // autoform: {
//         //     afFieldInput: {
//         //         firstOption: '(Seleccione el perfil)',
//         //         options: [
//         //             {label: "Estudiante", value: 'estudiante'},
//         //             {label: "Profesor", value: 'profesor'}
//         //         ]
//         //     }
//         // }
//     },
//     cursos:{
//         type: [String],
//         optional: true
//     } 
// });

// Usuarios.attachSchema(Schema.usarios);

UserProfile = new Mongo.Collection("userprofile");
Schema.UserProfile = new SimpleSchema({
    nombre: {
        type: String,
        optional: true
    },
    sexo: {
        type: String,
        allowedValues: ['Masculino', 'Femenino'],
        optional: true
    }
});
UserProfile.attachSchema(Schema.UserProfile);

let ocultaValor = {
    afFieldInput:{
        type: "hidden",
    },
    afFormGroup: {
        label: false,
    },
};

Schema.User = new SimpleSchema({
    username: {
        label: "Cedula",
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    password: {
        label: "Clave",
        type: String,
        min: 4,
        max: 10,
        // autoform: {
        //     afFieldInput:{
        //         type: "hidden",
        //     },
        //     afFormGroup: {
        //         label: false,
        //     },
        // }
    },
    createdAt: {
        type: Date,
        defaultValue: new Date(),
        autoform: {
            afFieldInput:{
                type: "hidden",
            },
            afFormGroup: {
                label: false,
            },
        },
    },
    profile: {
        label: "Informacion",
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true,
        autoform: {
            afFieldInput:{
                type: "hidden",
            },
            afFormGroup: {
                label: false,
            },
        },
    },
    roles: {
        type: Object,
        optional: true,
        blackbox: true,
        autoform: {
            afFieldInput:{
                type: "hidden",
            },
            afFormGroup: {
                label: false,
            },
        },
    },
    roles: {
        type: [String],
        optional: true
    }
});
Meteor.users.attachSchema(Schema.User);