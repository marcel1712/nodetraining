const customExpress = require('./config/customexpress');
const conexao = require('./infraestrutura/conexao')

conexao.connect( erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('conectado com sucesso')
        const app = customExpress();
        app.listen(3000, ()=> console.log('Servidor trabalhando na porta 3000'));
    }
})
