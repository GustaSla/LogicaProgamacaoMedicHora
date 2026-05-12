/#Este arquivo possui somente a finalidade de contribuir para a compreensão de lógica de programação aplicada a Javascript, não integrando a totalidade do projeto*/

var perfil = "docente";
var email = "pamella.cpsilva@sp.senac.br";
var cracha = "1049682";
var cargaHoraria = 40;
var dias = 5;
var resultado;
var funcionárioAtivo = true;


console.log("Dados do Funcionário\n");
console.log("Perfil do funcionário: " + perfil);
console.log("O tipo da variável perfil é: " + typeof (perfil));

function calcularCargaHoraDiaria(cargaHoraria, dias) {
    resultado = cargaHoraria / dias;
    return resultado;
}

calcularCargaHoraDiaria(40, 5);
console.log("A carga horária por dia é o resultado de:" + cargaHoraria + 
    " horas dividido por " + " por " + dias + " dias= " + resultado + " horas");
    