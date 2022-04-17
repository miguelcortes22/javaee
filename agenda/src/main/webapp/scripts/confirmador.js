/**
 * Confirmacao de exclusao de um contato
 * @author Miguel Cortes
 * @param idcon
 */
 
 function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato ?");
	if(resposta === true) {
		window.location.href = "delete?idcon=" + idcon; // ?idcon= é recebido pelo Servlet, quando a requisição delete for enviada
	}
}