AdminConfig = {
    name: 'Asistencia Express',
    skin: 'blue-light',
    adminEmails: ['maryontorres@gmail.com'], 
    collections:  {
        
        Cursos:{
             icon: "edit",
             omitFields: ['profesor'],
             tableColumns: [                
                {label: 'Codigo', name: 'codigo'},
                {label: 'Nombre', name: 'nombre'},
                {label: 'Grupo', name: 'grupo'},
                {label: 'Horario', name: 'horario'},
                {label: 'Jornada', name: 'jornada'},
            ]

        },       
        Asistencia: { 
             icon: "table",
             tableColumns: [
                {label: 'Curso', name: 'curso'},
                {label: 'Cedula', name: 'cedula'},
                {label: 'Fecha', name: 'fecha'},
                {label: 'Estado', name: 'estado'}
            ]
        },
        'Meteor.users': {
            label: "Usuarios",
            icon: "users",
            omitFields: ['services'],
             tableColumns: [
                {label: 'Cedula', name: 'username'},
                {label: 'Nombre', name: 'profile.nombre'},
                {label: 'Perfil', name: 'roles'},
            ]
        }
       
    }
}

// Ocultar collection users
UI.registerHelper("admin_collections", function() {
  var collections = {};
  if (typeof AdminConfig !== 'undefined' && typeof AdminConfig.collections === 'object')
    collections = AdminConfig.collections;
  // remove Meteor.users collection (see above)
  delete collections.Users;
  return _.map(collections, function(obj, key) {
    obj = _.extend(obj, { name: key });
    obj = _.defaults(obj, { label: key, icon: 'plus', color: 'blue' });
    return obj = _.extend(obj, {
      viewPath: Router.path("adminDashboard" + key + "View"),
      newPath: Router.path("adminDashboard" + key + "New")
    });
  });
});