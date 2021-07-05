const customExpress = require('./config/customexpress');
const app = customExpress();

app.listen(3000, ()=> console.log('Servidor trabalhando na porta 3000'));
