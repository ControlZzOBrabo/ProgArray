/*Foi declarada no lado de fora 
da função para ser uma variável Global*/
let valor_cidade = ['Tijucas', 'Itapema', 1, 2, '@', '#']

function inserir(){

    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    console.log(valor_cidade)

}

function excluír(){
    valor_cidade.pop()
    console.log(valor_cidade)

}