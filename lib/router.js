Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});

Router.map(function() {
    this.route('home', { path: '/' });
    this.route('usuarios', { path: '/usuarios' });
    this.route('cursos', { path: '/cursos' });
    this.route('asistencia', { path: '/asistencia' });
});