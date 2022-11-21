//bibli para ler do usuario 
const readline = require("readline-sync")
//funciona para agrupar tudo
function start() {
	//vai declarar um objeto para guardar todos os conteudos das pesquisas como imagem,termo de busca
	const content = {}
	//função para injetar uma prop nova nesse objeto 
	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()	
	function askAndReturnSearchTerm() {
	 	return readline.question("Type a Wikipedia search term: ")
	}
	function askAndReturnPrefix(){
		const prefixes = ['Who is','What is','The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes,'Choose one option: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
	}
	console.log(content)
}

start()