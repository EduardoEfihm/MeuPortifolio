let idiomaAtual = "pt";

const traducoes = {
    pt: {
        btn_idioma: "EN",
        btn_tema_escuro: "Modo Escuro",
        btn_tema_claro: "Modo Claro",
        nav_sobre: "Sobre",
        nav_tecnologias: "Tecnologias",
        nav_conhecimentos: "Conhecimentos",
        nav_hobbies: "Hobbies",
        nav_objetivos: "Objetivos",
        nav_links: "Links",
        nav_sites: "Sites",
        nav_rotina: "Rotina",
        nav_contato: "Contato",
        nav_projetos: "Projetos",
        sobre_titulo: "Quem sou eu",
        sobre_p1: "Sou um estudante da área de tecnologia, atualmente focado em desenvolvimento web. Estou me aperfeiçoando em algumas linguagens de programação como Java e Python, além de estudar também o front-end em HTML, CSS e JavaScript. Também tenho um gosto por desenvolvimento de jogos e pixel art. Estou à procura da minha primeira experiência profissional para me inserir no mercado de trabalho.",
        sobre_p2: "O que me motiva a estudar tecnologia é a minha curiosidade em descobrir como as coisas funcionam por trás das cortinas. Acredito que estudando essa área eu terei uma visão ainda mais ampla de tudo a minha volta.",
        tech_titulo: "Tecnologias que já vi",
        conhec_titulo: "Meus Conhecimentos",
        th_tecnologia: "Tecnologia",
        th_nivel: "Nível",
        th_experiencia: "Experiência",
        nivel_basico: "Básico",
        nivel_iniciante: "Iniciante",
        nivel_breve: "Em breve",
        exp_2m: "2 meses",
        exp_1m: "1 mês",
        hobbies_titulo: "Meus hobbies para horas vagas",
        hobby_1: "Jogar Elden Ring e campo minado.",
        hobby_2: "Ouvir música.",
        hobby_3: "Assistir vídeos.",
        hobby_4: "Praticar Muay thai.",
        hobby_5: "Fazer exercícios físicos.",
        hobby_6: "Conversar sobre algum tema interessante.",
        obj_titulo: "Objetivos profissionais",
        proj_titulo: "Meus Projetos",
        proj1_titulo: "Xadrez",
        proj1_desc: "Desenvolvi uma partida de xadrez puramente usando Java, com lógica de programação e com poucas API. O jogo roda no terminal e no CMD.",
        proj2_desc: "Um sistemas de produtos e usuários sem integração com banco de dados, é um projeto um pouco mais avançado em que utilizei SpringBoot.",
        proj3_titulo: "Sistema de Comentários",
        proj3_desc: "Um sistema que desenvolvi com o objetivo de estudar a integração com MongoDB, funciona como uma rede de post e comentários.",
        links_titulo: "Links para me encontrar",
        link_github: "Meu GitHub",
        link_linkedin: "Meu Linkedin",
        link_email: "Meu e-mail",
        btn_curriculo: "📄 Baixar Currículo (PDF)",
        sites_titulo: "TOP 5 sites que mais acesso",
        site_minesweeper: "Campo minado",
        rotina_titulo: "Minha rotina de estudos",
        th_dia: "Dia",
        th_atividade: "Atividade",
        th_duracao: "Duração",
        dia_seg: "Segunda-feira",
        dia_ter: "Terça-feira",
        dia_qua: "Quarta-feira",
        dia_qui: "Quinta-feira",
        dur_2h: "2 horas",
        ativ_java: "Praticar exercícios em Java",
        ativ_html: "Praticar exercícios em HTML",
        aside_titulo: "Curiosidade sobre mim",
        aside_texto: "Prefiro ficar 5 horas seguidas no computador do que 2 horas em uma festa.",
        contato_titulo: "Entre em contato",
        label_nome: "Nome (mín. 3 caracteres):",
        label_email: "E-mail:",
        label_assunto: "Assunto:",
        label_mensagem: "Mensagem (mín. 10 caracteres):",
        ph_nome: "Seu nome completo",
        ph_assunto: "Dúvida, sugestão, orçamento...",
        ph_mensagem: "Digite sua mensagem aqui...",
        btn_enviar: "Enviar Mensagem",
        footer_texto: "© 2026 - Eduardo Oliveira | Análise e Desenvolvimento de Sistemas",
        erro_nome: "O Nome deve ter pelo menos 3 caracteres.",
        erro_email: "E-mail inválido. Certifique-se de incluir o '@'.",
        erro_mensagem: "A Mensagem deve ter pelo menos 10 caracteres.",
        sucesso_form: "Formulário enviado com sucesso!"
    },
    en: {
        btn_idioma: "PT",
        btn_tema_escuro: "Dark Mode",
        btn_tema_claro: "Light Mode",
        nav_sobre: "About",
        nav_tecnologias: "Technologies",
        nav_conhecimentos: "Skills",
        nav_hobbies: "Hobbies",
        nav_objetivos: "Goals",
        nav_links: "Links",
        nav_sites: "Websites",
        nav_rotina: "Routine",
        nav_contato: "Contact",
        nav_projetos: "Projects",
        sobre_titulo: "Who am I",
        sobre_p1: "I am a technology student currently focused on web development. I am improving my skills in programming languages such as Java and Python, as well as studying front-end development with HTML, CSS, and JavaScript. I also have a passion for game development and pixel art. I am looking for my first professional opportunity to enter the job market.",
        sobre_p2: "What motivates me to study technology is my curiosity to discover how things work behind the scenes. I believe that by studying this field, I will gain an even broader view of everything around me.",
        tech_titulo: "Technologies I have worked with",
        conhec_titulo: "My Skills",
        th_tecnologia: "Technology",
        th_nivel: "Level",
        th_experiencia: "Experience",
        nivel_basico: "Basic",
        nivel_iniciante: "Beginner",
        nivel_breve: "Coming soon",
        exp_2m: "2 months",
        exp_1m: "1 month",
        hobbies_titulo: "My hobbies for free time",
        hobby_1: "Playing Elden Ring and Minesweeper.",
        hobby_2: "Listening to music.",
        hobby_3: "Watching videos.",
        hobby_4: "Practicing Muay Thai.",
        hobby_5: "Working out.",
        hobby_6: "Talking about interesting topics.",
        obj_titulo: "Professional goals",
        proj_titulo: "My Projects",
        proj1_titulo: "Chess",
        proj1_desc: "I developed a chess game purely using Java, focusing on programming logic with minimal APIs. The game runs in the terminal and CMD.",
        proj2_desc: "A product and user management system without database integration; a slightly more advanced project where I used Spring Boot.",
        proj3_titulo: "Comment System",
        proj3_desc: "A system I built to study MongoDB integration, working like a social feed of posts and comments.",
        links_titulo: "Links to find me",
        link_github: "My GitHub",
        link_linkedin: "My LinkedIn",
        link_email: "My e-mail",
        btn_curriculo: "📄 Download Resume (PDF)",
        sites_titulo: "TOP 5 websites I visit most",
        site_minesweeper: "Minesweeper",
        rotina_titulo: "My study routine",
        th_dia: "Day",
        th_atividade: "Activity",
        th_duracao: "Duration",
        dia_seg: "Monday",
        dia_ter: "Tuesday",
        dia_qua: "Wednesday",
        dia_qui: "Thursday",
        dur_2h: "2 hours",
        ativ_java: "Practice Java exercises",
        ativ_html: "Practice HTML exercises",
        aside_titulo: "Fun fact about me",
        aside_texto: "I would rather spend 5 hours straight on the computer than 2 hours at a party.",
        contato_titulo: "Get in touch",
        label_nome: "Name (min. 3 characters):",
        label_email: "E-mail:",
        label_assunto: "Subject:",
        label_mensagem: "Message (min. 10 characters):",
        ph_nome: "Your full name",
        ph_assunto: "Question, suggestion, quote...",
        ph_mensagem: "Type your message here...",
        btn_enviar: "Send Message",
        footer_texto: "© 2026 - Eduardo Oliveira | Systems Analysis and Development",
        erro_nome: "Name must be at least 3 characters long.",
        erro_email: "Invalid e-mail. Make sure to include '@'.",
        erro_mensagem: "Message must be at least 10 characters long.",
        sucesso_form: "Form submitted successfully!"
    }
};

function alternarIdioma() {
    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";
    const t = traducoes[idiomaAtual];

    document.documentElement.lang = idiomaAtual === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const chave = el.getAttribute("data-i18n");
        if (t[chave]) {
            el.textContent = t[chave];
        }
    });

    // Atualiza textos que possuem tags internas (<strong>)
    const subtitulo = document.getElementById("header-subtitulo");
    if (subtitulo) {
        subtitulo.innerHTML = idiomaAtual === "pt"
            ? "<strong>Curso:</strong> Análise e Desenvolvimento de Sistemas | <strong>Local:</strong> Osasco-SP"
            : "<strong>Course:</strong> Systems Analysis and Development | <strong>Location:</strong> Osasco-SP, Brazil";
    }

    const obj1 = document.getElementById("obj_1");
    const obj2 = document.getElementById("obj_2");
    const obj3 = document.getElementById("obj_3");
    if (obj1 && obj2 && obj3) {
        if (idiomaAtual === "pt") {
            obj1.innerHTML = "<strong>Curto prazo (6 meses): </strong>Desenvolver um projeto completo com Java e HTML.";
            obj2.innerHTML = "<strong>Médio prazo (1-2 anos): </strong>Conseguir um estágio na minha área de estudo.";
            obj3.innerHTML = "<strong>Longo prazo (3-5 anos): </strong>Estar consolidado na minha carreira de Desenvolvimento.";
        } else {
            obj1.innerHTML = "<strong>Short term (6 months): </strong>Develop a complete project using Java and HTML.";
            obj2.innerHTML = "<strong>Medium term (1-2 years): </strong>Land an internship in my field of study.";
            obj3.innerHTML = "<strong>Long term (3-5 years): </strong>Be well-established in my Software Development career.";
        }
    }

    // Atualiza placeholders do formulário
    document.getElementById("nomeContato").placeholder = t.ph_nome;
    document.getElementById("assunto").placeholder = t.ph_assunto;
    document.getElementById("mensagemContato").placeholder = t.ph_mensagem;

    // Atualiza botões do topo
    document.getElementById("btn-idioma").textContent = t.btn_idioma;
    const modoEscuroAtivo = document.body.classList.contains("dark-mode");
    document.getElementById("btn-tema").textContent = modoEscuroAtivo ? t.btn_tema_claro : t.btn_tema_escuro;
}

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