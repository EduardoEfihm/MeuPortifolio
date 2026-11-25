

// Validação do formulário "Entre em contato"
const formularioContato = document.getElementById("formContato");

if (formularioContato) {
    formularioContato.addEventListener("submit", function (e) {
        e.preventDefault();

        const t = traducoes[idiomaAtual];
        let nome = document.getElementById("nomeContato").value;
        let email = document.getElementById("emailContato").value;
        let mensagem = document.getElementById("mensagemContato").value;
        let feedback = document.getElementById("feedback");

        feedback.textContent = "";
        feedback.className = "";

        if (nome.length < 3) {
            feedback.textContent = t.erro_nome;
            feedback.className = "erro";
            return;
        }

        if (email.indexOf("@") === -1) {
            feedback.textContent = t.erro_email;
            feedback.className = "erro";
            return;
        }

        if (mensagem.length < 10) {
            feedback.textContent = t.erro_mensagem;
            feedback.className = "erro";
            return;
        }

        feedback.textContent = t.sucesso_form;
        feedback.className = "sucesso";

        this.reset();
    });
}

// Alterna entre Modo Escuro e Modo Claro
function modoEscuro() {
    const ativado = document.body.classList.toggle("dark-mode");
    const botao = document.getElementById("btn-tema");
    const t = traducoes[idiomaAtual];

    if (botao) {
        botao.textContent = ativado ? t.btn_tema_claro : t.btn_tema_escuro;
    }
}