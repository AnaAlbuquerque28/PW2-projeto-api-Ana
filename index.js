/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');

/*TORNA O EXPRESS EXECUTAVEL DENTRO DO SCRIPT index.js ATRAVÉS DA CONSTANTE app*/ 
const app = express();

/*CRIAR UM WEBSERVER CAPAZ DE RECEBER REQUISIÇÕES VIA HTTP.
PARAMETROS DO LISTEN
1- PORTA LÓGICA(OBRIGATÓRIA);
2- CALLBACK (OPCIONAL);
*/ 
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO!');
});

/*PARA NAVEGAR NESSE PROGRAMA:
- localhost:3000;
- 127.0.0.1:3000.
*/

//SERVE DE RESPOSTA NO PROGRAMA
app.get('/', function (req,res){
    res.send('HELLO MUNDINHOOOOOOO');
});

app.get('/anabanana', function (req,res){
    res.send('RESPOSTA DA ROTA TESTE DA APLICAÇÃO');
});
//localhot:3000/anabanana 

//não esquecer de rodar depois de modificar (node ./index.js)




/** EXEMPLOS DE ROTA **/