let contador = 0;
let input = document.querySelector('.inputTarefa');
let btnAdd = document.getElementById('btn_add');
let main = document.getElementById('areaLista');

function addTarefa() {
     valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Delete</button>
        </div>
    </div>`;


        // ADICIONAR NOVO ITEM NO MAIN 
    main.innerHTML += novoItem;
    input.focus();

    // ZERAR OS CAMPOS
        input.value = "";
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == 'item') {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' +id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        //joga o item pra baixo
        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' +id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}


// FUNÇÃO PARA USAR O ENTER
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

