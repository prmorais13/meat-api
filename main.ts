import { Server } from './server/server';
import { usersRouter } from './users/users.router';

const server = new Server()
server.bootstrap([usersRouter]).then(server => {
  console.log('Servidor ouvindo em ', server.application.address())
}).catch(error => {
  console.log('O sevidor falhou ao iniciar.')
  console.error(error)
  process.exit(1)
})