const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMedicamento = document.getElementById("nome_med");
const inputData = document.getElementById("data");
const inputDosagem = document.getElementsByName("dosagem_mg");
const inputQtd = document.getElementById("qtd");

const keyNome = "mh-nome";
const keyEmail = "mh-email";
const keyMedicamento = "mh-medicamento";
const keyData = "mh-data";
const keyDosagem = "mh-dosagem";
const keyQtd = "mh-qtd";

function salvarNome() {
    localStorage.setItem("mh-nome", inputNome.value)
}
function salvarEmail() {
    localStorage.setItem("mh-email", inputEmail.value)
}
function salvarMedicamento() {
    localStorage.setItem("mh-medicamento", inputMedicamento.value)
}

function salvarData() {
    localStorage.setItem("mh-data", inputData.value)
}

function salvarDosagem() {
    localStorage.setItem("mh-dosagem", inputDosagem.value)
}

function salvarQtd() {
    localStorage.setItem("mh-qtd", inputQtd.value)
}

inputNome.addEventListener("input", salvarNome);
inputEmail.addEventListener("input", salvarEmail);
inputMedicamento.addEventListener("input", salvarMedicamento);
inputData.addEventListener("change", salvarData);
inputDosagem.addEventListener("change", salvarDosagem);
inputQtd.addEventListener("change", salvarQtd);

function carregarDados() {
    const nomeSalvo = localStorage.getItem("mh-nome");
    const emailSalvo = localStorage.getItem("mh-email");
    const medicamentoSalvo = localStorage.getItem("mh-medicamento");
    const dataSalva = localStorage.getItem("mh-data");
    const dosagemSalva = localStorage.getItem("mh-dosagem");
    const qtdSalva = localStorage.getItem("mh-qtd")

    if (nomeSalvo !== null) {
        inputNome.value = nomeSalvo;
    }

    if (emailSalvo !== null) {
        inputEmail.value = emailSalvo;
    }

    if (medicamentoSalvo !== null) {
        inputMedicamento.value = medicamentoSalvo;
    }

    if (dataSalva !== null) {
        inputData.value = dataSalva;
    }

    if (dosagemSalva !== null) {
        inputDosagem.value = dosagemSalva
    }

    if (qtdSalva !== null) {
        inputQtd.value = qtdSalva
    }
}

carregarDados();