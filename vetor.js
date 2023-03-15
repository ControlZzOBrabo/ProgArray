/*Foi declarada no lado de fora 
da função para ser uma variável Global*/
let valor_cidade = []
let res = document.getElementById('res').value

function inserir(){

    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    console.log(valor_cidade)
    res.innerHTML = valor_cidade
}

function excluir(){
    valor_cidade.pop()
    console.log(valor_cidade)

}