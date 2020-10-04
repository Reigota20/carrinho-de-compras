// lista agora virou GLOBAL
var minhaLista = [];

function add() {
	console.log('add()');
	var nome = document.getElementById('inputNome').value;
	var nome = document.getElementById('inputNome').value;
	var nome = document.getElementById('inputNome').value;
	var nome = document.getElementById('inputNome').value;
	console.log('NOME:', nome);
}

function remove() {
	console.log('remove');
	meuarray_pop(document.getElementById('inputNome').value);
	console.log(meuarray);
	list();

}
function list() {
	console.log('list');
	let lista = '<ul>';
	for (i = 0; i < meuarray.length; i++) {
		lista += '<li>' + meuarray[i] + '</li>';
	}
	lista += '</ul>';
	document.getElementById('lista').innerHTML = '<br>' 
}