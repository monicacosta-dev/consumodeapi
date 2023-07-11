function buscar() {
    //vamos pegar o valor id  do elemento que deseja pegar!
    const cep = document.getElementById('cep').value;

  

    // Criar a Requisição usando o Fetch
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(retorno => retorno.json())
        .then(dados => {
            document.getElementById('logradouro').value = dados.logradouro
            document.getElementById('complemento').value = dados.complemento;
            document.getElementById('bairro').value = dados.bairro;
            document.getElementById('localidade').value = dados.localidade;
            document.getElementById('uf').value = dados.uf;
        });
    
    function redessociais() {
        
    }


}