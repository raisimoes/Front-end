document.addEventListener("DOMContentLoaded", function () {
    var botoes = document.querySelectorAll('.destino button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function () {
            var nomeDestino = this.closest('.destino').querySelector('h2').textContent;
            var caracteristicasInclusas = this.closest('.destino').querySelectorAll('p:not(:first-of-type):not(:last-of-type)').textContent;
            var preco = this.closest('.destino').querySelector('h3').textContent;
            var taxasInclusas = this.closest('.destino').querySelector('h5:first-of-type').textContent;
            var pagamento = this.closest('.destino').querySelector('h5:last-of-type').textContent;

            var pacoteViagem = {
                destino: nomeDestino,
                caracteristicas: caracteristicasInclusas,
                preco: preco,
                taxasInclusas: taxasInclusas,
                formaPagamento: formaPagamento
            };

            console.log(pacoteViagem);
        });
    });

    function inserirItem() {
        var destino = document.getElementById('destino').value;
        var urlImagem = document.getElementById('imagemURL').value;
        var detalhes = document.getElementById('detalhes').value;

        var itemViagem = document.createElement('div');
        itemViagem.className = 'roteiro-viagens';

        itemViagem.innerHTML = `
        <img src="${urlImagem}" alt="${destino}">
        <div class="destino-info">
            <h2>${destino}</h2>
            <p>${detalhes}</p>
        </div> 
        `;

        var containerDestinos = document.querySelector('.container-destinos');
        containerDestinos.appendChild(itemViagem);

        document.getElementById('destination').value = '';
        document.getElementById('imagemURL').value = '';
        document.getElementById('detalhes').value = '';
    }
})
