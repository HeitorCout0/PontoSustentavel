function voltarInicio() {
  const container = document.getElementById('conteudo');
  container.innerHTML = `
    <section class="home-apresentacao">
      <div class="texto-container">
        <h2>Transformação Sustentável</h2>
        <p>
          A implementação da plataforma de reciclagem trará uma transformação significativa na forma como os cidadãos lidam com o descarte de resíduos, promovendo a separação correta e incentivando a reciclagem de maneira mais eficiente.
          Através da identificação automatizada dos resíduos e da localização de pontos de coleta seletiva, a plataforma proporcionará maior comodidade e agilidade para os usuários.
        </p>
      </div>
    </section>
    
    <section class="home-apresentacao">
      <div class="texto-container">
        <h2>Resultado a Longo-prazo</h2>
        <p>
          Os resultados esperados incluem uma redução no volume de resíduos enviados aos aterros sanitários, um aumento nas taxas de reciclagem, e uma maior conscientização ambiental, com benefícios a longo prazo tanto para o meio ambiente quanto para a sociedade, como a diminuição da poluição e a promoção de um ciclo sustentável de consumo e descarte.         </p>
      </div>
    </section>
    
    <section class="home-apresentacao">
      <div class="texto-container">
        <h2>Contribuição da comunidade</h2>
        <p>
        Promover a conscientização e a participação dos cidadãos na construção de um futuro mais sustentável, mesmo que a tecnologia desempenhe um papel crucial na melhoria da reciclagem e no gerenciamento de resíduos, ela deve ser complementada com a educação ambiental e o engajamento da comunidade. Devemos contribuir para um ambiente mais limpo, saudável e equilibrado, ao mesmo tempo em que se promove uma	transformação cultural voltada para práticas mais conscientes de consumo e descarte. 


        </p>
      </div>
    </section>
  `;
}

const ecopontos = {
  pilhas: [
    { nome: "Secretaria de Meio Ambiente", endereco: "Av. Cerro Azul, 544", telefone: "3293-8771" },
    { nome: "Atacadão Maringá", endereco: "Rua Fernão Dias, 300", telefone: "3218-8424" }
  ],
  reciclaveis: [

    { nome: "CooperPalmeiras", endereco: "Rodovia PR 317, 200", telefone: "99946-5778" },
    { nome: "CooperCicla", endereco: "Avenida Guairá, 184", telefone: "99873-6425" },
    { nome: "CooperNorte", endereco: "Rodovia PR 317, 200", telefone: "99702-4263" },
    { nome: "CooperAmbiental", endereco: "Rua Izaura Gambá Vitorino, 345", telefone: "99951-0772" },
    { nome: "CooperMaringa", endereco: "Rodovia PR 317, 200", telefone: "99888-2518" },
  ],
  vidros: [
    { nome: "Paróquia Nossa Senhora de Guadalupe", endereco: "Av. Carlos Borges, 1.999", telefone: "3259-2020" },
    { nome: "Sub. Prefeitura de Floriano", endereco: "Rua Pion. Octavio Franco, 1.135", telefone: "3260-1101" },
    { nome: "Coopervidros", endereco: "Estrada São Luiz, 2119, Gleba pinguim", telefone: "98415-3410" },
    { nome: "Tiro de Guerra de Maringá", endereco: "Av. Mandacaru, 730 ", telefone: "3901-1817" },
    { nome: "Paróquia Menino Jesus de Praga", endereco: "Rua Monsenhor Kimura, 31", telefone: "3227-2983" }
  ],
  eletronicos: [
    { nome: "Paço Municipal", endereco: "Av. XV de Novembro, 701", telefone: "3221-1200" },
    { nome: "Supermercados Cidade Canção ", endereco: "Av. Brasil, 7225", telefone: "3225-5000" },
    { nome: "SESI", endereco: "Rua Antonio Carniel, 499", telefone: "3218-5650" },
    { nome: "Tiro de Guerra de Maringá", endereco: "Av. Mandacaru, 730", telefone: "3901-1817" },
    { nome: "Faculdades Maringá 3027-1103", endereco: "Av. Prudente de Morais, 815", telefone: "3027-1103" }
  ]
};

function mostrarEcopontos(tipo) {
  const container = document.getElementById('conteudo');
  const lista = ecopontos[tipo];

  if (!lista) return;

  container.innerHTML = `<h2>Ecopontos de ${tipo.replace(/^\w/, c => c.toUpperCase())}</h2>`;
  lista.forEach(ponto => {
    container.innerHTML += `
      <div class="ecoponto">
        <h3>${ponto.nome}</h3>
        <p>📍 ${ponto.endereco}</p>
        <p>📞 ${ponto.telefone}</p>
      </div>
    `;
  });
}

function mostrarEquipe() {
  const container = document.getElementById('conteudo');
  container.innerHTML = `
    <h2>Quem Somos</h2>
    <div class="equipe">
      <div class="membro">
        <img src="src/assets/heitorAvatar.jpg" alt="Pessoa 1" />
        <h3>Heitor Couto</h3>
        <p>Engenharia de Software</p>
        <p>3º Semestre</p>
      </div>
      <div class="membro">
        <img src="src/assets/talisAvatar.jpg" alt="Pessoa 2" />
        <h3>Talis Sossai</h3>
        <p>Engenharia de Software</p>
        <p>3º Semestre</p>
      </div>
      <div class="membro">
        <img src="src/assets/mefhAvatar.jpg" alt="Pessoa 3" />
        <h3>Matheus Mansano</h3>
        <p>Engenharia de Software</p>
        <p>3º Semestre</p>
      </div>
    </div>
  `;
}

function mostrarCausa() {
  const container = document.getElementById('conteudo');
  container.innerHTML = `
    <div class="causa-grid">
      <div class="causa-card">
        <div class="causa-icon">
          <img src="src/assets/iconColect.png" alt="Ícone Localização" />
        </div>
        <div class="text">
          <strong>LOCALIZAR PONTOS DE COLETA:</strong>
          <p>Isso facilita o processo de busca a locais adequados para o descarte correto e sustentável para a comunidade.</p>
        </div>
      </div>
      <div class="causa-card">
        <div class="causa-icon">
          <img src="src/assets/iconInfo.png" alt="Ícone Informações" />
        </div>
        <div class="text">
          <strong>INFORMAÇÕES DETALHADAS:</strong>
          <p>Além de fornecer a localização, informações sobre os tipos de materiais recicláveis aceitos ajudam os usuários a se prepararem adequadamente para o descarte.</p>
        </div>
      </div>
      <div class="causa-card">
        <div class="causa-icon">
          <img src="src/assets/iconLocal.png" alt="Ícone Rotas" />
        </div>
        <div class="text">
          <strong>ROTAS E DIREÇÕES:</strong>
          <p>Permite que os usuários encontrem rotas e contatos para os pontos de coleta, tornando o processo mais conveniente e eficiente.</p>
        </div>
      </div>
      <div class="causa-card">
        <div class="causa-icon">
          <img src="src/assets/iconSustentavel.png" alt="Ícone Colaboração" />
        </div>
        <div class="text">
          <strong>COLABORAÇÃO SUSTENTÁVEL:</strong>
          <p>Ao incentivar a participação coletiva, contribui para um esforço em prol do meio ambiente e na conscientização pública e com o meio ambiente.</p>
        </div>
      </div>
    </div>
  `;
}

window.onload = function () {
  voltarInicio();
};

