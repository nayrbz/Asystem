import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // code to run on server at startup
  if( Meteor.users.find().count() == 0 ){
    const id  = Accounts.createUser({
        username: "admin",
        password: "admin",
        email: 'maryontorres@gmail.com',
    })
    Roles.addUsersToRoles(id, 'admin')

    data ={
    nombre: "Cursos 1",
    codigo : 1,
    grupo : 1,
    horario : "5:45 PM a 8:00 PM",
    jornada : "noche"
}
Cursos.insert(data);
}
});

