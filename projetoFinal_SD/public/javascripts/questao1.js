var express = require('express');
var router = express.Router();

router.post('/', (req, res)=>{
	var nome = req.body.nome
	var cargo = req.body.cargo
	var salario = req.body.salario
	salario = parseFloat(salario)

	switch (cargo){
		case "operador": //recebe reajuste de 20%
			salario = salario + (salario * 0.20)
			break

		case "programador": //recebe reajuste de 18%
			salario = salario + (salario * 0.18)
			break
	}

	res.send('<h1>Seja bem vindo(a): ' +nome +'! <br></h1> <h2>Cargo: ' +cargo +' </h2> <h2>Seu novo salario apos reajuste: ' +salario +'</h2>')
})

module.exports = router;