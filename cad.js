//**********Cadastro de eventos**********
//Declaração de variaveis.
let prompt = require('prompt-sync')(); //Pacote para entrada de dados pelo Terminal
let quantidade_particip = 0;
let lista_particip = [];
let nome_particip;
//Coletando a data do sistema(data atual) e formatando.
let data = new Date();
let dia = data.getDate();
let mes = data.getMonth()+1;
let ano = data.getFullYear();
if (dia.toString().length == 1) dia = '0'+ dia;
if (mes.toString().length == 1) mes = '0'+ mes;
let data_atual = `${dia}${mes}${ano}`
//Criando a repetição para incuir 100 participantes no máximo.
console.log("");
while (quantidade_particip < 100) {
	console.log("");
	console.log("Olá! Bem vindo ao cadastro de eventos!");
	let data_evento = prompt('Por favor, insira a data do evento.');

	if (data_evento < data_atual) {
		console.log("Data inválida! Cadastro não permitido.");
	}
	else {
		let idade = prompt('Por favor, digite sua idade.');
		if (idade < 18) {
			console.log("Evento não permitido para menores de 18 anos.");
		}
		else {
			
			nome_particip = prompt("Por favor, digite seu nome.");
			lista_particip.push(nome_particip);
			console.log(lista_particip); //Imprime na tela a lista de participantes. Comentar (//) para não mostrar no terminal.
			quantidade_particip = lista_particip.length;
			console.log("");
			console.log("Obrigado por se cadastrar " + nome_particip + "!");
			console.log("Cadastro finalizado!");
			console.log("");
		}
	}
}
console.log("Vagas para o evento preenchidas!");
console.log("Não será mais possível realizar o cadastro.");
console.log("");