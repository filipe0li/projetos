var dados = [];

var tamanhoPagina = 5;
var pagina = 0;

function teste(){
    dados.push(['teste']);
    paginar();
    ajustarBotoes();
}
function paginar() {
$('table > tbody > tr').remove();
var tbody = $('table > tbody');
for (var i = pagina * tamanhoPagina; i < dados.length && i < (pagina + 1) *  tamanhoPagina; i++) {
    tbody.append(
        $('<tr>')
            .append($('<td>').append(dados[i][0]))
    )
}
$('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(dados.length / tamanhoPagina));
}

function ajustarBotoes() {
$('#proximo').prop('disabled', dados.length <= tamanhoPagina || pagina >= Math.ceil(dados.length / tamanhoPagina) - 1);
$('#anterior').prop('disabled', dados.length <= tamanhoPagina || pagina == 0);
}

$(function() {
$('#proximo').click(function() {
    if (pagina < dados.length / tamanhoPagina - 1) {
        pagina++;
        paginar();
        ajustarBotoes();
    }
});
$('#anterior').click(function() {
    if (pagina > 0) {
        pagina--;
        paginar();
        ajustarBotoes();
    }
});
});