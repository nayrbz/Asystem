App.info({
  id: 'com.meteor.arq',
  name: 'arqQR',
  description: 'Automatizacion de asitencia con QR UIP ',
  author: 'maryon torres',
  email: 'maryontorres@gmail.com',
  website: 'http://github.com/maryito',
  version: "0.5.0"
});

App.appendToConfig(`
  <universal-links>
    <host name="138.197.19.142:80" />
  </universal-links>
`);
